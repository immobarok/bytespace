import Image from "next/image";

export default function HomeHero() {
  const avatars = [
    "/images/avatars/Ellipse.png",
    "/images/avatars/Ellipse (1).png",
    "/images/avatars/Ellipse (2).png",
    "/images/avatars/Ellipse (3).png",
    "/images/avatars/review_avatar1.png",
    "/images/avatars/review_avatar2.png",
  ];

  return (
    <section className="relative w-full bg-[#003be2] flex flex-col items-center lg:h-[1024px] overflow-hidden">
      
      {/* ========================================================
          MOBILE HERO (Hidden on Desktop)
          ======================================================== */}
      <div className="flex lg:hidden flex-col items-center w-full px-4 pt-[120px] pb-0 relative z-20 overflow-hidden">
        
        {/* Mobile Background Shapes */}
        <div className="absolute z-10" style={{ top: '120px', left: '-20px', width: '120px', height: '120px' }}>
          <Image src="/images/shape/hero_lime_spring_left.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute z-10" style={{ top: '120px', right: '-40px', width: '140px', height: '140px' }}>
          <Image src="/images/shape/hero_top_right_lime_shape.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute z-10" style={{ bottom: '260px', right: '10px', width: '80px', height: '80px' }}>
          <Image src="/images/shape/hero_white_triangle.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute z-10" style={{ bottom: '200px', left: '-30px', width: '120px', height: '120px' }}>
          <Image src="/images/shape/hero_circle.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute z-10" style={{ bottom: '150px', left: '10px', width: '70px', height: '70px' }}>
          <Image src="/images/shape/hero_small_spring_white.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute z-10" style={{ bottom: '50px', right: '-20px', width: '120px', height: '120px' }}>
          <Image src="/images/shape/hero_white_spring_bottom_right.svg" alt="" fill className="object-contain" />
        </div>

        <h1 className="text-[36px] leading-[1.2] font-bold text-white mb-4 text-center relative z-20">
          Get Access to Hundreds<br />Courses Available
        </h1>
        <p className="text-body-m text-white/90 mb-8 text-center max-w-[400px]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <div className="flex flex-row items-center gap-2 sm:gap-3 w-full max-w-[620px] mt-2 z-20 relative">
          <div className="relative flex-1 w-full min-w-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 shrink-0 sm:w-5 sm:h-5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search topic"
              className="w-full bg-white h-[48px] sm:h-[56px] rounded-full pl-10 sm:pl-12 pr-4 sm:pr-6 outline-none text-body-m text-neutral-900 placeholder:text-neutral-400 shadow-lg min-w-0"
            />
          </div>
          <button className="bg-lime-400 hover:bg-lime-500 text-neutral-950 font-semibold px-5 sm:px-8 h-[48px] sm:h-[56px] rounded-full transition-colors whitespace-nowrap shadow-lg shrink-0 text-sm sm:text-base">
            Search
          </button>
        </div>

        {/* Mobile Student Image */}
        <div className="relative w-full h-[350px] mt-10 flex justify-center items-end overflow-visible">
          {/* Circular Background behind student */}
          <div 
            className="absolute bg-lime-400 rounded-full flex items-center justify-center z-0"
            style={{ width: '420px', height: '420px', bottom: '-220px', left: '50%', transform: 'translateX(-50%)' }}
          >
            <div className="bg-electric-violet-800 rounded-full w-[280px] h-[280px]" />
          </div>
          <div className="absolute bottom-0 w-[450px] h-[480px] z-10 pointer-events-none">
            <Image src="/images/hero/Image.png" alt="Student" fill className="object-contain object-bottom" priority />
          </div>
        </div>
      </div>

      {/* ========================================================
          DESKTOP HERO (Hidden on Mobile)
          ======================================================== */}
      <div className="hidden lg:flex w-full h-full flex-col items-center">
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 1024">
            {Array.from({ length: 13 }).map((_, i) => {
              const x = Math.round(((i + 1) / 14) * 1440);
              return <line key={`v-${i}`} x1={x} y1={0} x2={x} y2="100%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />;
            })}
            {Array.from({ length: 9 }).map((_, i) => {
              const y = Math.round(((i + 1) / 10) * 1024);
              return <line key={`h-${i}`} x1={0} y1={y} x2="100%" y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />;
            })}
          </svg>
        </div>
        <div className="absolute z-10" style={{ top: '121px', left: '-60px', width: '385px', height: '385px' }}>
          <Image src="/images/shape/hero_lime_spring_left.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute z-10" style={{ top: '121px', right: '-80px', width: '370px', height: '370px' }}>
          <Image src="/images/shape/hero_top_right_lime_shape.svg" alt="" fill className="object-contain" />
        </div>

        <div className="relative z-40 flex flex-col items-center text-center w-full max-w-[1200px] px-4 xl:px-0" style={{ marginTop: '179px' }}>
          <h1 className="text-heading-l text-white mb-6">
            Get Access to Hundreds<br />Courses Available
          </h1>
          <p className="text-body-l text-white/90 mb-15 max-w-[819px]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <div className="flex flex-row items-center gap-3 w-full max-w-[620px]">
            <div className="relative flex-1 w-full min-w-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400 shrink-0">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search topic"
                className="w-full bg-white h-[56px] rounded-full pl-12 pr-6 outline-none text-body-m text-neutral-900 placeholder:text-neutral-400 shadow-lg min-w-0"
              />
            </div>
            <button className="bg-lime-400 hover:bg-lime-500 text-neutral-950 font-semibold px-8 h-[56px] rounded-full transition-colors whitespace-nowrap shadow-lg shrink-0">
              Search
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-10" style={{ height: '530px' }}>

          <div
            className="absolute left-1/2 bg-lime-400 rounded-full z-0 mt-[68px] flex items-center justify-center"
            style={{ width: '1100px', height: '1100px', bottom: '-760px', transform: 'translateX(-50%)' }}
          >
            <div className="bg-electric-violet-800 rounded-full w-[600px] h-[600px]" />
          </div>

          {/* Student Image */}
          <div className="absolute bottom-0 left-1/2 z-10" style={{ width: '578px', height: '541px', transform: 'translateX(-50%)' }}>
            <Image src="/images/hero/Image.png" alt="Student" fill className="object-contain object-bottom" priority />
          </div>

          <div className="absolute bg-white rounded-[16px] shadow-sm z-20" style={{ top: '220px', left: '360px', padding: '16px 16px' }}>
            <p className="font-bold text-neutral-950 whitespace-nowrap" style={{ fontSize: '16px' }}>UI/UX Design</p>
            <p className="text-neutral-500 mt-1 whitespace-nowrap" style={{ fontSize: '12px' }}>200 Courses &nbsp;•&nbsp; 1000+ Students</p>
          </div>

          <div className="absolute bg-white rounded-[16px] shadow-xl z-20" style={{ bottom: '40px', left: '380px', padding: '16px 16px' }}>
            <p className="font-bold text-neutral-950 mb-1" style={{ fontSize: '16px' }}>Happy Students</p>
            <div className="flex items-center gap-1 mb-3">
              <span className="font-bold text-neutral-950" style={{ fontSize: '13px' }}>4.5</span>
              <span className="text-neutral-500" style={{ fontSize: '13px' }}>(240)</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#D4FB20"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" /></svg>
            </div>
            <div className="flex -space-x-2">
              {avatars.map((avatar, idx) => (
                <div key={idx} className="w-[43px] h-[43px] rounded-full border-2 border-white overflow-hidden relative">
                  <Image src={avatar} alt="" fill className="object-cover" />
                </div>
              ))}
              <div className="w-[43px] h-[43px] rounded-full border-2 border-white bg-lime-400 flex items-center justify-center text-[10px] font-bold text-neutral-950">
                2K+
              </div>
            </div>
          </div>

          <div className="absolute bg-white rounded-[20px] shadow-xl z-20" style={{ top: '240px', right: '380px', padding: '20px 24px' }}>
            <p className="text-neutral-950 mb-2 text-label-s">Learning Progress</p>
            <p className="font-bold text-neutral-950 mb-4 leading-none text-heading-m">55%</p>
            <div className="w-44 h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div className="w-[55%] h-full bg-lime-400 rounded-full" />
            </div>
          </div>

          <div className="absolute z-10" style={{ top: '71px', left: '120px', width: '175px', height: '175px' }}>
            <Image src="/images/shape/hero_small_spring_white.svg" alt="" fill className="object-contain" />
          </div>

          <div className="absolute z-10" style={{ bottom: '-28px', left: '60px', width: '343px', height: '343px' }}>
            <Image src="/images/shape/hero_circle.svg" alt="" fill className="object-contain" />
          </div>

          <div className="absolute z-10" style={{ top: '30px', right: '280px', width: '188px', height: '188px' }}>
            <Image src="/images/shape/hero_white_triangle.svg" alt="" fill className="object-contain" />
          </div>

          <div className="absolute z-10" style={{ bottom: '0px', right: '42px', width: '330px', height: '330px' }}>
            <Image src="/images/shape/hero_white_spring_bottom_right.svg" alt="" fill className="object-contain" />
          </div>

        </div>
      </div>
    </section>
  );
}
