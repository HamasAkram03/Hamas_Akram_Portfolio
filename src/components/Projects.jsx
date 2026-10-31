import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const GITHUB_SVG = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const PROJECTS = [
  {
    id: "01",
    name: "SeettuManager",
    desc: "Digitizes traditional Sri Lankan rotating savings groups with trilingual support, automated payment tracking, and dispute resolution.",
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "JWT"],
    github: null,
    demo: null,
  },
  {
    id: "02",
    name: "UniVerse Events",
    desc: "Campus event management platform where students register for events and admins control scheduling, capacity, and attendance.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS3"],
    github: "https://github.com/HamasAkram03/UniVerse-Events",
    demo: null,
  },
  {
    id: "03",
    name: "Pharmacy System",
    desc: "Web-based pharmacy system for inventory control, expiry tracking, low-stock alerts, and sales transaction processing.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5"],
    github: "https://github.com/Mohamed-Asriff/Pharmacy-Management-System",
    demo: null,
  },
  {
    id: "04",
    name: "Portfolio Website",
    desc: "Animated personal portfolio built with React and Framer Motion � fully responsive with smooth scroll animations.",
    tech: ["React.js", "Vite", "Tailwind", "Framer Motion"],
    github: "https://github.com/HamasAkram03",
    demo: "https://hamas-akram-portfolio.vercel.app/",
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col"
    >
      {/* Content */}
      <div className="flex flex-col flex-1 px-4 pt-4 pb-4 gap-2.5">
        <span className="text-xs font-black text-zinc-600">{project.id}</span>
        <h3 className="text-base font-black text-white tracking-tight leading-tight">
          {project.name}
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 flex-1">
          {project.desc}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-zinc-800 text-zinc-400 border border-zinc-700/60"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2.5 border-t border-zinc-800/70 mt-auto">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-bold hover:bg-zinc-700 hover:text-white transition-all"
            >
              {GITHUB_SVG}
              GitHub
            </a>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/40 border border-zinc-800 text-zinc-600 text-xs font-bold cursor-not-allowed select-none">
              {GITHUB_SVG}
              Private
            </span>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-red-400 text-xs font-bold hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a] transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live
            </a>
          )}
        </div>
      </div>

      {/* Hover accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff2a2a] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-400 rounded-full" />
    </motion.div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.15 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#0b0b0b] w-full py-20 md:py-28 px-6 md:px-12 border-t border-zinc-900 font-sans relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[250px] bg-[#ff2a2a]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[250px] bg-[#ff2a2a]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <div className="inline-block border border-zinc-700 bg-zinc-900/60 rounded-full px-4 py-1 text-xs text-zinc-300 font-bold mb-5 uppercase tracking-widest">
            Projects
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
                Things I&apos;ve built<span className="text-[#ff2a2a]">.</span>
              </h2>
              <p className="text-zinc-400 text-sm max-w-lg mt-3 leading-relaxed">
                Real-world projects built during my studies � full-stack apps, management systems, and web platforms.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] animate-pulse" />
              <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                {PROJECTS.length} Projects
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800"
        >
          <div>
            <p className="text-white font-black text-base">More work in progress</p>
            <p className="text-zinc-500 text-xs mt-0.5">
              Follow my GitHub for the latest commits and open-source contributions.
            </p>
          </div>
          <a
            href="https://github.com/HamasAkram03"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-black text-sm hover:bg-zinc-100 transition-all hover:shadow-[0_6px_20px_rgba(255,255,255,0.12)] hover:scale-[1.02] active:scale-[0.99]"
          >
            {GITHUB_SVG}
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
