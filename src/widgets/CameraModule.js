import { useEffect, useRef } from 'react';

const CameraModule = ({ isOpen }) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

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
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    const closeCamera = async () => {
      if (streamRef.current) {
        const tracks = streamRef.current.getTracks();
        for (const track of tracks) {
          await track.stop();
        }
        console.log('Camera stream stopped');
      }

      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }

      console.log('Camera closed');
      
    };

    if (isOpen) {
      openCamera();
    }

    return () => {
      closeCamera();
    };

  }, [isOpen]);  

  return <video ref={videoRef} autoPlay playsInline muted className='camera-video img-fluid'></video>;
};

export default CameraModule;
