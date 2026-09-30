import Image from "next/image";

export default function HomeHero() {
  const avatars = [
    "/images/avatars/Ellipse.png",
    "/images/avatars/Ellipse (1).png",
    "/images/avatars/Ellipse (2).png",
    "/images/avatars/Ellipse (3).png",
    "/images/avatars/Ellipse (4).png",
  ];

  return (
    <section className="relative w-full bg-[#003be2] pt-[120px] pb-0 flex flex-col items-center overflow-hidden min-h-[900px] mt-[-120px]">
      {/* SVG Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 900">
          {Array.from({ length: 14 }).map((_, i) => {
            const x = Math.round(((i + 1) / 14) * 1440);
            return <line key={`v-${i}`} x1={x} y1={0} x2={x} y2="100%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />;
          })}
          {Array.from({ length: 10 }).map((_, i) => {
            const y = Math.round(((i + 1) / 10) * 900);
            return <line key={`h-${i}`} x1={0} y1={y} x2="100%" y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />;
          })}
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[1200px] mt-[100px]">
        <h1 className="text-heading-xl text-white font-bold mb-6 leading-[1.1]">
          Get Access to Hundreds<br />Courses Available
        </h1>
        <p className="text-body-l text-white/90 mb-10 max-w-[700px]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="flex items-center bg-white p-2 rounded-full w-full max-w-[620px] mb-12 shadow-lg">
          <div className="flex-1 flex items-center px-5 gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Course, topic, creator" 
              className="flex-1 bg-transparent text-body-m text-neutral-900 placeholder:text-neutral-400 outline-none h-[40px]"
            />
          </div>
          <button className="bg-lime-400 hover:bg-lime-500 text-neutral-950 font-medium px-8 py-3.5 rounded-[100px] transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* Floating Graphics Area */}
      <div className="relative z-10 w-full max-w-[1200px] h-[550px] flex justify-center mt-auto">
        {/* Large Lime Circle */}
        <div className="absolute bottom-[-200px] w-[900px] h-[900px] bg-lime-400 rounded-full z-0"></div>

        {/* Center Student Image */}
        <div className="absolute bottom-0 z-10 flex justify-center w-full">
          <div className="relative w-[650px] h-[650px]">
            <Image src="/images/hero/Image.png" alt="Student with laptop" fill className="object-contain object-bottom" priority />
          </div>
        </div>

        {/* Floating UI Cards */}
        {/* UI/UX Design */}
        <div className="absolute top-[80px] left-[150px] bg-white rounded-[24px] p-5 shadow-xl z-20 w-[220px]">
          <h4 className="text-body-m font-bold text-neutral-950">UI/UX Design</h4>
          <p className="text-label-xs text-neutral-500 mt-1">200 Courses <span className="mx-1">•</span> 1000+ Students</p>
        </div>

        {/* Happy Students */}
        <div className="absolute bottom-[60px] left-[120px] bg-white rounded-[24px] p-5 w-[250px] shadow-xl z-20">
          <h4 className="text-label-l font-bold text-neutral-950 mb-1">Happy Students</h4>
          <p className="text-label-s font-bold text-neutral-950 mb-3 flex items-center gap-1">
            4.5 <span className="text-neutral-500 font-medium">(240)</span> 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#D4FB20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          </p>
          <div className="flex -space-x-2">
            {avatars.map((avatar, idx) => (
              <div key={idx} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative z-0">
                <Image src={avatar} alt={`avatar-${idx}`} fill className="object-cover" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-lime-400 flex items-center justify-center relative z-10 text-[10px] text-neutral-950 font-bold">
              2K+
            </div>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="absolute top-[160px] right-[150px] bg-white rounded-[24px] p-6 shadow-xl z-20 w-[240px]">
          <p className="text-label-s text-neutral-600 mb-2">Learning Progress</p>
          <h3 className="text-heading-l text-neutral-950 font-bold mb-4">55%</h3>
          <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
            <div className="w-[55%] h-full bg-lime-400 rounded-full"></div>
          </div>
        </div>

        {/* Floating SVG Shapes */}
        <div className="absolute top-[0px] left-[-30px] w-[180px] h-[180px] drop-shadow-xl z-10">
          <Image src="/images/shape/hero_lime_spring_left.svg" alt="shape" fill className="object-contain" />
        </div>
        <div className="absolute top-[200px] left-[40px] w-[90px] h-[90px] drop-shadow-xl z-10 animate-pulse">
          <Image src="/images/shape/hero_small_spring_white.svg" alt="shape" fill className="object-contain" />
        </div>
        <div className="absolute bottom-[40px] left-[-80px] w-[220px] h-[220px] drop-shadow-xl z-10 animate-bounce" style={{ animationDuration: '4s' }}>
          <Image src="/images/shape/hero_circle.svg" alt="shape" fill className="object-contain" />
        </div>
        
        <div className="absolute top-[-50px] right-[-100px] w-[250px] h-[250px] drop-shadow-xl z-10">
          <Image src="/images/shape/hero_top_right_lime_shape.svg" alt="shape" fill className="object-contain" />
        </div>
        <div className="absolute top-[120px] right-[40px] w-[140px] h-[140px] drop-shadow-xl z-10">
          <Image src="/images/shape/hero_white_triangle.svg" alt="shape" fill className="object-contain" />
        </div>
        <div className="absolute bottom-[80px] right-[-20px] w-[180px] h-[180px] drop-shadow-xl z-10 animate-bounce" style={{ animationDuration: '3.5s' }}>
          <Image src="/images/shape/hero_white_spring_bottom_right.svg" alt="shape" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
}
