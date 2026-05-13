import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Vision AI', href: '#vision' },
    { name: 'Body AI', href: '#body-scan' },
    { name: 'Metrics', href: '#calculator' },
    { name: 'Diet Plan', href: '#diet' },
    { name: 'Workouts', href: '#workouts' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 400ms ease',
      padding: isScrolled ? '0.6rem 0' : '1.5rem 0',
      backgroundColor: isScrolled ? 'rgba(2,6,23,0.98)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40,
            backgroundImage: 'linear-gradient(135deg, #bef264, #10b981)',
            borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 15px rgba(190,242,100,0.3)'
          }}>
            <Dumbbell size={20} style={{ color: '#020617' }} />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>GYMORA</span>
        </a>

        {/* Desktop Nav */}
        <div className="desktop-only" style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>{link.name}</a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-only">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{ 
          position: 'fixed', 
          inset: 0, 
          backgroundColor: '#020617', 
          zIndex: 150, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '2rem', 
          gap: '2rem',
          animation: 'fadeIn 300ms ease-out'
        }}>
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            <X size={32} />
          </button>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)} 
                style={{ 
                  fontSize: '2rem', 
                  fontWeight: 900, 
                  color: 'white', 
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <button className="btn-primary" style={{ marginTop: '2rem', padding: '1rem 3rem' }}>GET STARTED</button>
        </div>
      )}
      
      <style>{`
        @media (max-width: 992px) { .desktop-only { display: none !important; } .mobile-only { display: block !important; } }
        @media (min-width: 993px) { .desktop-only { display: flex !important; } .mobile-only { display: none !important; } }
      `}</style>
    </nav>
  );
};

export default Navbar;
