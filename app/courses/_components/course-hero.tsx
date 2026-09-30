import { Search, ChevronDown } from "lucide-react";

export default function CourseHero() {
  return (
    <section
      className="w-full h-[360px] bg-electric-violet-800 pt-[120px] px-4 flex flex-col justify-center relative overflow-hidden"
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 360"
      >
        {Array.from({ length: 13 }).map((_, i) => {
          const x = Math.round(((i + 1) / 14) * 1440);
          return <line key={`v-${i}`} x1={x} y1={0} x2={x} y2={360} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />;
        })}
        {Array.from({ length: 3 }).map((_, i) => {
          const y = Math.round(((i + 1) / 4) * 360);
          return <line key={`h-${i}`} x1={0} y1={y} x2={1440} y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />;
        })}
      </svg>
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center relative z-10 w-full">
        <h1 className="text-heading-s lg:text-heading-m text-neutral-50 mb-8 font-bold">
          Find Your Next Course
        </h1>

        <div className="flex flex-row items-center gap-2 sm:gap-3 w-full max-w-[600px]">
          <div className="relative flex-1 w-full min-w-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[52px] rounded-[100px] bg-white pl-10 sm:pl-12 pr-4 sm:pr-6 outline-none text-neutral-400 placeholder:text-neutral-400 placeholder:text-body-s min-w-0"
            />
          </div>
          <button className="h-[52px] px-4 sm:px-6 bg-lime-500 hover:bg-lime-400 transition-colors rounded-[100px] flex items-center justify-center gap-1 sm:gap-2 text-neutral-950 font-medium whitespace-nowrap shrink-0">
            Courses <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
