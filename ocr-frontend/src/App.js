import React from 'react';
import ImageUpload from './components/ImageUpload';
import CameraCapture from './components/CameraCapture';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>OCR Image Upload & Capture</h1>
      <ImageUpload />
      <CameraCapture />
    </div>
  );
}

export default App;
