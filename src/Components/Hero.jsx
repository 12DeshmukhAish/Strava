import React, { useState, useEffect } from 'react';
import { ChevronRight, Check } from 'lucide-react';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Email signup modal
  const EmailSignupForm = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-orange-600">Sign Up</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl font-bold cursor-pointer">&times;</button>
        </div>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition-all cursor-pointer">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );

  // Carousel content with overlapping images
  const carouselSlides = [
    {
      backgroundImage: "https://web-assets.strava.com/assets/landing-pages/_next/static/media/static-layer.a3a2a2e3.png",
      overlayImage: "https://web-assets.strava.com/assets/landing-pages/_next/static/media/frame.842c929b.png",
      title: "Start by sweating.",
      description: "The way you \"post\" in this network is by being active. Strava works with your mobile phone or favorite GPS device to track your activities and share your efforts with friends."
    },
    {
      backgroundImage: "https://web-assets.strava.com/assets/landing-pages/_next/static/media/static-layer.2bf69afe.png",
      overlayImage: "https://web-assets.strava.com/assets/landing-pages/_next/static/media/frame.720a1fc4.png",
      title: "Get better by analysis.",
      description: "When your workout is over, almost every metric you can imagine awaits - from basics like speed, pace and distance, to Strava exclusives, like your performance compared to past attempts and Relative Effort."
    },
    {
      backgroundImage: "https://web-assets.strava.com/assets/landing-pages/_next/static/media/static-layer.1ef42ed3.png",
      overlayImage: "https://web-assets.strava.com/assets/landing-pages/_next/static/media/frame.877d303f.png",
      title: "Dive into details on desktop.",
      description: "Our desktop experience goes even deeper with training plans, route planning, activity breakdowns and other tools to take your planning and analysis game to the limit."
    }
  ];

  return (
    <section className="relative w-full overflow-hidden text-gray-800">

      {/* 📱 Mobile View - Top Part */}
      <div className="md:hidden relative w-full h-screen bg-black">
        <img
          src="https://web-assets.strava.com/assets/landing-pages/_next/static/media/background.1c5a9fc3.webp"
          alt="Mobile background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          
          <div className="mb-32">
            <h1 className="text-4xl font-semibold mb-20 drop-shadow-md">
              Community-Powered Motivation
            </h1>
            <button className="bg-[#fc5200] hover:bg-[#e14a00] text-white font-semibold px-8 py-3 rounded-full text-base mb-5 shadow-lg transition-all cursor-pointer mt-6">
              Join Us Now
            </button>
            <div>
              <a href="#" className="block text-base opacity-90 hover:opacity-100 transition-all cursor-pointer">
                Explore Strava
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 📱 Mobile View - Who We Are Section */}
      <div className="md:hidden bg-white text-center px-6 pt-12 pb-16">
        <h2 className="text-lg font-semibold text-gray-500 tracking-widest mb-4">WHO WE ARE</h2>
        <h3 className="text-black-700 text-xl leading-relaxed mb-8">
          If you're active, Strava was made for you. Our mobile app and website enhance the
          experience of sport and connect millions of athletes from around the world.
          We're the social network for those who strive. Join us.
        </h3>

        <div className="md:hidden bg-white">
          {/* Carousel */}
          <div className="relative py-12 px-6">
            {carouselSlides.map((slide, index) => (
              <div 
                key={index} 
                className={`transition-opacity duration-500 ${activeSlide === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
                style={{ display: activeSlide === index ? 'block' : 'none' }}
              >
                <div className="flex flex-col items-center">
                  {/* Image Container with Overlapping Images */}
                  <div className="relative w-64 h-64 mb-8">
                    {/* Background Image - Static Layer */}
                    <div className="ImageSequence_background_AYxDH">
                      <img 
                        src={slide.backgroundImage}
                        alt="Background" 
                        className="ImageSequence_staticLayer___rxGN w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Overlay Image - Fade In Layer */}
                    <div className="absolute inset-0">
                      <img 
                        src={slide.overlayImage}
                        alt="Analysis" 
                        className="ImageSequence_fadeInLayer__yCtSt w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  {/* Dots */}
                  <div className="flex justify-center space-x-8 mt-6 mb-8">
                    {[0, 1, 2].map((dot) => (
                      <button 
                        key={dot}
                        onClick={() => setActiveSlide(dot)}
                        className={`w-3 h-3 rounded-full ${activeSlide === dot ? 'bg-gray-500' : 'bg-gray-300'} cursor-pointer`}
                        aria-label={`Go to slide ${dot + 1}`}
                      />
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{slide.title}</h2>
                  <p className="text-[15px] text-black-700 leading-relaxed font-semibold px-2">{slide.description}</p>
                </div>
              </div>
            ))}
            
            {/* Join Now Button */}
            <div className="flex justify-center mt-20">
              <a href="#" className="text-orange-500 font-semibold text-2xl flex items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span>Join Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    
      <div className="md:hidden bg-white pt-6 pb-12 px-6 text-center border-t border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-5 leading-snug">
          Join for the tracking, stay for the community.
        </h3>

        <div className="relative mt-4 mb-10">
          <img
            src="/run.jpg"
            alt="Community users"
            className="w-full rounded-lg shadow-md"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-xl text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Open, tap, go.</h3>
            <p className="text-lg text-gray-700 leading-snug">
              Recording an activity with Strava is easy, and afterward you'll have a
              detailed activity map and tons of performance data.
            </p>
          </div>
        </div>
        {/* Paragraphs under image */}
        <div className="text-left px-1 leading-relaxed text-gray-800">
          <h3 className="font-semibold mb-1 text-xl">A no BS network.</h3>
          <p className="mb-5 text-lg">
            The Strava feed is full of inspiring activities, crazy adventures and
            interesting new routes — all the best athletic content, none of the junk
            posts you find on other social networks.
          </p>
          <h3 className="font-semibold mb-1 text-xl">The ultimate athlete resource.</h3>
          <p className="mb-5 text-lg">
            A running club in your neighborhood, content from your favorite bicycle
            maker, the best trail to catch the sunset, a fun new race, the city's
            toughest climb, a weekend training partner — whatever your next
            adventure, you'll find it on Strava.
          </p>
        </div>
      </div>

      {/* 📱 Join for Tracking Section with text-on-image effect */}
      <div className="md:hidden bg-white pt-4 pb-8 px-6 text-center border-t border-gray-200">
        {/* 📱 Mobile View - Features Section */}
        <h2 className="text-2xl text-center mb-8 text-gray-900">Explore our features.</h2>

        {/* Track & Analyze */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://web-assets.strava.com/assets/landing-pages/_next/static/media/track-analyze.5fba41a9.svg"
              alt="Track Icon"
              className="w-8 h-8 text-orange-500"
            />
          </div> 
          <h3 className="text-xl text-center mb-2 text-gray-900">Track & Analyze</h3>
          <p className="text-sm font-semibold text-gray-900">
            Learn about recording an activity on Strava and all the ways you can analyze your performance.
          </p>
        </div>

        {/* Share & Connect */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://web-assets.strava.com/assets/landing-pages/_next/static/media/share-connect.64497bdd.svg"
              alt="Connect Icon"
              className="w-8 h-8 text-orange-500"
            />
          </div>
          <h3 className="text-xl text-center mb-4 text-gray-900">Share & Connect</h3>
          <p className="text-sm font-semibold text-gray-900">
            Workout with friends, stay motivated, get inspired – our community is what separates Strava from the rest.
          </p>
        </div>

        {/* Explore & Compete */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://web-assets.strava.com/assets/landing-pages/_next/static/media/explore-compete.dbf91fa1.svg"
              alt="Explore Icon"
              className="w-8 h-8 text-orange-500"
            />
          </div>
          <h3 className="text-xl text-center mb-4 text-gray-900">Explore & Compete</h3>
          <p className="text-sm font-semibold text-gray-900">
            Discover your next goal with Strava segments, routes, maps, clubs, challenges and race courses.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <button className="border border-gray-500 text-orange-500 font-semibold rounded-full px-8 py-2 text-sm hover:bg-orange-50 transition-all">
            EXPLORE
          </button>
        </div>
      </div>

      {/* 📱 Mobile View - Ready to give it a shot? */}
      <div className="md:hidden bg-white px-6 py-10 border-t border-gray-200">
        <h2 className="text-2xl text-center mb-8">Ready to give it a shot?</h2>

        <ul className="mb-12 space-y-4">
          <li className="flex items-center">
            <Check className="text-orange-500 w-5 h-5 mr-3 flex-shrink-0" />
            <span className="text-black-900">Free to join / free to use</span>
          </li>
          <li className="flex items-center">
            <Check className="text-orange-500 w-5 h-5 mr-3 flex-shrink-0" />
            <span className="text-black-900">Millions of athletes</span>
          </li>
          <li className="flex items-center">
            <Check className="text-orange-500 w-5 h-5 mr-3 flex-shrink-0" />
            <span className="text-black-900">iPhone, Android & web apps</span>
          </li>
          <li className="flex items-center">
            <Check className="text-orange-500 w-5 h-5 mr-3 flex-shrink-0" />
            <span className="text-black-900">Works with most GPS devices</span>
          </li>
        </ul>

        <div className="text-center">
          <a href="#" className="flex items-center justify-center text-orange-500 font-semibold cursor-pointer hover:underline text-xl mb-4">
            <ChevronRight className="w-6 h-7 ml-1" />
            <span>Join Us Now</span>
          </a>
        </div>
      </div>

      <section className="md:hidden bg-[#121212] text-white px-6 py-12 relative overflow-hidden">
        {/* Background pattern or gradient can be added here if required */}

        <h3 className="text-sm font-medium text-center text-gray-500 uppercase mb-4 tracking-wide">
          STRAVA SUBSCRIPTION
        </h3>

        <h3 className="text-2xl font-semibold text-center leading-snug mb-8">
          More features, more fun. We strive to deliver an experience to match their enthusiasm.
        </h3>

        {/* Overlapped Image Structure */}
      
        {/* 📍 Beacon UI - Two Overlapped Images */}
        <div className="relative w-full flex justify-center mb-10">
          <div className="relative w-[220px] h-[290px]">
            {/* Map Screenshot */}
            <img
              src="https://web-assets.strava.com/assets/landing-pages/_next/static/media/frame.20c32256.png"
              alt="Strava Beacon Map"
              className="absolute top-0 left-0 w-full h-full object-contain"
            />

            {/* Notification Overlay */}
            <img
              src="https://web-assets.strava.com/assets/landing-pages/_next/static/media/static-layer-front.d1bcfd7c.png"
              alt="Beacon Callout"
              className="absolute top-[9%] left-1/2 -translate-x-1/2 w-[220px]"
            />
          </div>
        </div>

        <h3 className="text-2xl text-center mb-2">Feature highlight: Beacon.</h3>
        <p className="text-sm font-semibold text-gray-300 text-center mb-8">
          Share your real-time location during an activity with up to three safety contacts. Your loved ones get peace of mind. You get to forge ahead (or stop for a snack).
        </p>

        <h2 className="text-2xl text-center mb-8">
          Here's how a Strava subscription takes your experience to the next level.
        </h2>

        <div className="space-y-8">
          {/* Track & Analyze */}
          <div className="text-center">
            <h3 className="font-semibold mb-2 text-xl">Track & Analyze</h3>
            <p className="text-sm font-semibold text-gray-300">
              Learn about recording an activity on Strava and all the ways you can analyze your performance.
            </p>
          </div>

          {/* Share & Connect */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Share & Connect</h3>
            <p className="text-sm font-semibold text-gray-300">
              Workout with friends, stay motivated, get inspired — our community is what separates Strava from the rest.
            </p>
          </div>

          {/* Explore & Compete */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Explore & Compete</h3>
            <p className="text-sm font-semibold text-gray-300">
              Discover your next goal with Strava segments, routes, maps, clubs, challenges and race courses.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="border border-gray-500 text-white font-semibold rounded-full px-8 py-2 text-sm hover:bg-gray-800 transition-all cursor-pointer">
            EXPLORE
          </button>
        </div>
        <div className="text-center mt-10">
          <a href="#" className="flex items-center justify-center text-white-500 font-semibold cursor-pointer text-xl">
            <ChevronRight className="w-6 h-7 ml-1 text-orange-500" />
            <span>Join Us Now</span>
          </a>
        </div>
      </section>

      {/* 📱 Mobile View - Additional Features (with background image + orange border) */}
      <div
        className="md:hidden relative px-6 pt-10 pb-6 text-center text-white"
        style={{
          backgroundImage: 'url("https://web-assets.strava.com/assets/landing-pages/_next/static/media/Background-Mobile-Features.58de0f8c.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

        {/* Content */}
        <div className="relative z-50 py-30">
          <h3 className="text-2xl mb-6 leading-snug">
            You don't have to run or ride to love our features.
            Strava works with many of your other favorite sports, like skiing, kiteboarding,
            crossfit, kayaking, inline skating, rock climbing, surfing, yoga and more.
            Give it a shot, you'll dig it.
          </h3>
        </div>
      </div>

      {/* 📱 Mobile View – Feature + Subscription Cards - FIXED PLACEMENT */}
      <div className="md:hidden">
        {/* Strava Features Card */}
        <div className="bg-[#fc5200] text-white text-center py-25 px-6">
          <h2 className="text-lg font-semibold mb-16">Strava Features</h2>
          <button className="border-2 border-gray-500 text-white font-semibold rounded-full px-6 py-2 text-sm hover:border-transparent transition-all cursor-pointer">
            EXPLORE
          </button>
        </div>

        {/* Strava Subscription Card */}
        <div className="bg-[#1e1e1e] text-white text-center py-25 px-6">
          <h2 className="text-lg font-semibold mb-16">Strava Subscription</h2>
          <button className="border border-gray-500 text-white font-semibold rounded-full px-6 py-2 text-sm hover:bg-black hover:text-white hover:border-[#fc5200] transition-all cursor-pointer">
            EXPLORE
          </button>
        </div>
      </div>

      {/* 🖥️ Desktop Layout */}
      <div className="hidden md:block w-full h-screen">
        <div className="flex h-full">
          {/* Left Image */}
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src="/pr1.webp"
              alt="Cyclists"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Sign-up Section */}
          <div className="w-1/3 bg-white flex items-center justify-center">
            <div className="px-8 py-16 text-center max-w-md">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Community-Powered<br />Motivation
              </h1>
              <p className="text-base text-gray-700 mb-6">
                Track your progress and cheer each other on. Join over 100 million active people on Strava for free.
              </p>
              
              <p className="text-base text-gray-800 mb-8">
                Already a Member? <a href="#" className="text-[#fc5200] hover:underline cursor-pointer">Log In</a>
              </p>
              
              {/* Sign-up buttons */}
              <div className="space-y-3 mb-4">
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white px-4 py-3 rounded-md text-base font-medium hover:bg-gray-100 transition cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#4285F4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  Sign Up With Google
                </button>

                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white px-4 py-3 rounded-md text-base font-medium hover:bg-gray-100 transition cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Sign Up With Apple
                </button>

                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-[#fc5200] hover:bg-[#e64700] text-white px-4 py-3 rounded-md text-base font-semibold transition cursor-pointer"
                >
                  Sign Up With Email
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-6 leading-snug">
                By continuing, you are agreeing to our{' '}
                <a href="#" className="underline hover:text-gray-800 cursor-pointer">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="underline hover:text-gray-800 cursor-pointer">Privacy Policy</a>.
              </p>
            </div>
          </div>

          {/* Right Section - Strava Style */}
          <div className="w-1/3 relative overflow-hidden">
            {/* Background Image - full coverage */}
            <img
              src="https://web-assets.strava.com/assets/landing-pages/_next/static/media/DesktopWide-Col-3-en-US@1x.27ace228.webp"
              alt="Landscape"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Device Image - precisely aligned */}
            <div
              className="absolute"
              style={{
                bottom: '0',
                left: '-60px',
                width: '350px',
                height: 'auto',
                zIndex: 10,
              }}
            >
              <img
                src="https://web-assets.strava.com/assets/landing-pages/_next/static/media/Device-en-US@1x.afd7937e.webp"
                alt="Strava App Device"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Email Signup Modal */}
      {showForm && <EmailSignupForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Hero;