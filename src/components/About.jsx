import profileImage from '../assets/about/Jun 10, 2026, 08_04_49 PM.png';
import reactImage from '../assets/about/react-svgrepo-com.svg';
import JavaScript from '../assets/about/java-script-svgrepo-com.svg';
import mongoImage from '../assets/about/mongodb-svgrepo-com (1).svg';
import javaImage from '../assets/about/java-svgrepo-com.svg';
import pythonImage from '../assets/about/python-svgrepo-com (2).svg';
import springbootImage from '../assets/about/spring-boot-svgrepo-com.svg';
import htmlCssImage from '../assets/about/html5-01-svgrepo-com.svg';

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-[#F52222] pt-12 pb-16 px-4 w-full relative overflow-hidden font-sans"
      >
        {/* Background Glow Effects - hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-black/10 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24 items-center">
          
          {/* Left Side: ID Badge - Mobile First */}
          <div className="flex flex-col items-center w-full md:w-[400px] lg:w-[500px] shrink-0 mt-4 md:mt-0">
            
            <div className="relative flex justify-center w-full">
              
              {/* Lanyard String */}
              <div className="absolute -top-16 md:-top-28 left-1/2 w-1.5 md:w-2.5 h-24 md:h-36 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>

              {/* Lanyard Clip */}
              <div className="absolute -top-3 md:-top-5 left-1/2 w-4 md:w-5 h-6 md:h-10 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-md"></div>

              {/* Badge Card */}
              <div className="bg-gray-900 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] rounded-2xl md:rounded-3xl p-3 shadow-2xl relative z-20 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                
                {/* Cutout Hole */}
                <div className="absolute -top-2.5 left-1/2 w-12 sm:w-14 md:w-16 h-4 sm:h-5 md:h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                  <div className="w-5 sm:w-6 md:w-8 h-1.5 bg-black/30 rounded-full shadow-inner"></div>
                </div>

                {/* Profile Image */}
                <div className="w-full h-[380px] sm:h-[440px] md:h-[520px] lg:h-[600px] overflow-hidden rounded-xl md:rounded-2xl bg-gray-800">
                  <img
                    src={profileImage}
                    alt="Hamas Akram - Profile"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex-1 text-white text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-3 md:mb-4">
              Hello! 👋
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-bold mb-4 md:mb-6 leading-relaxed text-red-50">
              I'm{' '}
              <span className="text-black text-lg sm:text-xl md:text-2xl font-black inline-block mx-1 tracking-wide uppercase">
                Hamas Akram
              </span>
              , an NDT IT student at the University of Moratuwa, Sri Lanka.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-medium mb-4 md:mb-6 leading-relaxed text-red-50">
              Alongside my studies, I run a small online business called{' '}
              <span className="text-black font-black">Topbins</span>.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-medium mb-6 md:mb-8 leading-relaxed text-red-50">
              My toolkit includes HTML, CSS, Java, Python, Spring Boot, React,
              Node.js, and MongoDB.
            </p>

            {/* Skills Icons - Responsive Grid */}
            <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-items-center sm:justify-start">
              {[
                { src: javaImage, alt: "Java" },
                { src: pythonImage, alt: "Python" },
                { src: springbootImage, alt: "Spring Boot" },
                { src: htmlCssImage, alt: "HTML/CSS" },
                { src: reactImage, alt: "React" },
                { src: JavaScript, alt: "JavaScript" },
                { src: mongoImage, alt: "MongoDB" }
              ].map((skill, index) => (
                <img
                  key={index}
                  src={skill.src}
                  alt={skill.alt}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-md"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Torn Paper Divider */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-0.5">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-8 sm:h-10 md:h-16 lg:h-20 fill-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default About;