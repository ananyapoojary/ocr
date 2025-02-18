import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPLOAD_IMAGE } from '../graphql/mutations';
import '../styles/UploadStyles.css';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file!');

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      try {
        await uploadImage({
          variables: {
            image: reader.result, // Base64 string
          },
        });
        alert('Image uploaded successfully!');
      } catch (error) {
        console.error('Upload failed', error);
        alert('Upload failed');
      }
    };
  };

  return (
    <div className="upload-container">
      <h2>Upload Image for OCR</h2>
      <input type="file" accept="image/*" id="fileInput" onChange={handleFileChange} />
      <label htmlFor="fileInput">Choose Image</label>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
