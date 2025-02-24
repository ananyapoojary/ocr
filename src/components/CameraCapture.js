import React, { useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPLOAD_IMAGE } from '../graphql/mutations';
// Remove this line


const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => console.error('Error accessing camera:', err));
  };

  const captureImage = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 640, 480);
    const imageData = canvasRef.current.toDataURL('image/png');
    handleUpload(imageData);
  };

  const handleUpload = async (imageData) => {
    try {
      await uploadImage({
        variables: {
          image: imageData,
        },
      });
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Upload failed', error);
      alert('Upload failed');
    }
  };

  return (
    <div className="camera-container">
      <h2>Capture Image for OCR</h2>
      <button onClick={startCamera}>Open Camera</button>
      <video ref={videoRef} width="640" height="480" />
      <button onClick={captureImage}>Capture</button>
      <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
    </div>
  );
};

export default CameraCapture;
