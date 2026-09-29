import { Search, ChevronDown } from "lucide-react";

export default function CourseHero() {
  return (
    <section
      className="w-full h-[360px] bg-electric-violet-600 pt-[120px] px-4 flex flex-col justify-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.1) 2px, transparent 2px)`,
        backgroundSize: `120px 120px`,
        backgroundPosition: 'center top'
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <h1 className="text-heading-m md:text-heading-s text-neutral-50 mb-8">
          Find Your Next Course
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-[600px]">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[52px] rounded-[100px] bg-white pl-12 pr-6 outline-none text-neutral-400 placeholder:text-neutral-400 placeholder:text-body-s"
            />
          </div>
          <button className="h-[52px] px-6 bg-lime-500 hover:bg-lime-400 transition-colors rounded-[100px] flex items-center justify-center gap-2 text-neutral-950 font-medium whitespace-nowrap shrink-0 w-full sm:w-auto">
            Courses <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
