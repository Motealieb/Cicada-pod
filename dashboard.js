// src/components/Dashboard.jsx
import { useState } from 'react';
import { uploadDesign } from '../firebase';

export default function Dashboard() {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) return alert('Please select a design first.');

    uploadDesign(file)
      .then(() => alert('Design uploaded successfully!'))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="dashboard">
      <h2>Artist Dashboard</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload Design</button>
    </div>
  );
}
