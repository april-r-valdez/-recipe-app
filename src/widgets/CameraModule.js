import { useEffect, useRef } from 'react';
import * as tf from "@tensorflow/tfjs";
import { drawBox } from "../components/ObjectDetection/BoundingBox"

const CameraModule = ({ isOpen, net}) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null)

  const runModel = async () => {
    // Loop and detect objects
    setInterval(() => {
      detect(net);
    }, 16) ;     
  };

  const detect = async (net) => {
    try {  
    // When data is available
      if (
          typeof videoRef.current != "undefined" &&
          videoRef.current != null &&
          net != null
        ) {
        const obj = await net.detect(videoRef.current);
        const videoWidth = videoRef.current.videoWidth;
        const videoHeight = videoRef.current.videoHeight;
        // Set canvas width and height
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
        
        const ctx = canvasRef.current.getContext("2d");
        drawBox(obj, ctx); 
        // Dispose off previous detection else will lead to memory outage
        tf.dispose(obj);
      }
    } catch (error) {
      console.log("Waiting to sync Prediction/ Model: Logged");
    }
  };

  useEffect(() => {
    let stream;
    const openCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: {facingMode: 'environment'},
        });  
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
          runModel();
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    const closeCamera = async () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }

      if (streamRef.current) {
        const tracks = streamRef.current.getTracks();
        for (const track of tracks) {
          await track.stop();
        }
        console.log('Camera stream stopped');
      }       
    };

    if (isOpen) { openCamera(); }

    return () => { closeCamera(); };
  }, []);  

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video 
        ref={videoRef} autoPlay playsInline muted className='camera-video img-fluid'></video>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          zIndex: 2, // Set a higher zIndex than the video
          left: 0,
          right: 0,
          margin: 'auto',
          textAlign: 'center',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
    
  );
};

export default CameraModule;
