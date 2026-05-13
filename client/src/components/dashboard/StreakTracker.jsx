import React, { useState, useEffect } from 'react';
import { Flame, CheckCircle2, Circle, Trophy, Zap, X } from 'lucide-react';

const StreakTracker = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Get current day of week (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const systemDay = new Date().getDay();
  const todayIdx = (systemDay + 6) % 7; // Map to Mon=0, Sun=6
  
  // Initial state: No days completed by default
  const [completedDays, setCompletedDays] = useState(Array(7).fill(false));
  const streak = completedDays.filter(Boolean).length;

  const toggleDay = (idx) => {
    const newDays = [...completedDays];
    newDays[idx] = !newDays[idx];
    setCompletedDays(newDays);
  };

  const todayCompleted = completedDays[todayIdx];

  return (
    <section id="streak" style={{ padding: '2rem 0', backgroundColor: 'rgba(15,23,42,0.6)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* Streak Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(190,242,100,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(190,242,100,0.2)' }}>
                <Flame size={32} fill={streak > 0 ? "#bef264" : "none"} style={{ color: '#bef264', transition: 'all 300ms' }} />
              </div>
              <div style={{ position: 'absolute', bottom: -5, right: -5, backgroundColor: '#bef264', color: '#020617', fontSize: '0.7rem', fontWeight: 900, padding: '0.2rem 0.5rem', borderRadius: '99px', border: '2px solid #020617' }}>
                {streak}D
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 900 }}>DAILY DISCIPLINE</h3>
                <span style={{ fontSize: '0.6rem', fontWeight: 900, color: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>LIVE TRACKING</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                Today is <strong style={{ color: 'white' }}>{days[todayIdx]}</strong>. {todayCompleted ? "Your daily goals are locked in!" : "Complete your targets to maintain your streak."}
              </p>
            </div>
          </div>

          {/* Weekly Progress - Fully Interactive */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '0.75rem', minWidth: '300px' }}>
            {days.map((day, idx) => (
              <div key={day} onClick={() => toggleDay(idx)} style={{ textAlign: 'center', cursor: 'pointer', transition: 'transform 200ms' }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 800, color: idx === todayIdx ? '#bef264' : '#64748b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{day}</div>
                <div style={{ 
                  width: '36px', height: '36px', borderRadius: '50%', 
                  backgroundColor: completedDays[idx] ? 'rgba(190,242,100,0.1)' : 'rgba(255,255,255,0.03)',
                  border: `2px solid ${completedDays[idx] ? '#bef264' : idx === todayIdx ? 'rgba(190,242,100,0.5)' : 'rgba(255,255,255,0.05)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: completedDays[idx] ? '#bef264' : '#475569',
                  transition: 'all 300ms',
                  transform: idx === todayIdx ? 'scale(1.1)' : 'scale(1)',
                }}>
                  {completedDays[idx] ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                </div>
              </div>
            ))}
          </div>

          {/* Action */}
          <div style={{ textAlign: 'right' }}>
            <button 
              type="button"
              onClick={() => toggleDay(todayIdx)}
              style={{ 
                padding: '0.75rem 1.5rem', fontSize: '0.7rem', textTransform: 'uppercase', 
                letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem',
                cursor: 'pointer', borderRadius: '9999px', fontWeight: 800, transition: 'all 300ms',
                backgroundImage: todayCompleted ? 'none' : 'linear-gradient(to right, #bef264, #10b981)',
                backgroundColor: todayCompleted ? 'rgba(255,255,255,0.05)' : undefined,
                color: todayCompleted ? 'white' : '#020617',
                border: todayCompleted ? '1px solid rgba(255,255,255,0.2)' : 'none',
                boxShadow: todayCompleted ? 'none' : '0 0 20px rgba(190,242,100,0.3)'
              }}
            >
              {todayCompleted ? <X size={16} /> : <Zap size={16} />}
              {todayCompleted ? `Untick ${days[todayIdx]}` : `Check-in ${days[todayIdx]}`}
            </button>
            {todayCompleted && (
              <div style={{ fontSize: '0.6rem', color: '#10b981', fontWeight: 800, marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.3rem' }}>
                <Trophy size={12} /> {days[todayIdx].toUpperCase()} GOALS COMPLETED
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreakTracker;
