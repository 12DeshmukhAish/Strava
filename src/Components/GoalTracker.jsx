// components/GoalTracker.jsx
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const GoalTracker = ({ goal = 100, current = 68 }) => {
  const percentage = Math.min((current / goal) * 100, 100).toFixed(0);
  const strokeDashoffset = 440 - (440 * percentage) / 100;

  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="70"
          stroke="#f3f4f6"
          strokeWidth="20"
          fill="none"
        />
        <motion.circle
          cx="100"
          cy="100"
          r="70"
          stroke="url(#grad)"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="440"
          strokeDashoffset="440"
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff6b00" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-orange-600">{percentage}%</p>
        <p className="text-sm text-gray-500">of {goal} km goal</p>
        <p className="text-sm text-gray-700 mt-1 font-medium">{current} km completed</p>
      </div>
    </div>
  );
};

export default GoalTracker;
