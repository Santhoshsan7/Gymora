import React, { useState } from 'react';
import { Zap, Activity, Scale, User as UserIcon, CheckCircle2, Target, Coffee, Info } from 'lucide-react';

const Calculator = () => {
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(175);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState(1.55);
  const [goal, setGoal] = useState('maintain');
  const [reportGenerated, setReportGenerated] = useState(false);

  // Ensure numeric values
  const w = parseFloat(weight) || 0;
  const h = parseFloat(height) || 0;
  const a = parseFloat(age) || 0;
  const act = parseFloat(activity) || 1.2;

  const bmiVal = h > 0 ? (w / ((h / 100) ** 2)) : 0;
  const bmi = bmiVal.toFixed(1);
  
  const bmr = gender === 'male' 
    ? (10 * w) + (6.25 * h) - (5 * a) + 5
    : (10 * w) + (6.25 * h) - (5 * a) - 161;
  
  const maintenanceTdee = Math.round(bmr * act);

  let targetCalories = maintenanceTdee;
  let macros = { p: 0, c: 0, f: 0 };

  if (goal === 'lose') {
    targetCalories = Math.max(1200, maintenanceTdee - 500);
    macros.p = Math.round((targetCalories * 0.40) / 4);
    macros.c = Math.round((targetCalories * 0.30) / 4);
    macros.f = Math.round((targetCalories * 0.30) / 9);
  } else if (goal === 'gain') {
    targetCalories = maintenanceTdee + 500;
    macros.p = Math.round((targetCalories * 0.30) / 4);
    macros.c = Math.round((targetCalories * 0.50) / 4);
    macros.f = Math.round((targetCalories * 0.20) / 9);
  } else {
    macros.p = Math.round((targetCalories * 0.30) / 4);
    macros.c = Math.round((targetCalories * 0.40) / 4);
    macros.f = Math.round((targetCalories * 0.30) / 9);
  }

  const getBmiStatus = () => {
    const b = parseFloat(bmi);
    if (b < 18.5) return { text: 'Underweight', color: '#f87171' };
    if (b < 25) return { text: 'Normal', color: '#10b981' };
    if (b < 30) return { text: 'Overweight', color: '#fbbf24' };
    return { text: 'Obese', color: '#ef4444' };
  };

  const bmiStatus = getBmiStatus();

  const labelStyle = { 
    fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', 
    letterSpacing: '0.15em', color: '#94a3b8', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' 
  };

  const optBtn = (active) => ({
    padding: '0.6rem 1rem', borderRadius: '0.6rem', border: '1px solid rgba(255,255,255,0.1)',
    cursor: 'pointer', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', flex: 1,
    backgroundColor: active ? '#bef264' : 'transparent',
    color: active ? '#020617' : '#94a3b8',
    transition: 'all 300ms',
  });

  return (
    <section id="calculator" className="section-padding" style={{ backgroundColor: 'rgba(15,23,42,0.4)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'rgba(190,242,100,0.1)', border: '1px solid rgba(190,242,100,0.2)' }}>
              <Zap size={16} style={{ color: '#bef264' }} />
              <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#bef264' }}>Nutrition Command Center</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              PRECISION <span className="gradient-text">METRICS</span>
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '1.5rem', borderLeft: `4px solid ${bmiStatus.color}` }}>
                <span style={{ ...labelStyle }}>BMI Index</span>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>{bmi}</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 800, color: bmiStatus.color, textTransform: 'uppercase', marginTop: '0.5rem' }}>{bmiStatus.text}</div>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid #bef264' }}>
                <span style={{ ...labelStyle }}>Target Calories</span>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>{targetCalories}</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#bef264', textTransform: 'uppercase', marginTop: '0.5rem' }}>Kcal / Day</div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ ...labelStyle, marginBottom: '1rem' }}><Coffee size={14} /> Recommended Macro Split (g/day)</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'rgba(52,211,153,0.1)', borderRadius: '0.75rem', border: '1px solid rgba(52,211,153,0.2)' }}>
                  <div style={{ fontSize: '0.55rem', fontWeight: 900, color: '#34d399', textTransform: 'uppercase' }}>Protein</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#34d399' }}>{macros.p}g</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'rgba(190,242,100,0.1)', borderRadius: '0.75rem', border: '1px solid rgba(190,242,100,0.2)' }}>
                  <div style={{ fontSize: '0.55rem', fontWeight: 900, color: '#bef264', textTransform: 'uppercase' }}>Carbs</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#bef264' }}>{macros.c}g</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'rgba(248,113,113,0.1)', borderRadius: '0.75rem', border: '1px solid rgba(248,113,113,0.2)' }}>
                  <div style={{ fontSize: '0.55rem', fontWeight: 900, color: '#f87171', textTransform: 'uppercase' }}>Fats</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#f87171' }}>{macros.f}g</div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Info size={16} style={{ color: '#bef264' }} />
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5 }}>
                Macros calculated based on a <strong>{goal === 'lose' ? '40/30/30' : goal === 'gain' ? '30/50/20' : '30/40/30'}</strong> percentage split for optimal metabolic response.
              </p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <label style={labelStyle}><Target size={12} /> Set Fitness Goal</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => setGoal('lose')} style={optBtn(goal === 'lose')}>Lose Weight</button>
                <button onClick={() => setGoal('maintain')} style={optBtn(goal === 'maintain')}>Maintain</button>
                <button onClick={() => setGoal('gain')} style={optBtn(goal === 'gain')}>Gain Muscle</button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}><Scale size={12} /> Weight (kg)</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="input-field" />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}><Activity size={12} /> Height (cm)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="input-field" />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Age</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="input-field" />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}><UserIcon size={12} /> Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="input-field">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={labelStyle}>Daily Activity Level</label>
              <select value={activity} onChange={(e) => setActivity(e.target.value)} className="input-field">
                <option value="1.2">Sedentary (No exercise)</option>
                <option value="1.375">Lightly Active (1-3 days/week)</option>
                <option value="1.55">Moderately Active (3-5 days/week)</option>
                <option value="1.725">Very Active (6-7 days/week)</option>
                <option value="1.9">Extra Active (Professional athlete)</option>
              </select>
            </div>

            <button 
              onClick={() => setReportGenerated(true)}
              className="btn-primary" 
              style={{ width: '100%', padding: '1.1rem' }}
            >
              {reportGenerated ? 'ALL DATA SYNCHRONIZED ✓' : 'CALCULATE ALL-IN-ONE METRICS'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
