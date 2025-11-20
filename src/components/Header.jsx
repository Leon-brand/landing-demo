import { Link, useNavigate, useLocation } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

   return (
    <header className="w-full bg-[#0e2956] backdrop-blur-sm border-b border-blue-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#f97316] rounded-lg flex items-center justify-center">
            <span className="text-white font-extrabold text-lg">MC</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            MachineCatalog
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <button
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/", { state: { scrollTo: "capabilities" } });
              } else {
                scrollToSection("capabilities");
              }
            }}
            className="bg-[#0e2956] hover:text-blue-300 hover:border-[#f97316] transition-colors"
          >
            Services
          </button>

        <button className="bg-[#0e2956] hover:border-[#f97316] transition-colors">
          <Link
            to="/products"
            className="text-white  hover:text-blue-300 hover:border-[#f97316] transition-colors"
          >
            Products
          </Link>
        </button>
          <button
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/", { state: { scrollTo: "contact" } });
              } else {
                scrollToSection("contact");
              }
            }}
            className="bg-[#0e2956] hover:text-blue-300 hover:border-[#f97316] transition-colors"
          >
            Contact
          </button>          
        </nav>

      </div>
    </header>
  )
}

export default Header