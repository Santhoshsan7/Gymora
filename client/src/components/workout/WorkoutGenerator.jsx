import React, { useState } from 'react';
import { Play, X, Repeat, Dumbbell, Home, Zap } from 'lucide-react';

const workoutData = {
  'muscle-gain': {
    gym: [
      { name: 'Day 1: Barbell Bench Press', sets: '4', reps: '8-10', rest: '90s', target: 'Chest', video: 'rT7DgCr-3pg' },
      { name: 'Day 2: Deadlift', sets: '4', reps: '6-8', rest: '120s', target: 'Back', video: 'ultWZbUMPL8' },
      { name: 'Day 3: Barbell Squat', sets: '4', reps: '8-10', rest: '90s', target: 'Legs', video: 'ultWZbUMPL8' },
      { name: 'Day 4: Overhead Press', sets: '3', reps: '10-12', rest: '60s', target: 'Shoulders', video: '2yjwXTZQDDI' },
      { name: 'Day 5: Barbell Row', sets: '4', reps: '8-10', rest: '90s', target: 'Back', video: 'FWJR5Ve8bnQ' },
      { name: 'Day 6: Bicep Curls', sets: '3', reps: '12-15', rest: '45s', target: 'Arms', video: 'ykJmrZ5v0Oo' },
    ],
    home: [
      { name: 'Push-ups (Wide)', sets: '4', reps: '15-20', rest: '45s', target: 'Chest', video: 'IODxDxX7oi4' },
      { name: 'Diamond Push-ups', sets: '3', reps: '12-15', rest: '45s', target: 'Triceps', video: 'J0DnG1_S92I' },
      { name: 'Bulgarian Split Squat', sets: '3', reps: '12 each', rest: '60s', target: 'Legs', video: '2C-uNgKwPLE' },
      { name: 'Pike Push-ups', sets: '3', reps: '10-12', rest: '60s', target: 'Shoulders', video: 'sposDXWEB0A' },
      { name: 'Inverted Rows', sets: '3', reps: '12-15', rest: '45s', target: 'Back', video: 'hXTc1mDnZCw' },
      { name: 'Chin-ups', sets: '3', reps: 'Max', rest: '90s', target: 'Biceps', video: 'brhRXlOhWI4' },
    ],
  },
  'fat-loss': {
    gym: [
      { name: 'Kettlebell Swings', sets: '4', reps: '20', rest: '30s', target: 'Full Body', video: 'YSxHifyI6s8' },
      { name: 'Battle Ropes', sets: '4', reps: '30s', rest: '30s', target: 'Cardio', video: 'dMaICHhJKMI' },
      { name: 'Box Jumps', sets: '3', reps: '15', rest: '45s', target: 'Legs/Cardio', video: '52r_Ul5k03g' },
      { name: 'Rowing Machine', sets: '3', reps: '500m', rest: '60s', target: 'Full Body', video: 'UGE2yNOGiSk' },
      { name: 'Dumbbell Thrusters', sets: '4', reps: '12', rest: '45s', target: 'Full Body', video: 'M0uO8X3_tEA' },
      { name: 'Plank Hold', sets: '3', reps: '60s', rest: '30s', target: 'Core', video: 'pSHjTRCQxIw' },
    ],
    home: [
      { name: 'Burpees', sets: '4', reps: '15', rest: '30s', target: 'Full Body', video: 'dZgVxmf6jkA' },
      { name: 'Mountain Climbers', sets: '4', reps: '30s', rest: '20s', target: 'Core/Cardio', video: 'nmwgirgXLYM' },
      { name: 'Jump Squats', sets: '4', reps: '20', rest: '30s', target: 'Legs', video: 'A-cFYGvaYcg' },
      { name: 'High Knees', sets: '3', reps: '45s', rest: '20s', target: 'Cardio', video: 'ZZZoCNMU48U' },
      { name: 'Push-ups', sets: '4', reps: 'Max', rest: '45s', target: 'Chest/Arms', video: 'IODxDxX7oi4' },
      { name: 'Bicycle Crunches', sets: '3', reps: '20 each', rest: '30s', target: 'Core', video: '9FGilxCbdz8' },
    ],
  }
};

