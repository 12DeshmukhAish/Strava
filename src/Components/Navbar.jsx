import React, { useState } from 'react';
import {
  ChevronDown,
  Star,
  MapPin,
  Award,
  LogIn
} from 'lucide-react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (item) => {
    setActiveItem(item);
    if (item === 'Activities') setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
    setShowDropdown(false);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white shadow-md text-gray-900">

   <div className="flex items-center">
  <img
    src="/logo.png"
    alt="Strava"
    className="w-24 md:w-28 object-contain"
  />
</div>


      {/* Nav Links */}
      <ul className="flex items-center space-x-6 font-medium">
        {/* Activities Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter('Activities')}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`flex items-center cursor-pointer transition-colors duration-200 ${activeItem === 'Activities' ? 'text-yellow-200' : 'hover:text-yellow-200'}`}>
            Activities
            <ChevronDown size={16} className={`ml-1 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </div>

          {showDropdown && (
            <div className="absolute top-10 left-0 bg-white text-gray-800 rounded-xl shadow-xl p-4 w-96 z-40 animate-fadeIn">
              <div className="grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div>
                  <p className="mb-2 font-semibold text-orange-600 border-b pb-1 border-orange-100">Popular Activities</p>
                  <ul className="space-y-2 text-sm">
                    {[
                      { icon: '🏃‍♂️', label: 'Running' },
                      { icon: '🚴‍♀️', label: 'Cycling' },
                      { icon: '🚶‍♂️', label: 'Walking' },
                      { icon: '🥾', label: 'Hiking' },
                      { icon: '🏊‍♀️', label: 'Swimming' }
                    ].map(({ icon, label }) => (
                      <li key={label} className="flex items-center cursor-pointer hover:text-orange-500 transition">
                        <span className="bg-orange-100 p-1 rounded-full mr-2">{icon}</span> {label}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                {['Run', 'Cyc'].map((type, index) => (
  <div key={type} className="rounded-lg overflow-hidden shadow group hover:shadow-md transition">
    <div className="relative h-24">
      <img
        src={`/${type.toLowerCase()}.jpg`}  // From public/images/
        alt={type}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
        <p className="text-white text-sm font-medium">
          {index === 0 ? 'Weekly Running Challenge' : 'Monthly Cycling Event'}
        </p>
      </div>
    </div>
  </div>
))}

                </div>
              </div>
            </div>
          )}
        </li>

        {/* Standard Items */}
        {[
          { label: 'Features', icon: <Star size={16} /> },
          { label: 'Maps', icon: <MapPin size={16} /> },
          { label: 'Challenges', icon: <Award size={16} /> },
          { label: 'Subscription', icon: null }
        ].map(({ label, icon }) => (
          <li
            key={label}
            className={`cursor-pointer transition-colors duration-200 ${
              activeItem === label ? 'text-yellow-200' : 'hover:text-yellow-200'
            }`}
            onMouseEnter={() => handleMouseEnter(label)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1">
              {icon}
              <span>{label}</span>
            </div>
          </li>
        ))}

        {/* Login Button */}
        <li className="ml-4">
          <button className="flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-100 px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <LogIn size={16} /> Log In
          </button>
        </li>
      </ul>
    </nav>
  );
};

// Inject custom fadeIn animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.4s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default Navbar;
