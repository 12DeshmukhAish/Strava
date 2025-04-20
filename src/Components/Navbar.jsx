import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { FaRunning, FaBicycle, FaWalking, FaHiking } from 'react-icons/fa';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 py-3 text-sm font-medium">
        
        {/* Mobile Menu Button - Now positioned before the logo */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} stroke="#2E2E2E" strokeWidth={2} />
          ) : (
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
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#FC4C02] transition font-semibold">
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
                        {[
                          { icon: <FaRunning className="text-[#7a7a7a]" />, label: 'Running' },
                          { icon: <FaBicycle className="text-[#7a7a7a]" />, label: 'Cycling' },
                          { icon: <FaWalking className="text-[#7a7a7a]" />, label: 'Walking' },
                          { icon: <FaHiking className="text-[#7a7a7a]" />, label: 'Hiking' }
                        ].map(({ icon, label }) => (
                          <li
                            key={label}
                            className="flex items-center gap-2 hover:text-[#FC4C02] transition cursor-pointer"
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
              <li key={label} className="hover:text-[#FC4C02] cursor-pointer transition font-semibold">
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Login Button (hidden on mobile when menu is open) */}
        <div className={mobileMenuOpen ? "hidden" : "block"}>
          <button className="px-4 py-1.5 border border-gray-300 rounded hover:bg-gray-100 text-sm font-semibold text-[#2e2e2e]">
            Log In
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="flex flex-col h-full p-6">
            {/* Close Button - Centered with X */}
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>
            
            {/* Menu Items */}
            <ul className="space-y-4 text-base">
              {/* Home */}
              <li className="py-2">
                <a href="#" className="block font-medium">Home</a>
              </li>
              
              {/* Activities Dropdown */}
              <li className="border-t border-b border-gray-100 py-3">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setMobileActivitiesOpen(!mobileActivitiesOpen)}
                >
                  <span className="font-medium">Activities</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${mobileActivitiesOpen ? 'rotate-180' : ''}`}
                  />
                </div>
                
                {mobileActivitiesOpen && (
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center gap-2 py-1.5">
                      <span className="w-5 text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 7C19 8.5 18.5 9 18 10L16 19H8L6 10C5.5 9 5 8.5 5 7C5 4.79086 6.79086 3 9 3C10 3 10.5 3 12 5C13.5 3 14 3 15 3C17.2091 3 19 4.79086 19 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>Running</span>
                    </li>
                    <li className="flex items-center gap-2 py-1.5">
                      <span className="w-5 text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </span>
                      <span>Cycling</span>
                    </li>
                    <li className="flex items-center gap-2 py-1.5">
                      <span className="w-5 text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 14L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M17 14L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M10 11L7.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M14 11L16.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 4C13.1046 4 14 3.10457 14 2C14 0.895431 13.1046 0 12 0C10.8954 0 10 0.895431 10 2C10 3.10457 10.8954 4 12 4Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M8 16L16 16" stroke="currentColor" strokeWidth="2"/>
                          <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      <span>Walking</span>
                    </li>
                    <li className="flex items-center gap-2 py-1.5">
                      <span className="w-5 text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 22L18 18L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 14C4 15.1046 4.89543 16 6 16H11M4 14C4 12.8954 4.89543 12 6 12H11M4 14L4 16.5C4 17.8807 5.11929 19 6.5 19H11M11 16V19M11 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M6 8L9 5M14 5L11 8M6 8H14M6 8L6 6M14 8L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      <span>Hiking</span>
                    </li>
                  </ul>
                )}
              </li>
              
              {/* Other Menu Items */}
              {['Features', 'Maps', 'Challenges'].map((item) => (
                <li key={item} className="py-2 border-b border-gray-100">
                  <a href="#" className="block font-medium">{item}</a>
                </li>
              ))}
              
              {/* Bottom Menu Items */}
              {['Subscription', 'Support', 'Sign Up'].map((item) => (
                <li key={item} className="py-2">
                  <a href="#" className="block font-medium">{item}</a>
                </li>
              ))}
            </ul>
            
            {/* Login Button */}
            <div className="mt-8">
              <button className="w-full py-2.5 border border-gray-300 rounded-md text-black text-center font-medium">
                Log In
              </button>
            </div>
            
            {/* Get the App Button */}
          {/* Get the App Button */}
<div className="mt-4 flex justify-center">
  <button className="w-2/3 py-2.5 bg-orange-500 text-white rounded-md font-medium">
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