import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import HeroSection from "../components/HeroSection"
import CapabilitiesSection from "../components/CapabilitiesSection"
import ContactSection from "../components/ContactSection"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = () => {
    const location = useLocation();

  useEffect(() => {
    // Si venimos desde /products con scrollTo
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const section = document.getElementById(targetId);

      if (section) {
        // Timeout para asegurar que el DOM ya renderizó
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      <Header className="w-full" />
      <HeroSection />
      <CapabilitiesSection />
      <ContactSection />
      <Footer />  
    </>
  )
  
}

export default Home