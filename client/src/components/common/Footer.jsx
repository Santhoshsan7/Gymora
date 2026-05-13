import { Dumbbell, MessageCircle, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 2fr', gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2rem' }}>
              <div style={{ width: 40, height: 40, backgroundImage: 'linear-gradient(135deg, #bef264, #10b981)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Dumbbell size={22} style={{ color: '#020617' }} />
              </div>
              <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}>GYMORA</span>
            </a>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem', maxWidth: 350 }}>
              The future of fitness is artificial intelligence. Join thousands who transformed their lives.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Instagram */}
              <a href="#" style={{ width: 40, height: 40, borderRadius: '0.75rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* WhatsApp */}
              <a href="#" style={{ width: 40, height: 40, borderRadius: '0.75rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                <MessageCircle size={20} />
              </a>
              {/* Twitter (X) */}
              <a href="#" style={{ width: 40, height: 40, borderRadius: '0.75rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#e2e8f0', marginBottom: '2rem' }}>Platform</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['AI Calculator', 'Diet Architect', 'Smart Training', 'Exercise Vault'].map(item => (
                <li key={item}><a href="#" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 300ms' }}>{item} <ArrowUpRight size={14} style={{ opacity: 0.4 }} /></a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#e2e8f0', marginBottom: '2rem' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['About Us', 'Community', 'Our Science', 'Privacy'].map(item => (
                <li key={item}><a href="#" style={{ color: '#94a3b8' }}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#e2e8f0', marginBottom: '2rem' }}>Join the Vanguard</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Get weekly AI-optimized training tips.</p>
            <div style={{ position: 'relative' }}>
              <input type="email" placeholder="Enter your email" className="input-field" style={{ paddingRight: '6rem' }} />
              <button className="btn-primary" style={{ position: 'absolute', right: 6, top: 6, bottom: 6, padding: '0 1.5rem', fontSize: '0.65rem', borderRadius: '0.5rem' }}>Join</button>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#64748b', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p>© 2026 GYMORA AI LABS. ALL RIGHTS RESERVED.</p>
            <p style={{ color: '#bef264', letterSpacing: '0.1em' }}>Designed by Malini Tech solution</p>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            <a href="#" style={{ color: '#64748b' }}>Security</a>
            <a href="#" style={{ color: '#64748b' }}>Status</a>
            <a href="#" style={{ color: '#64748b' }}>API</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
