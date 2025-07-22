// src/components/ArtistRegister.jsx
import { useState } from 'react';
import { registerArtist } from '../firebase';

export default function ArtistRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    registerArtist(email, password)
      .then(() => alert('Account created successfully!'))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="register">
      <h2>Register as Artist</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
