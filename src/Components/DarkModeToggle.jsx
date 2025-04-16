import React, { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const copyClass = () => {
    const classText = 'dark';
    navigator.clipboard.writeText(classText);
    alert('Class "dark" copied to clipboard!');
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
        🌓 Dark Mode Toggle
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
       
        <button
          onClick={toggleMode}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            backgroundColor: isDark ? '#f39c12' : '#34495e',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: '0.3s ease',
          }}
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
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
            {`<html class="dark"> or use toggle logic`}
          </code>
          <button
            onClick={copyClass}
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
    </div>
  );
}
