import { Link } from "react-router-dom";
import StatsSection from "./StatsSection";

const HeroSection = () => {
 return (
  <>
      <section className="
        relative w-full min-h-[600px] flex items-center 
        px-6 md:px-12
        text-white
        bg-cover bg-center bg-no-repeat
        "
      style={{
        backgroundImage: `url('../banner-back.jpg')`,
      }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

      
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Industrial Machinery Solutions
            <span className="block text-orange-500">Built for Performance</span>
          </h1>

          <p className="text-white mt-6 text-lg leading-relaxed max-w-lg">
            High-performance equipment designed to increase productivity, 
            reduce downtime, and power your manufacturing operations.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-700 transition"
            >
              Contact Us
            </a>
            <button
              className="
                bg-[#0e2956] text-white border border-white
                px-4 py-2 rounded-md
                hover:bg-white hover:text-[#0e2956] hover:border-white 
                transition-colors duration-200
              "
            >
              <Link
                target="_blank"
                to="/products"
                className="block w-full h-full no-underline text-white hover:text-[#0e2956]"
              >
                Catalog
              </Link>
            </button>
          </div>
        </div>

  
{/*         <div className="flex justify-center">
          <img
            src="../TOP-330-PLUS-2.png"
            alt="Industrial machinery example"
            className="w-full max-w-md rounded-xl shadow-xl"
          />
        </div>
 */}

    <div className="flex justify-center">
      <img
        src="../TOP-330-PLUS-2.png"
        alt="Industrial machinery example"
        className="
          w-full max-w-md rounded-xl shadow-xl
          opacity-0 translate-y-3 scale-75
          animate-[fadeInUp_1s_ease-out_forwards]
          transition-trabsform duration-800
          hover:scale-105
        "
      />
      </div>
      </div>
    </section>
    <StatsSection />
    
  </>
  )  
}


export default HeroSection