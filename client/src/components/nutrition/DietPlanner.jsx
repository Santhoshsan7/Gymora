import React, { useState } from 'react';

const fullDietData = {
  'weight-loss': {
    dailyCals: '1800-2000',
    waterLiters: '3.5',
    sleepHours: '7-8',
    schedule: [
      {
        time: '6:30 AM',
        label: 'Morning Hydration',
        type: 'drink',
        items: [
          { name: 'Warm Lemon Water', img: '🍋', cal: 5, protein: 0, note: 'Boosts metabolism' },
          { name: 'Green Tea', img: '🍵', cal: 2, protein: 0, note: 'Antioxidants & fat burn' },
        ]
      },
      {
        time: '7:30 AM',
        label: 'Breakfast',
        type: 'meal',
        items: [
          { name: 'Oatmeal with Berries', img: '🥣', cal: 280, protein: 10, note: 'Complex carbs + fiber' },
          { name: 'Boiled Eggs (2)', img: '🥚', cal: 140, protein: 12, note: 'High-quality protein' },
          { name: 'Greek Yogurt', img: '🥛', cal: 100, protein: 15, note: 'Probiotics + protein' },
        ]
      },
      {
        time: '10:00 AM',
        label: 'Mid-Morning Snack',
        type: 'snack',
        items: [
          { name: 'Apple Slices', img: '🍎', cal: 95, protein: 0, note: 'Natural sugar + fiber' },
          { name: 'Almonds (10 pcs)', img: '🥜', cal: 70, protein: 3, note: 'Healthy fats' },
        ]
      },
      {
        time: '12:30 PM',
        label: 'Lunch',
        type: 'meal',
        items: [
          { name: 'Grilled Chicken Breast', img: '🍗', cal: 200, protein: 35, note: 'Lean protein source' },
          { name: 'Brown Rice (1 cup)', img: '🍚', cal: 215, protein: 5, note: 'Slow-release energy' },
          { name: 'Mixed Salad', img: '🥗', cal: 50, protein: 2, note: 'Vitamins & minerals' },
          { name: 'Lemon Juice', img: '🍋', cal: 10, protein: 0, note: 'Aids digestion' },
        ]
      },
      {
        time: '3:30 PM',
        label: 'Afternoon Juice',
        type: 'drink',
        items: [
          { name: 'Beetroot Carrot Juice', img: '🥤', cal: 90, protein: 2, note: 'Iron + Vitamin A' },
          { name: 'Cucumber Water', img: '🥒', cal: 5, protein: 0, note: 'Hydration + detox' },
        ]
      },
      {
        time: '5:00 PM',
        label: 'Pre-Workout Snack',
        type: 'snack',
        items: [
          { name: 'Banana', img: '🍌', cal: 105, protein: 1, note: 'Quick energy' },
          { name: 'Peanut Butter Toast', img: '🍞', cal: 180, protein: 7, note: 'Sustained fuel' },
        ]
      },
      {
        time: '7:30 PM',
        label: 'Dinner',
        type: 'meal',
        items: [
          { name: 'Baked Salmon', img: '🐟', cal: 230, protein: 25, note: 'Omega-3 fatty acids' },
          { name: 'Steamed Broccoli', img: '🥦', cal: 55, protein: 4, note: 'Fiber + Vitamin C' },
          { name: 'Sweet Potato', img: '🍠', cal: 115, protein: 2, note: 'Complex carbs' },
        ]
      },
      {
        time: '9:00 PM',
        label: 'Night Recovery',
        type: 'drink',
        items: [
          { name: 'Warm Turmeric Milk', img: '🥛', cal: 80, protein: 4, note: 'Anti-inflammatory' },
          { name: 'Chamomile Tea', img: '🍵', cal: 2, protein: 0, note: 'Better sleep quality' },
        ]
      },
    ]
  },
  'weight-gain': {
    dailyCals: '2800-3200',
    waterLiters: '4.0',
    sleepHours: '8-9',
    schedule: [
      {
        time: '6:30 AM',
        label: 'Morning Hydration',
        type: 'drink',
        items: [
          { name: 'Banana Shake', img: '🍌', cal: 250, protein: 12, note: 'Mass builder' },
          { name: 'Soaked Almonds (15)', img: '🥜', cal: 105, protein: 4, note: 'Healthy calorie boost' },
        ]
      },
      {
        time: '8:00 AM',
        label: 'Breakfast',
        type: 'meal',
        items: [
          { name: 'Whole Egg Omelette (3)', img: '🍳', cal: 280, protein: 21, note: 'Muscle building fuel' },
          { name: 'Peanut Butter Toast (2)', img: '🍞', cal: 360, protein: 14, note: 'Calorie dense' },
          { name: 'Full Fat Milk', img: '🥛', cal: 150, protein: 8, note: 'Calcium + calories' },
          { name: 'Mango Juice', img: '🥭', cal: 120, protein: 1, note: 'Natural energy' },
        ]
      },
      {
        time: '10:30 AM',
        label: 'Mid-Morning Snack',
        type: 'snack',
        items: [
          { name: 'Trail Mix', img: '🥜', cal: 200, protein: 6, note: 'Nuts + dried fruits' },
          { name: 'Protein Bar', img: '🍫', cal: 220, protein: 20, note: 'Convenient protein' },
        ]
      },
      {
        time: '1:00 PM',
        label: 'Lunch',
        type: 'meal',
        items: [
          { name: 'Chicken Thigh Curry', img: '🍗', cal: 350, protein: 30, note: 'Higher fat = more cals' },
          { name: 'White Rice (2 cups)', img: '🍚', cal: 400, protein: 8, note: 'Carb loading' },
          { name: 'Dal (Lentils)', img: '🍲', cal: 180, protein: 12, note: 'Plant protein' },
          { name: 'Ghee (1 tbsp)', img: '🧈', cal: 120, protein: 0, note: 'Healthy saturated fat' },
          { name: 'Buttermilk', img: '🥛', cal: 60, protein: 3, note: 'Digestive aid' },
        ]
      },
      {
        time: '4:00 PM',
        label: 'Afternoon Shake',
        type: 'drink',
        items: [
          { name: 'Whey Protein Shake', img: '🥤', cal: 200, protein: 25, note: 'Fast absorbing' },
          { name: 'Avocado Smoothie', img: '🥑', cal: 280, protein: 5, note: 'Healthy fats + cals' },
        ]
      },
      {
        time: '5:30 PM',
        label: 'Pre-Workout Fuel',
        type: 'snack',
        items: [
          { name: 'Banana (2)', img: '🍌', cal: 210, protein: 2, note: 'Quick glycogen' },
          { name: 'Dates (5 pcs)', img: '🫘', cal: 140, protein: 1, note: 'Natural sugar boost' },
        ]
      },
      {
        time: '8:00 PM',
        label: 'Dinner',
        type: 'meal',
        items: [
          { name: 'Mutton / Beef Steak', img: '🥩', cal: 400, protein: 35, note: 'Creatine + protein' },
          { name: 'Mashed Potatoes', img: '🥔', cal: 220, protein: 4, note: 'Dense carbs' },
          { name: 'Olive Oil Salad', img: '🥗', cal: 120, protein: 2, note: 'Healthy fats + fiber' },
          { name: 'Fresh Juice', img: '🧃', cal: 100, protein: 1, note: 'Vitamins' },
        ]
      },
      {
        time: '10:00 PM',
        label: 'Night Recovery',
        type: 'drink',
        items: [
          { name: 'Casein Protein Shake', img: '🥛', cal: 180, protein: 24, note: 'Slow release overnight' },
          { name: 'Warm Milk + Honey', img: '🍯', cal: 130, protein: 5, note: 'Sleep + recovery' },
        ]
      },
    ]
  }
};

