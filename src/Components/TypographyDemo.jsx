import React, { useState } from 'react';

export default function TypographyDemo() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const typographyStyles = [
    { className: 'text-xs', label: 'Text XS' },
    { className: 'text-sm', label: 'Text SM' },
    { className: 'text-base', label: 'Text Base' },
    { className: 'text-lg', label: 'Text LG' },
    { className: 'text-xl', label: 'Text XL' },
    { className: 'font-light', label: 'Font Light' },
    { className: 'font-normal', label: 'Font Normal' },
    { className: 'font-bold', label: 'Font Bold' },
    { className: 'text-center', label: 'Text Center' },
  ];

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
        📝 Typography Utilities
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {typographyStyles.map((item, i) => {
          const exampleCode = `<p class="${item.className}">${item.label}</p>`;
          return (
            <div
              key={i}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '1rem',
                backgroundColor: '#f4f6f9',
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
              }}
            >
             
              <div
                style={{
                  fontSize: item.className.includes('text-xs')
                    ? '0.75rem'
                    : item.className.includes('text-sm')
                    ? '0.875rem'
                    : item.className.includes('text-base')
                    ? '1rem'
                    : item.className.includes('text-lg')
                    ? '1.125rem'
                    : item.className.includes('text-xl')
                    ? '1.25rem'
                    : '1rem',
                  fontWeight: item.className.includes('font-light')
                    ? '300'
                    : item.className.includes('font-normal')
                    ? '400'
                    : item.className.includes('font-bold')
                    ? '700'
                    : '400',
                  textAlign: item.className.includes('text-center') ? 'center' : 'left',
                  backgroundColor: '#3498db',
                  color: '#fff', 
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
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
                    background: copiedIndex === i ? '#2ecc71' : '#2980b9',
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
