import React, { useState } from 'react';
import { Search } from 'lucide-react';

const exercises = [
  { name: 'Day 1: Bench Press', category: 'Chest', difficulty: 'Intermediate', img: '🏋️' },
  { name: 'Day 2: Deadlift', category: 'Back', difficulty: 'Advanced', img: '🔥' },
  { name: 'Day 3: Squat', category: 'Legs', difficulty: 'Intermediate', img: '🦵' },
  { name: 'Day 4: Overhead Press', category: 'Shoulders', difficulty: 'Intermediate', img: '🏋️' },
  { name: 'Day 5: Bicep Curls', category: 'Arms', difficulty: 'Beginner', img: '💪' },
  { name: 'Day 6: Hanging Leg Raise', category: 'Core', difficulty: 'Intermediate', img: '🧘' },
];

const categories = ['All', 'Chest', 'Back', 'Shoulders', 'Legs', 'Arms', 'Core'];

const ExerciseLibrary = () => {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');

  const filtered = exercises.filter(ex => {
    const matchSearch = ex.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCat === 'All' || ex.category === activeCat;
    return matchSearch && matchCat;
  });

  const catBtn = (active) => ({
    padding: '0.6rem 1.2rem', borderRadius: '9999px', border: 'none', cursor: 'pointer',
    fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase',
    backgroundImage: active ? 'linear-gradient(to right, #bef264, #10b981)' : 'none',
    backgroundColor: active ? undefined : 'rgba(255,255,255,0.05)',
    color: active ? '#020617' : '#94a3b8', transition: 'all 300ms',
  });

  return (
    <section id="library" className="section-padding">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>AI <span className="gradient-text">Exercise Library</span></h2>
            <p style={{ color: '#94a3b8', maxWidth: 400 }}>Master your form with our intelligent database.</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search exercises..." className="input-field" style={{ paddingLeft: '2.5rem', width: 260 }} />
              <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            </div>
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              {categories.map(c => (
                <button key={c} onClick={() => setActiveCat(c)} style={catBtn(activeCat === c)}>{c}</button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {filtered.map((ex, i) => (
            <div key={i} className="glass-card" style={{ padding: '2rem', transition: 'all 300ms', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{ex.img}</div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{ex.name}</h4>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.6rem', fontWeight: 800, padding: '0.25rem 0.75rem', backgroundColor: 'rgba(190,242,100,0.1)', color: '#bef264', borderRadius: '9999px', textTransform: 'uppercase' }}>{ex.category}</span>
                <span style={{ fontSize: '0.6rem', fontWeight: 800, padding: '0.25rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.05)', color: '#94a3b8', borderRadius: '9999px', textTransform: 'uppercase' }}>{ex.difficulty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExerciseLibrary;