const typeColors = {
  meal: { bg: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.3)', text: '#34d399', label: '🍽️ MEAL' },
  snack: { bg: 'rgba(190,242,100,0.1)', border: 'rgba(190,242,100,0.25)', text: '#bef264', label: '🥜 SNACK' },
  drink: { bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.25)', text: '#38bdf8', label: '🥤 DRINK' },
};

const DietPlanner = () => {
  const [activeGoal, setActiveGoal] = useState('weight-loss');
  const [expandedMeal, setExpandedMeal] = useState(null);

  const plan = fullDietData[activeGoal];

  const totalCals = plan.schedule.reduce((sum, s) => sum + s.items.reduce((a, i) => a + i.cal, 0), 0);
  const totalProtein = plan.schedule.reduce((sum, s) => sum + s.items.reduce((a, i) => a + i.protein, 0), 0);

  const tabStyle = (active) => ({
    padding: '0.6rem 1.4rem', borderRadius: '0.6rem', border: 'none', cursor: 'pointer',
    fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em',
    transition: 'all 300ms',
    backgroundImage: active ? 'linear-gradient(to right, #bef264, #10b981)' : 'none',
    backgroundColor: active ? undefined : 'transparent',
    color: active ? '#020617' : '#94a3b8',
  });

  return (
    <section id="diet" className="section-padding">
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ maxWidth: 500 }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>AI DIET <span className="gradient-text">ARCHITECT</span></h2>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7 }}>Complete daily nutrition plan with timing, macros & food images — designed for your goal.</p>
          </div>
          <div style={{ display: 'flex', gap: '0.35rem', padding: '0.25rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
            {Object.keys(fullDietData).map((goal) => (
              <button key={goal} onClick={() => { setActiveGoal(goal); setExpandedMeal(null); }} style={tabStyle(activeGoal === goal)}>
                {goal.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'Daily Calories', value: plan.dailyCals, unit: 'kcal', color: '#bef264' },
            { label: 'Total Protein', value: `${totalProtein}g`, unit: 'approx', color: '#34d399' },
            { label: 'Water Intake', value: plan.waterLiters, unit: 'liters/day', color: '#38bdf8' },
            { label: 'Sleep', value: plan.sleepHours, unit: 'hours/night', color: '#a78bfa' },
          ].map((stat, i) => (
            <div key={i} className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#64748b', marginBottom: '0.5rem' }}>{stat.label}</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#475569' }}>{stat.unit}</div>
            </div>
          ))}
        </div>

        {/* Daily Schedule Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {plan.schedule.map((slot, idx) => {
            const tc = typeColors[slot.type];
            const isOpen = expandedMeal === idx;
            const slotTotalCal = slot.items.reduce((a, i) => a + i.cal, 0);

            return (
              <div key={idx} style={{ borderRadius: '1rem', overflow: 'hidden', border: `1px solid ${isOpen ? tc.border : 'rgba(255,255,255,0.06)'}`, backgroundColor: isOpen ? tc.bg : 'rgba(15,23,42,0.4)', transition: 'all 400ms' }}>
                {/* Slot Header — clickable */}
                <div
                  onClick={() => setExpandedMeal(isOpen ? null : idx)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', cursor: 'pointer', transition: 'background 300ms' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ minWidth: 70, fontSize: '0.75rem', fontWeight: 900, color: tc.text }}>{slot.time}</div>
                    <div style={{ width: 1, height: 28, backgroundColor: 'rgba(255,255,255,0.08)' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1rem' }}>{slot.label}</div>
                      <div style={{ fontSize: '0.6rem', fontWeight: 800, color: tc.text, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{tc.label} • {slot.items.length} items</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, padding: '0.3rem 0.75rem', backgroundColor: tc.bg, border: `1px solid ${tc.border}`, color: tc.text, borderRadius: '9999px' }}>{slotTotalCal} kcal</span>
                    <span style={{ fontSize: '1.2rem', color: '#64748b', transition: 'transform 300ms', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                  </div>
                </div>

                {/* Expanded Food Items */}
                {isOpen && (
                  <div style={{ padding: '0 1.5rem 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
                    {slot.items.map((food, fi) => (
                      <div key={fi} style={{
                        backgroundColor: 'rgba(2,6,23,0.5)', borderRadius: '0.75rem', padding: '1rem',
                        border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 300ms',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                          <span style={{ fontSize: '2rem' }}>{food.img}</span>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{food.name}</div>
                            <div style={{ fontSize: '0.6rem', color: '#64748b', fontWeight: 700 }}>{food.note}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '0.5rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Cal</div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#bef264' }}>{food.cal}</div>
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '0.5rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Protein</div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#34d399' }}>{food.protein}g</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Water & Sleep Reminder */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '2.5rem' }}>💧</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.25rem' }}>Hydration Protocol</div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6 }}>Drink <strong style={{ color: '#38bdf8' }}>{plan.waterLiters}L water</strong> daily — 1 glass every 1.5 hours. Add lemon or cucumber for detox benefits.</p>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '2.5rem' }}>😴</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.25rem' }}>Sleep Recovery</div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6 }}>Sleep <strong style={{ color: '#a78bfa' }}>{plan.sleepHours} hours</strong> per night. Avoid screens 1hr before bed. Keep room temperature at 18-20°C.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DietPlanner;
