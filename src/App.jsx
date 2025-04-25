import React, { useState } from 'react';

export default function App() {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let chars = '';
    if (includeUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    if (!chars) {
      setPassword('Select at least one option');
      return;
    }

    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '1rem', fontWeight: 'normal', color: '#333' }}>
                Welcome to Supriya's </h2>
        <h1 style={{ marginBottom: '1.5rem' }}>Password Generator</h1>

        <div style={{ marginBottom: '1rem' }}>
          <label>Password Length: </label>
          <input
            type="number"
            value={length}
            min="4"
            max="24"
            onChange={(e) => setLength(e.target.value)}
            style={{ marginLeft: '0.5rem', padding: '0.3rem' }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          <label><input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} /> Include Uppercase</label>
          <label><input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} /> Include Lowercase</label>
          <label><input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} /> Include Numbers</label>
          <label><input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} /> Include Symbols</label>
        </div>

        <button
          onClick={generatePassword}
          style={{
            padding: '0.5rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#4f46e5',
            color: 'white',
            borderRadius: '6px',
            marginBottom: '1rem'
          }}
        >
          Generate
        </button>

        <div
          style={{
            padding: '0.75rem',
            backgroundColor: '#f0f0f0',
            borderRadius: '6px',
            fontWeight: 'bold',
            wordBreak: 'break-word',
            minHeight: '40px'
          }}
        >
          {password}
        </div>
      </div>
    </div>
  );
}
