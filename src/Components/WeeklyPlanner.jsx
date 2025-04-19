// components/WeeklyPlanner.jsx
import React, { useState } from 'react';

const activities = ['Rest', 'Run', 'Cycle', 'Hike', 'Yoga'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const WeeklyPlanner = () => {
  const [plan, setPlan] = useState(
    days.reduce((acc, day) => ({ ...acc, [day]: 'Rest' }), {})
  );

  const handleSelect = (day, value) => {
    setPlan((prev) => ({ ...prev, [day]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-orange-600 mb-4">Weekly Activity Planner</h2>
      <p className="text-gray-600 mb-10">Plan your workout schedule for the week.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {days.map((day) => (
          <div key={day} className="bg-white rounded-xl shadow-md p-4 text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{day}</h3>
            <select
              value={plan[day]}
              onChange={(e) => handleSelect(day, e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              {activities.map((activity) => (
                <option key={activity} value={activity}>{activity}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyPlanner;
