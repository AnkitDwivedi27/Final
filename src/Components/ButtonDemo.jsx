import React, { useState } from 'react';

const buttons = [
  { label: 'Primary', className: 'bg-lightblue text-dark' },
  { label: 'Secondary', className: 'bg-lightgreen text-dark' },
  { label: 'Accent', className: 'bg-lightyellow text-dark' },
  { label: 'Danger', className: 'bg-lightcoral text-dark' },
  { label: 'Success', className: 'bg-lightskyblue text-dark' },
  { label: 'Warning', className: 'bg-lightgoldenrodyellow text-dark' },
];

export default function ButtonDemo() {
  const [activeClass, setActiveClass] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Class copied to clipboard!');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2
        style={{
          fontSize: '1.75rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#2c3e50',
        }}
      >
        🔘 Button Styles
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {buttons.map((btn, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            
            <button
              onClick={() => setActiveClass(btn.className)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                backgroundColor: btn.className.includes('lightblue')
                  ? '#3498db'
                  : btn.className.includes('lightgreen')
                  ? '#2ecc71'
                  : btn.className.includes('lightyellow')
                  ? '#f39c12'
                  : btn.className.includes('lightcoral')
                  ? '#e74c3c'
                  : btn.className.includes('lightskyblue')
                  ? '#1abc9c'
                  : '#f1c40f', 
                color: '#fff', 
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                transition: '0.3s ease',
              }}
            >
              {btn.label}
            </button>

           
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#ecf0f1', 
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                border: '1px solid #dcdcdc', 
                width: '100%',
              }}
            >
              <code
                style={{
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  color: '#2c3e50', 
                  wordWrap: 'break-word',
                  flex: 1,
                }}
              >
                {`<button class="${btn.className}">${btn.label}</button>`}
              </code>
              <button
                onClick={() => handleCopy(`<button class="${btn.className}">${btn.label}</button>`)}
                style={{
                  background: '#2980b9', 
                  color: '#fff',
                  border: 'none',
                  padding: '6px 12px',
                  marginLeft: '1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: '0.3s',
                }}
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
