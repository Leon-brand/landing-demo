

const Footer = () => {
return (
    <footer className="bg-[#0e2956] border-t border-white/10 py-12 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* LOGO + DESCRIPTION */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MC</span>
              </div>
              <span className="text-white font-bold text-lg">MachineCatalog</span>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              Leading provider of industrial machinery solutions for global manufacturers.
            </p>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Finishing Machines</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Label Systems</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Inspection Tools</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">News & Blog</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* SEPARADOR */}
        <div className="border-t border-white/10 pt-8">

          {/* COPYRIGHT + SOCIALS */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm text-center">
              © 2025 MachineCatalog. All rights reserved.
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-orange-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-white/60 hover:text-orange-400 transition-colors">Twitter</a>
              <a href="#" className="text-white/60 hover:text-orange-400 transition-colors">Facebook</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )  
}

export default Footer