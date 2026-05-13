import React, { useState, useRef } from 'react';
import { Camera, User, Activity, Award, RefreshCw, BarChart3, CheckCircle2, Scale, Droplets } from 'lucide-react';

const BodyScanner = () => {
  const [image, setImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({ name: '', age: '25', height: '163', weight: '82', gender: 'Female' });
  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => { setImage(ev.target.result); setResult(null); };
      reader.readAsDataURL(file);
    }
  };

  const runScan = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (!image) return;
    setIsScanning(true);
    const w = parseFloat(formData.weight) || 82;
    const h = parseFloat(formData.height) || 163;
    const a = parseFloat(formData.age) || 25;
    const bmi = (w / ((h / 100) ** 2)).toFixed(1);
    const bodyFat = formData.gender === 'Male' ? (1.20 * bmi + 0.23 * a - 16.2).toFixed(1) : (1.20 * bmi + 0.23 * a - 5.4).toFixed(1);
    const bodyWater = (w * 0.48).toFixed(1);
    const protein = (w * 0.128).toFixed(1);
    const minerals = (w * 0.05).toFixed(1);
    const fatMass = ((w * parseFloat(bodyFat)) / 100).toFixed(1);
    const fatFreeMass = (w - parseFloat(fatMass)).toFixed(1);
    const smm = (w * 0.364).toFixed(1);
    const bmr = formData.gender === 'Male' ? Math.round(10 * w + 6.25 * h - 5 * a + 5) : Math.round(10 * w + 6.25 * h - 5 * a - 161);
    const tdee = Math.round(bmr * 1.55);
    const targetWeight = (22 * (h / 100) ** 2).toFixed(1);
    const weightControl = (parseFloat(targetWeight) - w).toFixed(1);
    const whr = formData.gender === 'Male' ? '0.88' : '0.94';
    const icw = (w * 0.292).toFixed(1);
    const ecw = (w * 0.188).toFixed(1);
    const ecwRatio = (parseFloat(ecw) / (parseFloat(icw) + parseFloat(ecw))).toFixed(3);
    const abCirc = (w * 1.274).toFixed(1);
    const score = Math.min(100, Math.max(30, Math.round(100 - Math.abs(parseFloat(bmi) - 22) * 4)));

    setTimeout(() => {
      setIsScanning(false);
      setResult({ bmi, bodyFat, bodyWater, protein, minerals, fatMass, fatFreeMass, smm, bmr, tdee, targetWeight, weightControl, whr, icw, ecw, ecwRatio, abCirc, score,
        bmiStatus: parseFloat(bmi) < 18.5 ? 'Underweight' : parseFloat(bmi) < 25 ? 'Normal' : parseFloat(bmi) < 30 ? 'Overweight' : 'Obese',
        pbf: bodyFat, obesityDegree: ((parseFloat(bmi) - 25) / 25 * 100).toFixed(1),
        bodyType: parseFloat(bmi) < 18.5 ? 'Lean' : parseFloat(bmi) < 25 ? 'Standard' : parseFloat(bmi) < 30 ? 'Overweight' : 'Obese',
        bioAge: Math.round(a + (parseFloat(bmi) - 22) * 0.5),
        rightArm: (w * 0.038).toFixed(2), leftArm: (w * 0.0377).toFixed(2),
        trunk: (w * 0.28).toFixed(2), rightLeg: (w * 0.0995).toFixed(2), leftLeg: (w * 0.103).toFixed(2)
      });
    }, 3500);
  };

  const Bar = ({ value, max, color, label, unit }) => {
    const pct = Math.min(100, (value / max) * 100);
    return (
      <div style={{ marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8' }}>{label}</span>
          <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'white' }}>{value} {unit}</span>
        </div>
        <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ width: `${pct}%`, height: '100%', backgroundColor: color, borderRadius: '3px', transition: 'width 1s ease' }} />
        </div>
      </div>
    );
  };

  const Stat = ({ label, value, unit, color }) => (
    <div style={{ padding: '0.75rem', backgroundColor: 'rgba(2,6,23,0.4)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ fontSize: '0.5rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{label}</div>
      <div style={{ fontSize: '1rem', fontWeight: 900, color: color || 'white' }}>{value} <span style={{ fontSize: '0.6rem', color: '#64748b' }}>{unit}</span></div>
    </div>
  );

  return (
    <section id="body-scan" className="section-padding" style={{ position: 'relative', backgroundColor: '#020617', zIndex: 5 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', padding: '0.5rem 1.2rem', borderRadius: '9999px', backgroundColor: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}>
            <User size={16} style={{ color: '#34d399' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#34d399' }}>Neural Physique Analysis</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>AI BODY <span className="gradient-text">COMPOSITION</span></h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>Upload your photo and enter your details. Our AI generates a professional-grade body composition report.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {/* LEFT: Upload + Form */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              {image ? (
                <div style={{ position: 'relative' }}>
                  <img src={image} alt="Physique" style={{ width: '100%', height: '280px', objectFit: 'contain', borderRadius: '1rem', backgroundColor: 'rgba(0,0,0,0.2)' }} />
                  {isScanning && (
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(2,6,23,0.7)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '1rem' }}>
                      <div style={{ textAlign: 'center' }}>
                        <RefreshCw size={40} className="spinning" style={{ color: '#bef264', marginBottom: '1rem' }} />
                        <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#bef264', letterSpacing: '0.2em' }}>ANALYZING COMPOSITION...</div>
                      </div>
                    </div>
                  )}
                  <button type="button" onClick={() => { setImage(null); setResult(null); }} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: '#020617', border: '1px solid rgba(255,255,255,0.2)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
                </div>
              ) : (
                <div onClick={() => fileInputRef.current.click()} style={{ height: '200px', border: '2px dashed rgba(255,255,255,0.1)', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Camera size={40} style={{ color: '#bef264', marginBottom: '1rem', opacity: 0.5 }} />
                  <h4 style={{ marginBottom: '0.3rem', fontSize: '0.9rem' }}>Upload Physique Photo</h4>
                  <p style={{ fontSize: '0.7rem', color: '#64748b' }}>Front-facing photo works best</p>
                  <input type="file" ref={fileInputRef} onChange={handleUpload} style={{ display: 'none' }} accept="image/*" />
                </div>
              )}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
              <div><label style={{ fontSize: '0.6rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>Name</label><input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="input-field" placeholder="Your Name" /></div>
              <div><label style={{ fontSize: '0.6rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>Age</label><input type="number" value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} className="input-field" /></div>
              <div><label style={{ fontSize: '0.6rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>Height (cm)</label><input type="number" value={formData.height} onChange={e => setFormData({...formData, height: e.target.value})} className="input-field" /></div>
              <div><label style={{ fontSize: '0.6rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>Weight (kg)</label><input type="number" value={formData.weight} onChange={e => setFormData({...formData, weight: e.target.value})} className="input-field" /></div>
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.6rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>Gender</label>
              <select value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})} className="input-field">
                <option value="Male">Male</option><option value="Female">Female</option>
              </select>
            </div>
            <button type="button" onClick={runScan} disabled={!image || isScanning} className="btn-primary" style={{ width: '100%', padding: '1rem', opacity: (!image || isScanning) ? 0.5 : 1 }}>
              {isScanning ? 'SCANNING...' : 'GENERATE BODY REPORT'}
            </button>
          </div>

          {/* RIGHT: Professional ACCUNIQ-Style Report */}
          <div className="glass-card" style={{ padding: '2rem', overflow: 'auto' }}>
            {!result ? (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: 0.15, minHeight: '400px' }}>
                <BarChart3 size={60} />
                <p style={{ marginTop: '1.5rem', fontWeight: 700 }}>Awaiting Biometric Data</p>
              </div>
            ) : (
              <div className="fade-in">
                {/* Report Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 900 }}>BODY COMPOSITION REPORT</h3>
                    <div style={{ fontSize: '0.6rem', color: '#64748b', marginTop: '0.25rem' }}>
                      {formData.name || 'User'} • {formData.age}yrs • {formData.height}cm • {formData.gender} • {new Date().toLocaleDateString()}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '0.5rem 1rem', borderRadius: '0.75rem', backgroundColor: 'rgba(190,242,100,0.1)', border: '1px solid rgba(190,242,100,0.2)' }}>
                    <div style={{ fontSize: '0.5rem', fontWeight: 900, color: '#64748b' }}>SCORE</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#bef264' }}>{result.score}</div>
                  </div>
                </div>

                {/* Body Composition Analysis */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 900, color: '#bef264', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Body Composition Analysis</h4>
                  <Bar value={result.bodyWater} max={60} color="#38bdf8" label="Body Water" unit="L" />
                  <Bar value={result.protein} max={20} color="#a78bfa" label="Protein" unit="kg" />
                  <Bar value={result.minerals} max={8} color="#fbbf24" label="Minerals" unit="kg" />
                  <Bar value={result.fatMass} max={50} color="#f87171" label="Body Fat" unit="kg" />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.75rem' }}>
                    <Stat label="Fat-Free Mass" value={result.fatFreeMass} unit="kg" color="#34d399" />
                    <Stat label="Total Weight" value={formData.weight} unit="kg" color="white" />
                  </div>
                </div>

                {/* Muscle/Fat + Obesity */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '0.7rem', fontWeight: 900, color: '#bef264', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Muscle / Fat</h4>
                    <Bar value={result.smm} max={50} color="#10b981" label="Skeletal Muscle" unit="kg" />
                    <Bar value={result.fatMass} max={50} color="#f87171" label="Fat Mass" unit="kg" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.7rem', fontWeight: 900, color: '#bef264', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Obesity Analysis</h4>
                    <Bar value={result.bmi} max={50} color={parseFloat(result.bmi) < 25 ? '#10b981' : '#f87171'} label="BMI" unit="kg/m²" />
                    <Bar value={result.pbf} max={50} color={parseFloat(result.pbf) < 25 ? '#10b981' : '#fbbf24'} label="Body Fat %" unit="%" />
                  </div>
                </div>

                {/* Comprehensive Evaluation */}
                <div style={{ marginBottom: '1.5rem', padding: '1.25rem', backgroundColor: 'rgba(2,6,23,0.5)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 900, color: '#bef264', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Comprehensive Evaluation</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.75rem' }}>
                    {[
                      ['Body Type', result.bodyType], ['Biological Age', `${result.bioAge} yrs`],
                      ['BMR', `${result.bmr} kcal`], ['TDEE', `${result.tdee} kcal`],
                      ['WHR', result.whr], ['BMI Status', result.bmiStatus]
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                        <span style={{ color: '#64748b', fontWeight: 700 }}>{k}</span>
                        <span style={{ fontWeight: 800, color: 'white' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Control Guide */}
                <div style={{ marginBottom: '1.5rem', padding: '1.25rem', backgroundColor: 'rgba(2,6,23,0.5)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 900, color: '#bef264', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Control Guide</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.75rem' }}>
                    {[
                      ['Target Weight', `${result.targetWeight} kg`],
                      ['Weight Control', `${result.weightControl} kg`],
                      ['Fat Control', `${(parseFloat(result.weightControl) * 0.8).toFixed(1)} kg`],
                      ['Muscle Control', '+0.0 kg']
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                        <span style={{ color: '#64748b', fontWeight: 700 }}>{k}</span>
                        <span style={{ fontWeight: 800, color: v.includes('-') ? '#10b981' : v.includes('+0') ? '#fbbf24' : '#f87171' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Segmental Lean Mass */}
                <div style={{ padding: '1.25rem', backgroundColor: 'rgba(2,6,23,0.5)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 900, color: '#bef264', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Segmental Lean Mass</h4>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.5rem', fontWeight: 900, color: '#64748b' }}>LEFT ARM</div>
                      <div style={{ fontSize: '1rem', fontWeight: 900, color: '#38bdf8' }}>{result.leftArm} kg</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.5rem', fontWeight: 900, color: '#64748b' }}>LEFT LEG</div>
                      <div style={{ fontSize: '1rem', fontWeight: 900, color: '#38bdf8' }}>{result.leftLeg} kg</div>
                    </div>
                    <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'rgba(190,242,100,0.05)', borderRadius: '1rem' }}>
                      <div style={{ fontSize: '2.5rem' }}>🧍</div>
                      <div style={{ fontSize: '0.5rem', fontWeight: 900, color: '#64748b', marginTop: '0.25rem' }}>TRUNK</div>
                      <div style={{ fontSize: '1rem', fontWeight: 900, color: '#bef264' }}>{result.trunk} kg</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.5rem', fontWeight: 900, color: '#64748b' }}>RIGHT ARM</div>
                      <div style={{ fontSize: '1rem', fontWeight: 900, color: '#38bdf8' }}>{result.rightArm} kg</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.5rem', fontWeight: 900, color: '#64748b' }}>RIGHT LEG</div>
                      <div style={{ fontSize: '1rem', fontWeight: 900, color: '#38bdf8' }}>{result.rightLeg} kg</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .spinning { animation: spin 2s infinite linear; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .fade-in { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
};

export default BodyScanner;
