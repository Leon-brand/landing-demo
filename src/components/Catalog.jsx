

const Catalog = () => {


  const demoImages = [
      "../Laser_Die_CutterDigital_Die_Cutter.jpg",
      "../cnc-machine-tool-industrial.jpg",
      "../industrial-drill-press-machinery.jpg",
      "../industrial-grinding-machine-tool.jpg",
      "../industrial-hydraulic-press-machinery.jpg",
      "../TOP-330-PLUS-2.png",
      "../punch-press-industrial-machine.jpg",
      "../industrial-packaging-machine-equipment.jpg",
      "../industrial-robotic-assembly-arm.jpg",
      "../industrial-testing-equipment-machine.jpg",
      "../punch-press-industrial-machine.jpg",      
      "../industrial-cutting-machine-tool.jpg",
  ]

  
  const href = '../LG-330-TT_Die_Cutting_Machine_For_Blank_Labels.pdf'
  

 return (
    <div className="min-h-screen w-full bg-[#0e2956] text-white flex flex-col">
    
<h1 className="text-3xl md:text-4xl font-bold text-center my-8">Product Catalog</h1>
      {/* GRID DE PRODUCTOS */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-10">

          {demoImages.map((src, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              className="
                w-full h-64 
                bg-gray-800/20 border border-gray-200 hover:border-orange-400 rounded-xl overflow-hidden 
                shadow-lg 
                transform 
                transition-all duration-300 
                hover:scale-[1.05] hover:shadow-2xl
              "
            >
              <img
                src={src}
                alt={`Product ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </a>
          ))}

        </div>
      </main>
    </div>
  )
}

export default Catalog
