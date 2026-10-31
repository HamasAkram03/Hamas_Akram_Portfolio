const Education = () => {
  return (
    <section
      id="education"
      className="bg-white py-24 px-6 md:px-12 w-full font-sans"
    >
      <div className="max-w-6xl mx-auto">
        <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm">
          Education
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-10">
          My academic journey
        </h2>

        <article className="relative max-w-4xl border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
          <div className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-[#F9161D]" />
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                National Diploma in IT (NDT)
              </h3>
              <p className="text-lg font-semibold text-gray-700">
                ITUM, University of Moratuwa
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v14H4V6a1 1 0 011-1z"
                  />
                </svg>
                Feb 2025 - Feb 2028
              </span>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                Pursuing
              </span>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mt-4">
            Developing practical knowledge and technical skills in programming,
            software engineering, system design, and emerging technologies
            through academic learning and hands-on projects.
          </p>
        </article>

        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-8">
            Professional Certificates
          </h3>
          <div className="grid gap-5 md:grid-cols-2 max-w-5xl">
            <article className="border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                    AI/ML Engineer - Stage 1
                  </h4>
                  <p className="text-lg font-semibold text-gray-700">
                    SLIIT University
                  </p>
                </div>
                <span className="rounded-full border border-green-200 bg-green-50 px-5 py-2.5 text-sm font-semibold text-green-700">
                  Completed
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-500">2026</p>
            </article>

            <article className="border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                    Python for Beginners
                  </h4>
                  <p className="text-lg font-semibold text-gray-700">
                    University of Moratuwa
                  </p>
                </div>
                <span className="rounded-full border border-green-200 bg-green-50 px-5 py-2.5 text-sm font-semibold text-green-700">
                  Completed
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-500">2025</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
