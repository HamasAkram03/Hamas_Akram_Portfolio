import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web App',
    budget: '',
    message: ''
  });
  const [selectedService, setSelectedService] = useState('Full-Stack Web App');
  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const services = [
    'Full-Stack Web App',
    'Frontend / React',
    'Backend / API',
    'UI/UX Redesign',
    'Full-Time / Hire'
  ];

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: selectedService,
        budget: '',
        message: ''
      });
    }, 4500);
  };

  return (
    <section 
      id="contact" 
      className="bg-[#0b0b0b] w-full min-h-screen relative overflow-hidden py-24 md:py-32 px-6 md:px-12 border-t border-zinc-900 font-sans"
    >
      {/* Background Ambience: Subtle Red Glows & Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-60" />
      <div className="absolute -top-32 left-1/4 w-[500px] h-[300px] bg-[#F9161D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#F9161D]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header - Left aligned matching Education section */}
        <div className="mb-12 md:mb-16">
          <div className="inline-block border border-zinc-700 bg-zinc-900/60 rounded-full px-5 py-1.5 text-sm text-zinc-300 font-bold mb-6 shadow-sm">
            Contact
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08]">
            Let's create something together<span className="text-[#F9161D]">.</span>
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
            Have a project in mind, an engineering role, or a vision to execute? Let’s turn your ideas into reality.
          </p>
        </div>

        {/* Master Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Project Proposal & Inquiry Form */}
          <div className="lg:col-span-7 bg-[#141416]/90 border border-zinc-800/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden">
            {/* Top red accent glow line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F9161D] to-transparent" />

            {submitted ? (
              <div className="min-h-[460px] flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-6 shadow-lg">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight">Proposal Received!</h3>
                <p className="text-zinc-400 text-base max-w-md leading-relaxed mb-6">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>! I've received your inquiry regarding <span className="text-white font-semibold">{selectedService}</span> and will get back to you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-zinc-700 bg-zinc-900 text-white font-semibold text-xs tracking-wider uppercase hover:border-zinc-500 transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Step 1: Select Service Type */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs uppercase tracking-wider font-bold text-zinc-400 flex items-center justify-between">
                    <span>1. I'm looking for help with:</span>
                    <span className="text-zinc-300 text-[11px] font-semibold">{selectedService}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((srv) => {
                      const isActive = selectedService === srv;
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => {
                            setSelectedService(srv);
                            setFormData({ ...formData, service: srv });
                          }}
                          className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                            isActive
                              ? 'bg-[#F9161D] text-white shadow-[0_0_15px_rgba(249,22,29,0.4)]'
                              : 'bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white'
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name-input" className="text-xs uppercase tracking-wider font-bold text-zinc-400">
                      Your Name <span className="text-[#F9161D]">*</span>
                    </label>
                    <input 
                      id="name-input"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1b1b1e]/90 border border-zinc-800/90 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email-input" className="text-xs uppercase tracking-wider font-bold text-zinc-400">
                      Your Email <span className="text-[#F9161D]">*</span>
                    </label>
                    <input 
                      id="email-input"
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1b1b1e]/90 border border-zinc-800/90 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Step 3: Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message-input" className="text-xs uppercase tracking-wider font-bold text-zinc-400">
                    Project Details / Message <span className="text-[#F9161D]">*</span>
                  </label>
                  <textarea 
                    id="message-input"
                    required
                    rows={4}
                    placeholder="Tell me about your goals, timelines, or role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1b1b1e]/90 border border-zinc-800/90 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all duration-200 resize-y min-h-[120px]"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full group bg-gradient-to-r from-[#F9161D] via-[#F9161D] to-[#F9161D] text-white font-black text-sm sm:text-base py-4 px-8 rounded-2xl hover:shadow-[0_12px_35px_rgba(249,22,29,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-3"
                  >
                    <span>Send Message</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* RIGHT: Direct Contact Channels */}
          <div className="lg:col-span-5">

            {/* Quick Contact Channels - Clean Uniform Monochrome Styling */}
            <div className="bg-[#141416]/90 border border-zinc-800/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Contact Information
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Reach out directly through any of these channels
                  </p>
                </div>
                {copiedText && (
                  <span className="text-xs font-bold text-zinc-300 animate-pulse bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700">
                    ✓ Copied {copiedText}!
                  </span>
                )}
              </div>

              {/* Email channel */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all group">
                <a 
                  href="mailto:hamasakram2003@gmail.com" 
                  className="flex items-center gap-3.5 min-w-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] text-zinc-400 uppercase tracking-wider font-bold">Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                      hamasakram2003@gmail.com
                    </span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy('hamasakram2003@gmail.com', 'Email')}
                  title="Copy email address"
                  className="p-2 text-zinc-500 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>

              {/* WhatsApp & Phone Channel */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all group">
                <a 
                  href="https://wa.me/94770795463?text=Hi%20Hamas,%20I%20am%20interested%20in%20working%20with%20you!" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 min-w-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] text-zinc-400 uppercase tracking-wider font-bold">WhatsApp & Phone</span>
                    <span className="text-xs sm:text-sm font-semibold text-white block">
                      +94 77 079 5463
                    </span>
                  </div>
                </a>
                <a
                  href="https://wa.me/94770795463?text=Hi%20Hamas,%20I%20am%20interested%20in%20working%20with%20you!"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 transition-all shrink-0"
                >
                  Chat ↗
                </a>
              </div>

              {/* GitHub */}
              <a 
                href="https://github.com/HamasAkram03" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[11px] text-zinc-400 uppercase tracking-wider font-bold">GitHub</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      @HamasAkram03
                    </span>
                  </div>
                </div>
                <span className="text-zinc-500 group-hover:text-white transition-colors">↗</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/hamas-akram-379a78241" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[11px] text-zinc-400 uppercase tracking-wider font-bold">LinkedIn</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Hamas Akram
                    </span>
                  </div>
                </div>
                <span className="text-zinc-500 group-hover:text-white transition-colors">↗</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
