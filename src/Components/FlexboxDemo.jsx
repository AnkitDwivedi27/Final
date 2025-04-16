import React, { useState } from 'react';

export default function FlexboxDemo() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const flexboxCode = `
  <div class="d-flex gap-2" style="background-color: #a8d8f0; padding: 1rem; border-radius: 8px;">
    <div class="bg-primary p-2 rounded" style="flex: 1; text-align: center;">Flex 1</div>
    <div class="bg-primary p-2 rounded" style="flex: 1; text-align: center;">Flex 2</div>
    <div class="bg-primary p-2 rounded" style="flex: 1; text-align: center;">Flex 3</div>
  </div>
  `;

  const centeredCode = `
  <div class="d-flex justify-content-center align-items-center" style="background-color: #fdcb6e; padding: 1rem 2rem; border-radius: 8px;">
    Centered Box
  </div>
  `;

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
        🧭 Flex Utilities
      </h2>

      
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          backgroundColor: '#a8d8f0', 
          padding: '1rem',
          borderRadius: '8px',
          color: '#fff',
        }}
      >
        <div
          style={{
            backgroundColor: '#3498db', 
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            flex: 1, 
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Flex 1
        </div>
        <div
          style={{
            backgroundColor: '#3498db',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            flex: 1,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Flex 2
        </div>
        <div
          style={{
            backgroundColor: '#3498db',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            flex: 1,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Flex 3
        </div>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
       
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
          <code>{flexboxCode}</code>
          <button
            onClick={() => handleCopy(flexboxCode, 0)}
            style={{
              background: copiedIndex === 0 ? '#2ecc71' : '#3498db', 
              color: '#fff',
              border: 'none',
              padding: '4px 10px',
              marginLeft: '1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: '0.3s',
            }}
          >
            {copiedIndex === 0 ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

    
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2rem',
          backgroundColor: '#fdcb6e', 
          color: '#2c3e50',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Centered Box
      </div>

      <div style={{ marginTop: '1.5rem' }}>
       
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
          <code>{centeredCode}</code>
          <button
            onClick={() => handleCopy(centeredCode, 1)}
            style={{
              background: copiedIndex === 1 ? '#2ecc71' : '#3498db',
              color: '#fff',
              border: 'none',
              padding: '4px 10px',
              marginLeft: '1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: '0.3s',
            }}
          >
            {copiedIndex === 1 ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}
