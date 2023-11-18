import { useEffect, useRef } from 'react';
import { IoCamera } from "react-icons/io5";

const CameraModule = ({isOpen, onClose}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream;

    const openCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: {facingMode: 'environment'},
        });
  
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    const closeCamera = () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }

      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }

      if (onClose) {
        onClose();
      }
    };

    if (isOpen) {
      openCamera();
    }

    if (onClose) {
      closeCamera();
    }

    return () => {
      closeCamera();
    };

  }, [isOpen, onClose]);  

  return (<video ref={videoRef} autoPlay playsInline muted></video>);
};

export default CameraModule;
