import Image from "next/image";
import CourseCard from "@/components/cards/course-card";
import MOCK_COURSES from "@/data/mock-courses.json";

export default function FeaturesSection() {
  const avatars = [
    "/images/avatars/Ellipse.png",
    "/images/avatars/Ellipse (1).png",
    "/images/avatars/Ellipse (2).png",
    "/images/avatars/Ellipse (3).png",
    "/images/avatars/review_avatar1.png",
    "/images/avatars/review_avatar2.png",
  ];

  return (
    <section className="relative w-full overflow-hidden pt-[72px] pb-[120px] bg-white">
      {/* Background Gradients */}
      <div
        className="absolute -top-1/5 left-0 -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none rounded-full"
        style={{ width: '1137px', height: '1137px', background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, transparent 100%)' }}
      />
      <div
        className="absolute -top-1/4 -right-1/2 -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none rounded-full"
        style={{ width: '1137px', height: '1137px', background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 62, 178, 0.15) 0%, transparent 100%)' }}
      />
      <div
        className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none rounded-full"
        style={{ width: '1137px', height: '1137px', background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 62, 178, 0.15) 0%, transparent 100%)' }}
      />
      <div
        className="absolute -bottom-60 -left-40 -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none rounded-full"
        style={{ width: '677px', height: '667px', background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, transparent 100%)' }}
      />
      <div
        className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-0 pointer-events-none rounded-full"
        style={{ width: '1137px', height: '1137px', background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 62, 178, 0.15) 0%, transparent 100%)' }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 flex flex-col">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="flex flex-col max-w-[500px]">
            <h2 className="text-heading-m text-neutral-950 font-bold leading-[1.2] mb-6">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="text-body-l text-neutral-700 mb-12 leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="flex items-center gap-12">
              <div className="flex flex-col">
                <span className="text-[36px] leading-[44px] font-bold text-electric-violet-800 mb-2">12K</span>
                <span className="text-body-m text-neutral-500">Students</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[36px] leading-[44px] font-bold text-electric-violet-800 mb-2">70+</span>
                <span className="text-body-m text-neutral-500">Courses</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[36px] leading-[44px] font-bold text-electric-violet-800 mb-2">16</span>
                <span className="text-body-m text-neutral-500">Creators</span>
              </div>
            </div>
          </div>

          {/* Right: Image Composition */}
          <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Background Course Card */}
            <div className="absolute top-[40px] left-[40px] w-[373px] h-[384px] z-0">
              <CourseCard {...MOCK_COURSES[0]} />
            </div>

            {/* Boy Image */}
            <div className="absolute bottom-15 z-10 w-[500px] h-[550px]">
              <Image src="/images/hero/Image.png" alt="Student" fill className="object-contain" />
            </div>

            {/* Zigzag Shape */}
            <div className="absolute top-[20px] right-[-80px] z-50 w-[215px] h-[215px]">
              <Image src="/images/shape/lime_spring.svg" alt="shape" fill className="object-contain" />
            </div>

            {/* Learning Progress Card */}
            <div className="absolute top-[160px] right-[-20px] bg-white rounded-[20px] shadow-xl z-30 p-5 w-[220px]">
              <p className="text-neutral-950 mb-1 text-[13px] font-medium">Learning Progress</p>
              <p className="font-bold text-neutral-950 mb-3 leading-none text-[40px]">55%</p>
              <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div className="w-[55%] h-full bg-lime-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>


        {/* ROW 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left: Image Composition */}
          <div className="relative w-full h-[600px] flex items-center justify-center order-2 lg:order-1">

            {/* Woman Image */}
            <div className="absolute bottom-0 z-10 w-[450px] h-[550px]">
              <Image src="/images/hero/women.png" alt="Student" fill className="object-contain object-bottom" />
            </div>

            {/* Zigzag Shape */}
            <div className="absolute top-[128px] right-[48px] z-50 w-[215px] h-[215px]">
              <Image src="/images/shape/lime_spring_left.svg" alt="shape" fill className="object-contain" />
            </div>

            {/* Blue Cards Container */}
            <div className="absolute top-[80px] left-[10px] z-0 flex flex-col gap-[31px]">
              {/* Blue Card 1 */}
              <div className="bg-[#003be2] rounded-[16px] shadow-lg p-5 w-[240px]">
                <p className="text-white text-[16px] font-medium mb-1">Total Revenue</p>
                <p className="text-white/60 text-[10px] mb-3">July 1-28</p>
                <p className="text-white text-[24px] leading-[32px] font-bold mb-3">$120.29</p>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-[60%] h-full bg-lime-400 rounded-full" />
                </div>
              </div>

              {/* Blue Card 2 */}
              <div className="bg-[#003be2] rounded-[16px] shadow-lg p-4 w-[135px] h-[135px] flex flex-col justify-between overflow-hidden">
                <div>
                  <p className="text-white text-[16px] mb-1">Year to Date</p>
                  <p className="text-white/60 text-[10px]">2023</p>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <p className="text-white text-[24px] leading-[32px] font-bold tracking-tighter whitespace-nowrap">$1,200.38</p>
                  <div className="inline-flex items-center justify-center bg-lime-400 text-neutral-900 rounded-full px-2 py-0.5 text-[11px] font-bold leading-none h-[20px]">
                    +12$
                  </div>
                </div>
              </div>
            </div>

            {/* Happy Students Card */}
            <div className="absolute bottom-[60px] right-[-10px] bg-white rounded-[16px] shadow-xl z-30 p-4 w-[240px]">
              <p className="font-bold text-neutral-950 mb-1 text-[14px]">Happy Students</p>
              <div className="flex items-center gap-1 mb-3">
                <span className="font-bold text-neutral-950 text-[12px]">4.5</span>
                <span className="text-neutral-500 text-[12px]">(240)</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#D4FB20"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" /></svg>
              </div>
              <div className="flex -space-x-2">
                {avatars.map((avatar, idx) => (
                  <div key={idx} className="w-[32px] h-[32px] rounded-full border-2 border-white overflow-hidden relative">
                    <Image src={avatar} alt="" fill className="object-cover" />
                  </div>
                ))}
                <div className="w-[32px] h-[32px] rounded-full border-2 border-white bg-lime-400 flex items-center justify-center text-[9px] font-bold text-neutral-950">
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col max-w-[480px] order-1 lg:order-2 lg:pl-12">
            <h2 className="text-heading-m text-neutral-950 font-bold leading-[1.2] mb-10">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="text-body-l text-neutral-500 mb-10 leading-relaxed">
              <span className="font-semibold text-neutral-900">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#003be2] flex items-center justify-center shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-label-l text-neutral-900 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
