import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import desktopHomeImage from '../assets/about/Rectangle 38.png';
import mobileHomeImage from '../assets/about/WhatsApp Image 2026-06-11 at 17.00.59.jpeg';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full h-screen min-h-[100svh] overflow-hidden bg-[#ff2a2a]">
      {/* Homepage profile photo background - Mobile responsive */}
      <picture className="absolute inset-0 w-full h-full z-0">
        <source media="(min-width: 768px)" srcSet={desktopHomeImage} />
        <source media="(max-width: 767px)" srcSet={mobileHomeImage} />
        <img
          src={desktopHomeImage}
          alt="Hamas Akram"
          className="w-full h-full object-cover object-center"
        />
      </picture>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pt-28 pb-10 md:px-12 md:pt-32 md:pb-10 max-w-7xl mx-auto flex flex-col justify-center md:flex-row md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left w-full md:w-[58%]">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98] font-bold mb-4 tracking-tight"
          >
            <span className="block">Hi, I'm</span>
            <span className="block text-transparent [-webkit-text-stroke:1.5px_white]">Hamas Akram</span>
            <span className="block">IT Student &amp; Entrepreneur</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
          >
            NDT IT student at the University of Moratuwa, Sri Lanka. Building web applications while running Topbins, my football jersey business.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <a href="#about" className="inline-flex px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md">
              My Journey
            </a>
            
            {/* Secondary Button - GitHub link */}
            <a href="https://github.com/HamasAkram03" target="_blank" rel="noreferrer" className="inline-flex px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/hamas-akram-379a78241" target="_blank" rel="noreferrer" className="inline-flex px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md">
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a href="#about" aria-label="Scroll to About section" className="block p-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;