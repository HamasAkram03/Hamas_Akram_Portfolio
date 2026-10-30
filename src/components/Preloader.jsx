import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the water fill animation (1.5s) + a small pause (0.5s)
    // before the shutter goes up smoothly.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#F52222] z-[100000] flex items-center justify-center"
        >
          {/* Logo & Name Container - CSS Grid stacking ensures 100% identical position */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid place-items-center px-4"
          >
            {/* Background Shadow Silhouette Layer */}
            <div className="col-start-1 row-start-1 flex items-center gap-2.5 sm:gap-3.5 md:gap-4 select-none pointer-events-none">
              {/* Shadow Logo */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 450 320" 
                className="h-8 sm:h-11 md:h-15 w-auto fill-red-950/35 shrink-0"
              >
                <path d="M0 46 55 0v115h126l-31 50H55v102L0 312z"/>
                <path d="m257 0 188 310h-61l-40-69H214l29-49h73l-59-99-27 46-58 20z"/>
                <path d="m87 194 176-64-109 180H94l80-125z"/>
              </svg>
              {/* Shadow Text */}
              <span className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-red-950/35">
                Hamas Akram<span>.</span>
              </span>
            </div>

            {/* Foreground Fill Layer - Exact same cell, pixel-for-pixel alignment */}
            <motion.div 
              className="col-start-1 row-start-1 flex items-center gap-2.5 sm:gap-3.5 md:gap-4 overflow-hidden whitespace-nowrap select-none"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
            >
              {/* Black Logo */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 450 320" 
                className="h-8 sm:h-11 md:h-15 w-auto fill-black shrink-0"
              >
                <path d="M0 46 55 0v115h126l-31 50H55v102L0 312z"/>
                <path d="m257 0 188 310h-61l-40-69H214l29-49h73l-59-99-27 46-58 20z"/>
                <path d="m87 194 176-64-109 180H94l80-125z"/>
              </svg>
              {/* White Text with Black Dot */}
              <span className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white">
                Hamas Akram<span className="text-black">.</span>
              </span>
            </motion.div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
