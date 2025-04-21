import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { FaRunning, FaBicycle, FaWalking, FaHiking } from 'react-icons/fa';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);

  // Define activity icons to reuse in both desktop and mobile
  const activityIcons = [
    { icon: <FaRunning className="text-[#7a7a7a]" />, label: 'Running' },
    { icon: <FaBicycle className="text-[#7a7a7a]" />, label: 'Cycling' },
    { icon: <FaWalking className="text-[#7a7a7a]" />, label: 'Walking' },
    { icon: <FaHiking className="text-[#7a7a7a]" />, label: 'Hiking' }
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 py-3 text-sm font-medium">
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {!mobileMenuOpen && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        
        {/* Logo + Nav */}
        <div className="flex items-center space-x-8">
          <img src="/logo.png" alt="Strava Logo" className="h-6 md:h-7 w-auto" />

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center space-x-6">

            {/* Activities Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:border-b-2 hover:border-black transition font-semibold text-black">
                Activities
                <ChevronDown size={16} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </div>

              {showDropdown && (
                <div className="absolute top-9 left-0 w-[580px] bg-white text-gray-800 rounded-xl shadow-lg border border-gray-200 p-4 z-40 animate-fadeIn">
                  <div className="flex gap-6">

                    {/* Left - Sports List with icons */}
                    <div className="w-[45%]">
                      <p className="mb-4 font-semibold text-[#121212] text-base">Top Sports</p>
                      <ul className="space-y-4 text-sm text-[#2e2e2e]">
                        {activityIcons.map(({ icon, label }) => (
                          <li
                            key={label}
                            className="flex items-center gap-2 hover:border-b hover:border-black transition cursor-pointer"
                          >
                            <span className="text-base w-5">{icon}</span>
                            <span>{label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right - Image cards (side-by-side) */}
                    <div className="w-[55%] flex items-start justify-between gap-4">
                      {[
                        { label: 'Running', src: '/run.jpg' },
                        { label: 'Cycling', src: '/cyc.jpg' }
                      ].map(({ label, src }) => (
                        <div
                          key={label}
                          className="w-[120px] text-center group cursor-pointer"
                        >
                          <div className="overflow-hidden rounded-md shadow-sm aspect-square">
                            <img
                              src={src}
                              alt={label}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <p className="text-sm mt-2 font-medium text-[#2e2e2e]">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Static Menu Items */}
            {['Features', 'Maps', 'Challenges', 'Subscription'].map((label) => (
              <li key={label} className="hover:border-b-2 hover:border-black cursor-pointer transition font-semibold text-black">
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <button className="px-4 py-1.5 border border-gray-300 rounded hover:bg-gray-100 text-sm font-semibold text-[#2e2e2e] cursor-pointer">
            Log In
          </button>
          {/* Sign Up button - Only visible on desktop */}
          <button className="hidden md:block px-4 py-1.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm font-semibold cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white overflow-y-auto">
          <div className="flex flex-col h-full px-5 py-4">
            {/* Close Button */}
            <div className="mb-6">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 border border-gray-300 rounded-md cursor-pointer"
              >
                <X size={22} className="text-gray-700" />
              </button>
            </div>
            
            {/* Menu Items */}
            <ul className="flex flex-col text-base">
              {/* Home */}
              <li className="py-3">
                <a href="#" className="block font-medium text-black text-lg">Home</a>
              </li>
              
              {/* Activities Dropdown */}
              <li className="py-3 border-b border-gray-100">
                <div 
                  className="flex items-center justify-between cursor-pointer text-black"
                  onClick={() => setMobileActivitiesOpen(!mobileActivitiesOpen)}
                >
                  <span className="font-medium text-lg">Activities</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${mobileActivitiesOpen ? 'rotate-180' : ''}`}
                  />
                </div>
                
                {mobileActivitiesOpen && (
                  <ul className="mt-3 space-y-2 pb-3">
                    {activityIcons.map(({ icon, label }) => (
                      <li key={label} className="flex items-center gap-2 py-1.5 cursor-pointer">
                        <span className="w-5 text-gray-500">
                          {icon}
                        </span>
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              
              {/* Other Menu Items */}
              {['Features', 'Maps', 'Challenges'].map((item) => (
                <li key={item} className="py-3 border-b border-gray-100">
                  <a href="#" className="block font-medium text-black text-lg">{item}</a>
                </li>
              ))}
              
              {/* Bottom Menu Items */}
              <li className="py-3 border-b border-gray-100">
                <a href="#" className="block font-medium text-black text-lg">Subscription</a>
              </li>
              <li className="py-3 border-b border-gray-100">
                <a href="#" className="block font-medium text-black text-lg">Support</a>
              </li>
              <li className="py-3 border-b border-gray-100">
                <a href="#" className="block font-medium text-black text-lg">Sign Up</a>
              </li>
            </ul>
            
            {/* Login Button */}
            <div className="mt-6">
              <button className="w-full py-3 border border-gray-300 rounded text-black text-center font-medium cursor-pointer text-lg">
                Log In
              </button>
            </div>
            
            {/* Get the App Button */}
            <div className="mt-4">
              <button className="w-full py-3 bg-orange-500 text-white rounded font-medium cursor-pointer text-lg">
                Get the App
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Animation injection
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default Navbar;