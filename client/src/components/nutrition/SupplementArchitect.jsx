import React, { useState } from 'react';
import { Pill, Clock, Zap, Target, CheckCircle2 } from 'lucide-react';

const supplementData = {
  'weight-loss': [
    { name: "Whey Isolate", timing: "Post-Workout", dose: "1 Scoop", purpose: "Muscle repair with zero carbs", img: "🥛" },
    { name: "L-Carnitine", timing: "Pre-Workout", dose: "1500mg", purpose: "Facilitates fat burning for energy", img: "💊" },
    { name: "Green Tea Extract", timing: "Morning", dose: "500mg", purpose: "Boosts metabolic rate", img: "🍵" },
    { name: "BCAAs", timing: "Intra-Workout", dose: "5g", purpose: "Prevent muscle breakdown", img: "🥤" },
    { name: "Omega-3", timing: "With Meal", dose: "1000mg", purpose: "General health & inflammation", img: "🐟" },
  ],
  'muscle-gain': [
    { name: "Creatine Monohydrate", timing: "Anytime", dose: "5g", purpose: "Increase strength & ATP production", img: "⚡" },
    { name: "Mass Gainer", timing: "Mid-Day", dose: "2 Scoops", purpose: "High calorie & carb support", img: "🥣" },
    { name: "Whey Concentrate", timing: "Post-Workout", dose: "1-2 Scoops", purpose: "High quality protein for growth", img: "🥛" },
    { name: "Pre-Workout", timing: "Pre-Workout", dose: "1 Scoop", purpose: "Energy, focus & muscle pump", img: "🔥" },
    { name: "Casein Protein", timing: "Before Bed", dose: "1 Scoop", purpose: "Slow-release protein for recovery", img: "🌙" },
  ]
};

const SupplementArchitect = () => {
  const [goal, setGoal] = useState('muscle-gain');

  const stack = supplementData[goal];

  const tabStyle = (active) => ({
    padding: '0.6rem 1.4rem', borderRadius: '0.6rem', border: 'none', cursor: 'pointer',
    fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em',
    backgroundImage: active ? 'linear-gradient(to right, #bef264, #10b981)' : 'none',
    backgroundColor: active ? undefined : 'transparent',
    color: active ? '#020617' : '#94a3b8',
    transition: 'all 300ms',
  });

  return (
    <section id="supplements" className="section-padding" style={{ backgroundColor: 'rgba(15,23,42,0.4)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ maxWidth: 500 }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>AI SUPPLEMENT <span className="gradient-text">ARCHITECT</span></h2>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>Optimize your performance with a custom stack designed for your physiological goals.</p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', padding: '0.35rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
            <button onClick={() => setGoal('muscle-gain')} style={tabStyle(goal === 'muscle-gain')}>Bulk / Gain</button>
            <button onClick={() => setGoal('weight-loss')} style={tabStyle(goal === 'weight-loss')}>Cut / Loss</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {stack.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.5rem', transition: 'all 300ms' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{item.img}</span>
                <div style={{ padding: '0.3rem 0.6rem', backgroundColor: 'rgba(190,242,100,0.1)', border: '1px solid rgba(190,242,100,0.2)', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Clock size={12} style={{ color: '#bef264' }} />
                  <span style={{ fontSize: '0.55rem', fontWeight: 900, color: '#bef264', textTransform: 'uppercase' }}>{item.timing}</span>
                </div>
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.25rem' }}>{item.name}</h4>
              <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#10b981', marginBottom: '1rem' }}>Dosage: {item.dose}</div>
              <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5 }}>{item.purpose}</p>
            </div>
          ))}
        </div>

        {/* stack summary */}
        <div style={{ marginTop: '2.5rem', padding: '1.5rem', borderRadius: '1rem', backgroundColor: 'rgba(190,242,100,0.05)', border: '1px solid rgba(190,242,100,0.1)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: 'rgba(190,242,100,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Pill size={24} style={{ color: '#bef264' }} />
          </div>
          <div style={{ flex: 1, minWidth: 250 }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.2rem' }}>Personalized Supplement Insight</h4>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Based on your goal of <strong>{goal.replace('-', ' ')}</strong>, this stack maximizes muscle protein synthesis and metabolic efficiency.</p>
          </div>
          <button className="btn-primary" style={{ fontSize: '0.7rem', padding: '0.6rem 1.5rem' }}>ORDER STACK NOW</button>
        </div>
      </div>
    </section>
  );
};

export default SupplementArchitect;
