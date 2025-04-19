import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  // Modal signup form
  const EmailSignupForm = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-orange-600">Sign Up</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl font-bold">&times;</button>
        </div>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-md shadow hover:from-orange-600 hover:to-red-600 transition-all">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="relative w-full bg-gradient-to-b from-[#fff7f3] to-[#fdece7] overflow-hidden py-20 px-6 md:px-16 text-gray-800">
      {showForm && <EmailSignupForm onClose={() => setShowForm(false)} />}

      {/* Background decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-orange-100 opacity-30 blur-3xl"></div>
      <div className="absolute top-32 right-[-80px] w-96 h-96 rounded-full bg-red-100 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-yellow-100 opacity-30 blur-2xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left: Hero Image with 3D tilt hover effect */}
     {/* Left: Enlarged Hero Image */}
<div className="hidden md:block w-[38%] group perspective">
  <div className="transition-transform duration-500 transform group-hover:rotate-y-6 group-hover:scale-[1.02] bg-white rounded-2xl overflow-hidden shadow-2xl">
    <img
      src="/cycle.jpg"
      alt="Cyclists"
      className="w-full h-full object-cover"
    />
  </div>
</div>


    {/* Center: Pixel-perfect Strava Clone CTA */}
<div className="w-full md:w-1/3 bg-white text-center px-6 py-10 rounded-xl">
  <div className="mb-6">
    <h1 className="text-2xl md:text-[28px] font-bold leading-tight text-gray-900 mb-2">
      Community-Powered <br /> Motivation
    </h1>
    <p className="text-sm text-gray-700 mb-4">
      Track your progress and cheer each other on. Join over 100 million active people on Strava for free.
    </p>
    <p className="text-sm text-gray-800 mb-6">
      Already a member?{' '}
      <span className="text-orange-600 hover:underline cursor-pointer">Log In</span>
    </p>
  </div>

  {/* Sign-up buttons */}
  <div className="space-y-3">
    <button className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white px-4 py-[10px] rounded-md text-sm font-medium hover:bg-gray-100 transition">
      <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
      Sign Up With Google
    </button>

    <button className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white px-4 py-[10px] rounded-md text-sm font-medium hover:bg-gray-100 transition">
      <img src="https://img.icons8.com/ios-filled/24/mac-os.png" alt="Apple" />
      Sign Up With Apple
    </button>

    <button
      onClick={() => setShowForm(true)}
      className="w-full bg-[#fc5200] hover:bg-[#e64700] text-white px-4 py-[10px] rounded-md text-sm font-semibold transition"
    >
      Sign Up With Email
    </button>
  </div>

  <p className="text-xs text-gray-500 mt-4 leading-snug">
    By continuing, you agree to our{' '}
    <span className="underline hover:text-gray-800 cursor-pointer">Terms of Service</span>{' '}
    and{' '}
    <span className="underline hover:text-gray-800 cursor-pointer">Privacy Policy</span>.
  </p>
</div>


        {/* Right Image */}
  
        {/* Right: Enlarged App Image */}
<div className="hidden md:block w-[38%] group perspective">
  <div className="transition-transform duration-500 transform group-hover:-rotate-y-6 group-hover:scale-[1.02] bg-white rounded-2xl overflow-hidden shadow-2xl">
    <img
      src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
      alt="Strava App"
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </div>

      {/* Custom keyframes for entrance */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .perspective {
            perspective: 1200px;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
