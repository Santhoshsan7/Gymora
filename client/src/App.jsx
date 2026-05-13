import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/common/Hero';
import StreakTracker from './components/dashboard/StreakTracker';
import Calculator from './components/nutrition/Calculator';
import DietPlanner from './components/nutrition/DietPlanner';
import VisionTracker from './components/nutrition/VisionTracker';
import WorkoutGenerator from './components/workout/WorkoutGenerator';
import BodyScanner from './components/workout/BodyScanner';
import ExerciseLibrary from './components/workout/ExerciseLibrary';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <StreakTracker />
      <VisionTracker />
      <BodyScanner />
      <Calculator />
      <DietPlanner />
      <WorkoutGenerator />
      <ExerciseLibrary />
      <Footer />
    </div>
  );
}

export default App;