const WorkoutGenerator = () => {
  const [goal, setGoal] = useState('muscle-gain');
  const [location, setLocation] = useState('gym');
  const [activeVideo, setActiveVideo] = useState(null);

  const currentWorkout = workoutData[goal][location];

  const optBtn = (active) => ({
    padding: '0.65rem 1.2rem', borderRadius: '0.6rem',
    border: active ? 'none' : '1px solid rgba(255,255,255,0.1)',
    cursor: 'pointer', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em',
    backgroundImage: active ? 'linear-gradient(to right, #bef264, #10b981)' : 'none',
    backgroundColor: active ? undefined : 'transparent',
    color: active ? '#020617' : '#94a3b8',
    transition: 'all 300ms', flex: 1, textAlign: 'center',
  });

  const locBtn = (active) => ({
    ...optBtn(active),
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', padding: '1rem',
  });

  return (
    <section id="workouts" className="section-padding" style={{ backgroundColor: 'rgba(15,23,42,0.4)' }}>
      <div className="container">
        {/* Video Modal */}
        {activeVideo && (
          <div
            onClick={() => setActiveVideo(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 100,
              backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem',
            }}
          >
            <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: 800, position: 'relative' }}>
              <button
                onClick={() => setActiveVideo(null)}
                style={{
                  position: 'absolute', top: -40, right: 0,
                  background: 'none', border: 'none', color: 'white', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 700,
                }}
              >
                <X size={18} /> Close
              </button>
              <div style={{ position: 'relative', paddingBottom: '56.25%', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.video}?autoplay=1&rel=0`}
                  title={activeVideo.name}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </div>
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{activeVideo.name}</h3>
                <p style={{ color: '#bef264', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>{activeVideo.target} • {activeVideo.sets} sets × {activeVideo.reps} reps</p>
              </div>
            </div>
          </div>
        )}

        <div className="workout-grid" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
          {/* Controls Panel */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>AI <span className="gradient-text">Routine Builder</span></h2>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Generate a workout routine. Tap ▶ to watch the exercise video.
            </p>

            <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '0.75rem' }}>
              <label style={{ fontSize: '0.6rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>Select Goal</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['muscle-gain', 'fat-loss'].map((g) => (
                  <button key={g} onClick={() => setGoal(g)} style={optBtn(goal === g)}>{g.replace('-', ' ')}</button>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <label style={{ fontSize: '0.6rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>Environment</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => setLocation('gym')} style={locBtn(location === 'gym')}>
                  <Dumbbell size={18} /> Gym
                </button>
                <button onClick={() => setLocation('home')} style={locBtn(location === 'home')}>
                  <Home size={18} /> Home
                </button>
              </div>
            </div>
          </div>

          {/* Workout Display */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase' }}>Your AI Routine</h3>
                <p style={{ color: '#bef264', fontSize: '0.75rem', fontWeight: 700 }}>{currentWorkout.length} Exercises • {goal.replace('-', ' ')} • {location}</p>
              </div>
              <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(190,242,100,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={20} style={{ color: '#bef264' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {currentWorkout.map((ex, idx) => (
                <div key={idx} className="exercise-row" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1rem', backgroundColor: 'rgba(2,6,23,0.5)', border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '0.75rem', transition: 'border-color 300ms', flexWrap: 'wrap', gap: '0.75rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0, flex: '1 1 200px' }}>
                    <div style={{ width: 32, height: 32, minWidth: 32, borderRadius: '50%', backgroundColor: 'rgba(15,23,42,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#bef264', fontSize: '0.8rem' }}>{idx + 1}</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{ex.name}</div>
                      <span style={{ fontSize: '0.55rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.08em' }}>{ex.target}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {[{ l: 'Sets', v: ex.sets }, { l: 'Reps', v: ex.reps }, { l: 'Rest', v: ex.rest }].map((s) => (
                      <div key={s.l} style={{ textAlign: 'center', minWidth: 36 }}>
                        <div style={{ fontSize: '0.5rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>{s.l}</div>
                        <div style={{ fontWeight: 700, color: '#bef264', fontSize: '0.8rem' }}>{s.v}</div>
                      </div>
                    ))}
                    <button
                      onClick={() => setActiveVideo(ex)}
                      style={{
                        width: 36, height: 36, borderRadius: '50%',
                        border: '2px solid #bef264',
                        background: 'rgba(190,242,100,0.1)',
                        color: '#bef264', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', transition: 'all 300ms',
                      }}
                      title={`Watch ${ex.name} video`}
                    >
                      <Play size={14} fill="#bef264" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ fontSize: '0.7rem', padding: '0.6rem 1.5rem' }}>SAVE ROUTINE</button>
              <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', padding: '0.6rem 1.5rem' }}>
                <Repeat size={14} /> REGENERATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutGenerator;
