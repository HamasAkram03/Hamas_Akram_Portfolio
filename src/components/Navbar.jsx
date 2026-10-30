import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);

  // Handle scroll to check scroll state and detect if navbar is over a light/white section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is currently behind the navbar (~50px from top)
      const sections = document.querySelectorAll('section, footer');
      let isLight = false;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // Check if section spans across the navbar's vertical point (y = 50px)
        if (rect.top <= 50 && rect.bottom > 50) {
          // Explicit check for known white sections
          if (section.id === 'education' || section.id === 'services') {
            isLight = true;
            break;
          }

          // General check for light background via computed style
          const bg = window.getComputedStyle(section).backgroundColor;
          const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (match) {
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            if (brightness > 180) {
              isLight = true;
              break;
            }
          }
        }
      }

      setIsLightSection(isLight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const navLinks = ['Home', 'About', 'Education', 'Services', 'Contact'];

  // Text turns black when over a white/light section (unless mobile menu is open with red background)
  const isDarkText = isLightSection && !isOpen;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-[#ff2a2a] py-4 shadow-lg'
          : isScrolled 
            ? isLightSection 
              ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-black/5 py-4' 
              : 'bg-black/20 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a 
            href="#home" 
            aria-label="Hamas Akram home" 
            className={`flex items-center gap-2 text-xl sm:text-2xl md:text-4xl font-black tracking-tight transition-colors duration-300 ${
              isDarkText ? 'text-black' : 'text-white'
            }`}
          >
            <img src="/favicon.svg" alt="" className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 shrink-0" />
            Hamas Akram<span className="text-red-500">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className={`font-semibold relative group transition-colors duration-300 ${
                isDarkText 
                  ? 'text-black/80 hover:text-black' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link}
              {/* Smooth hover underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#contact" 
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 backdrop-blur-md ${
              isDarkText
                ? 'bg-black/5 border border-black/20 text-black hover:bg-black/10 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'
                : 'bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
            }`}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className={`focus:outline-none p-2 transition-colors duration-300 ${
              isOpen ? 'text-white' : isDarkText ? 'text-black' : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[32rem] py-4 opacity-100 bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 pb-2 space-y-4">
             <a 
               href="https://github.com/HamasAkram03" 
               target="_blank" 
               rel="noreferrer"
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-white/10 text-white border border-white/20 font-black hover:bg-white hover:text-[#ff2a2a] transition-colors w-full text-center shadow-lg"
             >
               GitHub
             </a>
             <a 
               href="https://www.linkedin.com/in/hamas-akram-379a78241" 
               target="_blank" 
               rel="noreferrer"
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-white/10 text-white border border-white/20 font-black hover:bg-white hover:text-[#ff2a2a] transition-colors w-full text-center shadow-lg"
             >
               LinkedIn
             </a>
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
