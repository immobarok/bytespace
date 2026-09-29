import Image from "next/image";
import CourseSidebar from "./course-sidebar";

export default function CourseDetailsHero() {
  return (
    <div className="w-full relative min-h-screen">
      <div 
        className="absolute top-0 left-0 w-full h-[957px] bg-electric-violet-600 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.1) 2px, transparent 2px)`,
          backgroundSize: `120px 120px`,
          backgroundPosition: 'center top'
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-0 pt-[160px] w-full">
        {/* Top Header Row */}
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-heading-s text-neutral-50 max-w-[800px]">
            Build Digital Asset: A Comprehensive Guide
          </h1>
          <button className="h-10 px-5 bg-lime-500 hover:bg-lime-400 transition-colors rounded-[100px] flex items-center gap-2 text-body-s text-neutral-950 font-medium shrink-0">
            <Image src="/images/icons/share.svg" alt="Share" width={16} height={16} /> Share
          </button>
        </div>

        <p className="text-heading-xs text-neutral-50 mb-2">
          Unlock the Power of Digital Creation with Expert Guidance
        </p>
        <p className="text-label-l text-neutral-200 mb-8">
          by <span className="text-lime-400">purepearl studio</span>
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-10">
          <div className="px-[24px] py-[8px] bg-white rounded-[100px] flex items-center gap-2">
            <Image src="/images/icons/chart_blue.svg" alt="Level" width={16} height={16} />
            <span className="text-label-m text-neutral-950">Intermediate</span>
          </div>
          <div className="px-[24px] py-[8px] bg-white rounded-[100px] flex items-center gap-2">
            <Image src="/images/icons/starblue.svg" alt="Rating" width={16} height={16} />
            <span className="text-label-m text-neutral-950">4.8 (172 reviews)</span>
          </div>
          <div className="px-[24px] py-[8px] bg-white rounded-[100px] flex items-center gap-2">
            <Image src="/images/icons/users.svg" alt="Students" width={16} height={16} />
            <span className="text-label-m text-neutral-950">199 Students</span>
          </div>
        </div>

        {/* Layout for Video and Right Card */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-[65%] flex flex-col gap-10">
            {/* Video Thumbnail */}
            <div className="relative w-full aspect-[720/479] lg:w-[720px] lg:h-[479px] lg:aspect-auto rounded-[24px] overflow-hidden bg-neutral-200 shadow-[0px_10px_40px_rgba(0,0,0,0.1)]">
              <Image 
                src="/images/products/course_thumb.png"
                alt="Course Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-[104px] h-[104px] rounded-[24px] bg-[#3D3D3D]/10  backdrop-blur-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Image src="/images/icons/play_button.svg" alt="Play" width={64} height={64} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[35%]">
             <CourseSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
