
import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  // Referencia al formulario
  const formRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {//se ejecuta cada vez que el usuario hace scroll    
    const handleScroll = () => {
      if (!formRef.current) return;

      // Obtener posición del elemento respecto a la ventana
      const rect = formRef.current.getBoundingClientRect();

      // Verificamos si el elemento está dentro del viewport
      // rect.top < 80% de la pantalla  → entró al viewport
      // rect.bottom > 0 → no ha salido por arriba
      const inView =
        rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

      // Actualizamos visibilidad
      setIsVisible(inView);
    };

    // Vincular el evento de scroll a la función
    window.addEventListener("scroll", handleScroll);

    // EJECUTAMOS UNA VEZ AL INICIO
    // para evitar bugs cuando la página inicia un poco scrolleada
    handleScroll();

    // Limpiar el listener cuando el componente se desmonta
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="contact" 
      className="py-24 bg-[#0e2956] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/landing-demo/provision-concept.jpg')`,
      }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
      <div className="text-center max-w-2xl mx-auto mb-12">
  
  <div className="flex items-center justify-center gap-3">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
      Get in Touch
    </h2>

    <img
      className="mt-1"
      src="/landing-demo/flag-icon.png"
      alt="flag-icon"
      width={65}
      height={65}
    />
  </div>

  <p className="text-gray-200 mt-4">
    Questions about our industrial machinery?<br/>
    Send us a message and we’ll get back to you shortly.
  </p>
</div>  

        {/* FORM WRAPPER */}
     <div
      ref={formRef} // el div que queremos observar
      className={`
        max-w-3xl mx-auto bg-white/50 backdrop-blur-md p-10 rounded-2xl 
        shadow-lg border border-white/30 
        transition-all duration-700

        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"     // cuando entra
            : "opacity-0 translate-y-6 scale-95"         // cuando sale
        }
      `}
    >  
  <form className="grid gap-8">

    {/* NAME + EMAIL */}
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Name*</label>
        <input
          type="text"
          className="
            w-full px-4 py-3 rounded-xl 
            bg-white/60 border border-gray-300/70
            focus:border-[#f97316]
            outline-none transition-all"
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Email*</label>
        <input
          type="email"
          className="
            w-full px-4 py-3 rounded-xl 
            bg-white/60 border border-gray-300/70
            focus:border-[#f97316]
            outline-none transition-all"
          placeholder="john@yourname.com"
          required
        />
      </div>
    </div>

      {/* phone number + compaa name */ }
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Phone</label>
        <input
          type="number"
          className="
            w-full px-4 py-3 rounded-xl 
            bg-white/60 border border-gray-300/70
            focus:border-[#f97316]
            outline-none transition-all"
          placeholder="Your phone number"          
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="text"
          className="
            w-full px-4 py-3 rounded-xl 
            bg-white/60 border border-gray-300/70
            focus:border-[#f97316]
            outline-none transition-all"
          placeholder="Your company name"
        />
      </div>
    </div>
    {/* MESSAGE */}
    <div>
      <label className="block text-gray-700 font-medium mb-2">Message*</label>
      <textarea
        rows="5"
          className="
            w-full px-4 py-3 rounded-xl 
            bg-white/60 border border-gray-300/70
            focus:border-[#f97316]
            outline-none transition-all"
        placeholder="Write your message here..."
        required
      ></textarea>
    </div>

    {/* BUTTON */}
    <div className="text-center">
      <button
        type="button"
        className="
          px-10 py-3 rounded-xl font-semibold
          bg-[#0e2956] text-white
          hover:bg-white hover:text-[#0e2956] hover:border-[#f97316]
          border border-[#0e2956]
          transition-all duration-200 shadow-sm
        "
      >
        Send Message
      </button>
    </div>

  </form>
</div>


      </div>
    </section>
  )  
}



export default ContactSection