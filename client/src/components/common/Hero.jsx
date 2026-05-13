import React from 'react';

const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: '#020617',
    }}>
      {/* 🖼️ RIGHT-ALIGNED BACKGROUND IMAGE */}
      <div className="hero-bg-container" style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: '70%', // Covers the right side area on desktop
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <img 
          src="/gym-hero.png" 
          alt="Gymora Background" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.8,
            filter: 'brightness(0.7) contrast(1.1)',
          }}
        />
        
        {/* Cinematic Blend */}
        <div className="hero-gradient-overlay" style={{ 
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to right, #020617 10%, rgba(2,6,23,0.8) 30%, transparent 70%)',
          zIndex: 1 
        }} />
        
        {/* Bottom and Top fades */}
        <div style={{ 
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '20vh',
          background: 'linear-gradient(to top, #020617, transparent)',
          zIndex: 1 
        }} />
        <div style={{ 
          position: 'absolute', top: 0, left: 0, right: 0, height: '15vh',
          background: 'linear-gradient(to bottom, #020617, transparent)',
          zIndex: 1 
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', paddingTop: '5rem' }}>
        <div className="hero-text-content" style={{ maxWidth: '800px', textAlign: 'left', marginTop: '2rem' }}>
          <h1 className="hero-title" style={{
            fontSize: 'clamp(2.8rem, 10vw, 5.5rem)',
            fontWeight: 950, lineHeight: 0.9, textTransform: 'uppercase',
            marginBottom: '1.8rem', letterSpacing: '-0.05em', fontStyle: 'italic',
            color: 'white', textShadow: '0 10px 40px rgba(0,0,0,0.8)'
          }}>
            REACH YOUR LIMITS<br />
            <span className="gradient-text">AND GET TO THE</span><br />
            NEXT LEVEL
          </h1>

          <p className="hero-description" style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#cbd5e1', marginBottom: '3.5rem',
            maxWidth: '600px', lineHeight: 1.7, fontWeight: 500,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            Gymora AI crafts hyper-personalized nutrition and workout protocols 
            tailored to your unique biology. Stop guessing. Start growing.
          </p>

          <div className="hero-btn-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a href="#vision" className="btn-primary" style={{ padding: '1.2rem 3.5rem', fontSize: '0.85rem', letterSpacing: '0.05em', boxShadow: '0 10px 30px rgba(190,242,100,0.4)' }}>START TRANSFORMATION</a>
            <a href="#calculator" className="btn-secondary" style={{ padding: '1.2rem 3.5rem', fontSize: '0.85rem', letterSpacing: '0.05em', backdropFilter: 'blur(10px)' }}>BIOMETRIC SCAN</a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.3); } 100% { opacity: 1; transform: scale(1); } }
        
        @media (max-width: 992px) { 
          .hero-bg-container { 
            width: 100% !important; 
            opacity: 0.6 !important;
          }
          .hero-gradient-overlay {
            background: radial-gradient(circle at center, rgba(2,6,23,0.4) 0%, #020617 100%) !important;
          }
          .hero-text-content { 
            margin: 0 auto; 
            text-align: center !important; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            padding: 0 1rem;
          }
          .hero-title { font-size: 3.2rem !important; margin-bottom: 2rem !important; }
          .hero-description { margin: 0 auto 3rem auto !important; text-align: center; }
          .hero-btn-group { 
            width: 100%; 
            flex-direction: column; 
            gap: 1rem !important; 
            align-items: stretch;
          }
          .btn-primary, .btn-secondary { 
            width: 100%; 
            text-align: center; 
            padding: 1rem 1.5rem !important; // Reduced padding
            font-size: 0.75rem !important; // Reduced font size
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
