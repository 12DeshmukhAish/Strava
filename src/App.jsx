// App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import GoalTracker from './Components/GoalTracker';
import Footer from './Components/Footer';
import WeeklyPlanner from './Components/WeeklyPlanner';

const App = () => {
  return (
    <div className="font-sans scroll-smooth">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Goal Tracker Feature Section */}
      <section id="features" className="py-24 px-6 bg-[#fff9f6] text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Track Your Monthly Progress</h2>
          <p className="text-gray-600 mb-10">Set your fitness goal and see how close you are to reaching it!</p>
          <GoalTracker goal={100} current={68} />
        </div>
      </section>
      <section id="planner" className="bg-[#fffaf7]">
  <WeeklyPlanner />
</section>
      {/* Footer */}
      <section id="footer">
        <Footer />
      </section>
  
    </div>
  );
};

export default App;
