import Image from "next/image";

export default function StudioHero({ courseId }: { courseId: string }) {
  return (
    <div className="w-full relative h-[592px] overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-[592px] z-0"
        style={{ backgroundColor: '#003be2' }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 592"
        >
          {Array.from({ length: 13 }).map((_, i) => {
            const x = Math.round(((i + 1) / 14) * 1440);
            return <line key={`v-${i}`} x1={x} y1={0} x2={x} y2={592} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />;
          })}
          {Array.from({ length: 7 }).map((_, i) => {
            const y = Math.round(((i + 1) / 7) * 592);
            return <line key={`h-${i}`} x1={0} y1={y} x2={1440} y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />;
          })}
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full pt-[140px] pb-16 px-4 xl:px-0 flex flex-col">
        
        {/* Profile Info Row */}
        <div className="flex items-center gap-6  mb-10">
          {/* Avatar */}
          <div className="w-[96px] h-[96px] rounded-[24px] overflow-hidden relative shrink-0">
            <Image 
              src="/images/avatars/profile_details_user.png" 
              alt="PurePearl Studio" 
              fill 
              className="object-cover" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h1 className="text-heading-s text-neutral-50">PurePearl Studio</h1>
              <span className="bg-lime-400 text-neutral-950 px-4 py-1.5 rounded-[100px] text-label-m font-medium">
                Creator
              </span>
            </div>
            <p className="text-body-l text-neutral-50">
              Passionate UI/UX, Web designer
            </p>
          </div>
        </div>

        {/* Description Row */}
        <div className="max-w-[1000px] mb-12">
          <p className="text-body-l text-neutral-50 leading-[1.8] mb-4">
            Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
          </p>
          <p className="text-body-m text-neutral-50 leading-[1.8]">
            ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
          </p>
        </div>

        {/* Footer Metrics & Follow Button */}
        <div className="flex items-center justify-between w-full mt-4">
          <div className="flex items-center gap-4">
            {/* Products Pill */}
            <div className="bg-white rounded-[100px] px-6 py-3 flex items-center gap-2 shadow-sm">
              <span className="text-label-l font-bold text-[#003be2]">3</span>
              <span className="text-label-m font-medium text-neutral-950">Products</span>
            </div>
            {/* Followers Pill */}
            <div className="bg-white rounded-[100px] px-6 py-3 flex items-center gap-2 shadow-sm">
              <span className="text-label-l font-bold text-[#003be2]">12</span>
              <span className="text-label-m font-medium text-neutral-950">Followers</span>
            </div>
          </div>

          <button className="bg-lime-400 text-neutral-950 px-6 py-3 rounded-[100px] text-label-l font-bold hover:bg-lime-500 transition-colors">
            Follow
          </button>
        </div>

      </div>
    </div>
  );
}
