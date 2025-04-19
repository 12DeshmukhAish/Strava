import React from 'react';
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#fff7f3] to-[#fdece7] text-gray-700 px-6 md:px-16 py-16 mt-20 border-t border-orange-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Section */}
        <div className="space-y-4 w-full md:w-1/3">
          <div className="w-28">
            <img
              src="/logo.png"
              alt="Strava"
              className="w-full object-contain"
            />
          </div>

          {/* App Store Buttons */}
          <div className="flex space-x-2 mt-2">
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-2 text-xl text-gray-500">
            <FaTwitter className="hover:text-orange-500 transition-colors cursor-pointer" />
            <FaYoutube className="hover:text-orange-500 transition-colors cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 transition-colors cursor-pointer" />
            <FaLinkedin className="hover:text-orange-500 transition-colors cursor-pointer" />
            <FaFacebook className="hover:text-orange-500 transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Right Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full md:w-2/3">
          <div>
            <h4 className="font-semibold text-orange-600 mb-2">Features</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 cursor-pointer">Subscription</li>
              <li className="hover:text-orange-500 cursor-pointer">Family Plan</li>
              <li className="hover:text-orange-500 cursor-pointer">Student Discount</li>
              <li className="hover:text-orange-500 cursor-pointer">Discount Programs (US Only)</li>
              <li className="hover:text-orange-500 cursor-pointer">Send a Gift</li>
              <li className="hover:text-orange-500 cursor-pointer">About</li>
              <li className="hover:text-orange-500 cursor-pointer">Careers</li>
              <li className="hover:text-orange-500 cursor-pointer">Press</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600 mb-2">Routes</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 cursor-pointer">What's New</li>
              <li className="hover:text-orange-500 cursor-pointer">Stories</li>
              <li className="hover:text-orange-500 cursor-pointer">Support</li>
              <li className="hover:text-orange-500 cursor-pointer">Business</li>
              <li className="hover:text-orange-500 cursor-pointer">Partner Center</li>
              <li className="hover:text-orange-500 cursor-pointer">Terms</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600 mb-2">Privacy</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 cursor-pointer">Privacy</li>
              <li className="hover:text-orange-500 cursor-pointer">Do Not Share My Personal Information</li>
              <li className="text-orange-600 hover:underline cursor-pointer font-medium">Log In</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Base */}
      <div className="text-center text-xs text-gray-500 mt-12">
        © {new Date().getFullYear()} Strava
      </div>
    </footer>
  );
};

export default Footer;
