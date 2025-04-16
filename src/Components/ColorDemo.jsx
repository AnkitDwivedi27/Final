import React, { useState } from 'react';

const colors = [
  { className: 'bg-primary text-light', label: 'Primary', hex: '#0069d9' },
  { className: 'bg-secondary text-light', label: 'Secondary', hex: '#495057' },
  { className: 'bg-accent text-dark', label: 'Accent', hex: '#fd7e14' },

  { className: 'bg-success text-light', label: 'Success', hex: '#28a745' },
  { className: 'bg-danger text-light', label: 'Danger', hex: '#dc3545' },
  { className: 'bg-warning text-dark', label: 'Warning', hex: '#ffc107' },
  { className: 'bg-info text-dark', label: 'Info', hex: '#17a2b8' },

  { className: 'bg-light text-dark', label: 'Light', hex: '#f8f9fa' },
  { className: 'bg-dark text-light', label: 'Dark', hex: '#343a40' }
];


export default function ColorDemo() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2
        style={{
          fontSize: '1.75rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#333',
        }}
      >
        🎨 Color Palette Utilities
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {colors.map((color, i) => {
          const exampleCode = `<div class="${color.className}">This is ${color.label}</div>`;
          return (
            <div
              key={i}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '1rem',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
              }}
            >
              
              <div
                style={{
                  backgroundColor: color.hex,
                  color: color.className.includes('text-light') ? '#fff' : '#000',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                }}
              >
                {color.label} Background
              </div>

              
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#1e1e1e',
                  color: '#dcdcdc',
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                }}
              >
                <code>{exampleCode}</code>
                <button
                  onClick={() => handleCopy(exampleCode, i)}
                  style={{
                    background: copiedIndex === i ? '#28a745' : '#444', 
                    color: '#fff',
                    border: 'none',
                    padding: '4px 10px',
                    marginLeft: '1rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: '0.3s',
                  }}
                >
                  {copiedIndex === i ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
