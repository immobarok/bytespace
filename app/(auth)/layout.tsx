import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/cards/course-card";
import AuthText from "./_components/auth-text";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const avatars = [
    "/images/avatars/Ellipse.png",
    "/images/avatars/Ellipse (1).png",
    "/images/avatars/Ellipse (2).png",
    "/images/avatars/Ellipse (3).png",
  ];

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-screen z-[100] overflow-y-auto bg-[#003be2] shadow-2xl">
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
        >
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

      <div className="relative z-10 max-w-[1200px] mx-auto min-h-screen flex flex-col px-4 lg:px-0">
        
        <div className="w-full h-[120px] flex items-center">
          <Link href="/" className="flex items-center gap-[8px]">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Image src="/images/logo/logo.svg" alt="ByteSpace Logo" fill className="object-contain" />
            </div>
          </Link>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row pb-10">
          
          <div className="w-full lg:w-1/2 flex flex-col mb-16 lg:mb-0 pt-4">
          <AuthText />

          <div className="relative w-full flex-1 min-h-[500px] mt-10">
            <div className="absolute top-[90px] left-[0px] origin-top-left">
              <CourseCard
                id={2}
                title="Build Digital Asset"
                author="purepearl studio"
                rating={4.5}
                price={25}
                image="/images/products/2.png"
                lessons={17}
                duration="2 hours 16 mins"
                comments={59}
                level="Beginner"
                studentCount={26}
                avatars={avatars}
                darkStudentBadge={true}
                isStatic={true}
              />
            </div>

            {/* Foreground Card */}
            <div className="absolute top-[-10px] left-[120px] origin-top-left">
              <CourseCard
                id={3}
                title="the Power of Big Data"
                author="purepearl studio"
                rating={4.5}
                price={25}
                image="/images/products/3.png"
                lessons={17}
                duration="2 hours 16 mins"
                comments={59}
                level="Beginner"
                studentCount={26}
                avatars={avatars}
                darkStudentBadge={true}
                isStatic={true}
              />
            </div>

            {/* Happy Students Small Card */}
            <div className="absolute top-[420px] left-[240px] bg-lime-400 rounded-3xl p-5 w-[260px] shadow-lg">
              <h4 className="text-label-l font-bold text-neutral-950 mb-1">Happy Students</h4>
              <p className="text-label-s font-bold text-neutral-950 mb-3">
                4.5 <span className="text-neutral-700 font-medium">(240)</span> <span className="text-electric-violet-600">★</span>
              </p>
              <div className="flex -space-x-2">
                {avatars.map((avatar, idx) => (
                  <div key={idx} className="w-8 h-8 rounded-full border-2 border-lime-400 overflow-hidden relative z-0">
                    <Image src={avatar} alt={`avatar-${idx}`} fill className="object-cover" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-lime-400 bg-neutral-900 flex items-center justify-center relative z-10 text-[10px] text-white font-bold">
                  2K+
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[20px] w-[146px] h-[146px] drop-shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <Image src="/images/shape/circle.svg" alt="circle shape" fill className="object-contain" />
            </div>
            <div className="absolute top-[400px] left-[0px] w-[188px] h-[188px] drop-shadow-xl z-20">
              <Image src="/images/shape/triangle.svg" alt="triangle shape" fill className="object-contain" />
            </div>
            <div className="absolute top-[300px] left-[390px] w-[175px] h-[175px] drop-shadow-xl z-20">
              <Image src="/images/shape/spring_latest.svg" alt="spring shape" fill className="object-contain" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          {children}
        </div>
        </div>
      </div>
    </div>
  );
}
