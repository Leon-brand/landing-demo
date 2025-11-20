

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Custom Solutions",
      desc: "Tailored machinery configurations to meet your manufacturing requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M2 12h20" />
        </svg>
      ),
    },
    {
      title: "High Performance",
      desc: "State-of-the-art technology delivering maximum efficiency and minimal downtime.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2H6v20h7a5 5 0 0 0 0-20z" />
        </svg>
      ),
    },
    {
      title: "Quality Assured",
      desc: "Equipment tested with rigorous standards ensuring reliability and longevity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        </svg>
      ),
    },
    {
      title: "Global Logistics",
      desc: "Worldwide shipping and installation support for seamless deployment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3h18v13H3z" /><path d="M3 16l9 5 9-5" />
        </svg>
      ),
    },
    {
      title: "ROI Optimization",
      desc: "Increasing productivity and reducing operational costs for clients.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" /><path d="M18 17V9l-4 4-4-4-5 5" />
        </svg>
      ),
    },
    {
      title: "24/7 Support",
      desc: "Technical assistance available around the clock for your peace of mind.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 2" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="capabilities">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <span className="px-4 py-1 text-sm font-semibold bg-orange-100 text-orange-600 rounded-full">
          Our Capabilities
        </span>

        <h2 className="text-4xl font-bold text-gray-900 mt-6">
          Complete Industrial Solutions
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          From equipment selection to installation and support, we provide comprehensive
          services to ensure your manufacturing success.
        </p>

        {/* GRID */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-xl bg-white border border-gray-200 
                         hover:border-orange-400 hover:shadow-lg 
                         transition-all duration-300 hover:bg-orange-50"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 
                              bg-orange-100 text-orange-600 rounded-lg mb-6 
                              group-hover:bg-orange-200 transition-colors">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default CapabilitiesSection