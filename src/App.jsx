import './Library/Spacing.css';
import './Library/Flexbox.css';
import './Library/Typography.css';
import './Library/Color.css';
import React, { useState } from 'react';
import './Style.css';
import ColorDemo from './Components/ColorDemo';
import SpacingDemo from './Components/SpacingDemo';
import TypographyDemo from './Components/TypographyDemo';
import FlexboxDemo from './Components/FlexboxDemo';
import ButtonDemo from './Components/ButtonDemo';
import Searchbar from './Components/Searchbar';
import DarkModeToggle from './Components/DarkModeToggle';

export default function App() {
  const [view, setView] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = ['colors', 'spacing', 'typography', 'flexbox', 'buttons', 'dark'];

  const handleSearch = (term) => {
    setSearchTerm(term);
    const match = menuItems.find(item => item.includes(term.toLowerCase()));
    if (match) setView(match);
  };

  const handleCopyCDN = () => {
    const cdnLink = "https://ankitdwivedi27.github.io/BuildCustomCss/build.css";
    navigator.clipboard.writeText(cdnLink).then(() => {
      alert("✅ CDN link copied to clipboard!");
    }).catch(err => {
      alert("❌ Failed to copy link");
    });
  };

  const renderComponent = () => {
    switch (view) {
      case 'colors': return <ColorDemo />;
      case 'spacing': return <SpacingDemo />;
      case 'typography': return <TypographyDemo />;
      case 'flexbox': return <FlexboxDemo />;
      case 'buttons': return <ButtonDemo />;
      case 'dark': return <DarkModeToggle />;
      default:
        return (
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>🎨 My Custom CSS Framework</h1>

            <p style={{ marginBottom: '1rem' }}>
              Build fast and responsive UIs with simple class-based utilities!
            </p>

            <div style={{
              backgroundColor: '#f1f1f1',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              marginBottom: '0.75rem',
              display: 'inline-block',
              fontFamily: 'monospace',
              wordWrap: 'break-word',
              maxWidth: '90%',
              color: '#333',
              fontSize: '0.9rem'
            }}>
              <a
                href="https://ankitdwivedi27.github.io/BuildCustomCss/build.css"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#007bff' }}
              >
                https://ankitdwivedi27.github.io/BuildCustomCss/build.css
              </a>
            </div>
            <br />

            <button
              onClick={handleCopyCDN}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginBottom: '1rem',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
            >
              📋 Copy CDN Link
            </button>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '1.5rem'
            }}>
              <div style={{
                padding: '0.75rem',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '0.5rem',
                cursor: 'pointer'
              }}>Primary</div>
              <div style={{
                padding: '0.75rem',
                backgroundColor: '#6c757d',
                color: '#fff',
                borderRadius: '0.5rem',
                cursor: 'pointer'
              }}>Secondary</div>
              <div style={{
                padding: '0.75rem',
                backgroundColor: '#ffc107',
                color: '#000',
                borderRadius: '0.5rem',
                cursor: 'pointer'
              }}>Accent</div>
              <div style={{
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }}>Button</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{
          fontSize: '1.125rem',
          fontWeight: 'bold',
          color: '#007bff',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span role="img" aria-label="palette">🎨</span>
          <span>CSS Framework</span>
        </div>

        <div style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span
              onClick={() => setView('home')}
              style={{
                cursor: 'pointer',
                padding: '4px 8px',
                transition: 'color 0.3s ease',
                color: view === 'home' ? '#007bff' : '#000',
                fontWeight: view === 'home' ? 'bold' : 'normal'
              }}
            >
              Home
            </span>

            {menuItems.map(item => (
              <span
                key={item}
                onClick={() => setView(item)}
                style={{
                  cursor: 'pointer',
                  padding: '4px 8px',
                  textTransform: 'capitalize',
                  color: view === item ? '#007bff' : '#000',
                  fontWeight: view === item ? 'bold' : 'normal'
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#f1f3f5',
            padding: '6px 12px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            border: '1px solid #ccc',
            maxWidth: '240px',
            width: '100%',
            transition: 'all 0.3s ease-in-out'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6c757d" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 
              1.415-1.414l-3.85-3.85zm-5.242 1.106a5 5 0 1 
              1 0-10 5 5 0 0 1 0 10z" />
            </svg>
            <Searchbar onSearch={handleSearch} />
          </div>
        </div>
      </nav>

      <main style={{
        padding: '1.5rem 1rem',
        minHeight: '100vh',
        backgroundColor: view === 'home' ? '#f0f0f0' : 'transparent',
        backgroundImage: view === 'home' ? 'url(https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg)' : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden'
      }}>
        {renderComponent()}
      </main>
    </div>
  );
}
