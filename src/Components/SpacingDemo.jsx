import React, { useState } from 'react';

const spacings = [
  { className: 'm-1', label: 'Margin 1' },
  { className: 'm-2', label: 'Margin 2' },
  { className: 'p-1', label: 'Padding 1' },
  { className: 'p-2', label: 'Padding 2' },
  { className: 'p-3', label: 'Padding 3' },
];

export default function SpacingDemo() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div style={{ padding: '1rem', backgroundColor: '#f4f6f9' }}>
      <h2
        style={{
          fontSize: '1.75rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#2c3e50', 
        }}
      >
        🧭 Spacing Utilities
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {spacings.map((item, i) => {
          const exampleCode = `<div class="${item.className}">Content</div>`;
          return (
            <div
              key={i}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '1rem',
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            >
              
              <div
                style={{
                  backgroundColor: '#a8d8f0', 
                  color: '#000',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                }}
              >
                {item.label}
              </div>

              
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#ecf0f1', 
                  color: '#2c3e50', 
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
                    background: copiedIndex === i ? '#2ecc71' : '#3498db',
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
