

const StatsSection = () => {
  return (
    <section className="w-full py-20  bg-[#0e2956] border border-blue-900">
      <div         className="
          w-full 
          flex flex-col md:flex-row
          items-start 
          px-6 md:px-12 
          gap-12

          justify-between
          max-[710px]:justify-center
          max-[710px]:items-center
          max-[710px]:text-center
        ">

        <div className="text-[#f97316] text-left">
          <div className="text-5xl font-bold pb-2">500+</div>
          <p className="text-white/70">Products in Catalog</p>
        </div>

        <div className="text-[#f97316] text-left">
          <div className="text-5xl font-bold pb-2">50+</div>
          <p className="text-white/70">Countries Served</p>
        </div>

        <div className="text-[#f97316] text-left">
          <div className="text-5xl font-bold pb-2">25y</div>
          <p className="text-white/70">Industry Experience</p>
        </div>

      </div>
    </section>
  )
}

export default StatsSection