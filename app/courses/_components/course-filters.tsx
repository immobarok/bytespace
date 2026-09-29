"use client";
import Image from "next/image";
import { useQueryModal } from "@/hooks/useQueryModal";
import { useSearchParams } from "next/navigation";

const CATEGORIES = [
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking"
];

export default function CourseFilters() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "Featured";
  const { open: setCategory } = useQueryModal("category");

  return (
    <div className="flex flex-col gap-6 w-full py-8 border-b border-neutral-200">
      {/* Top row: Dropdowns */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <button className="h-[44px] px-4 py-3 bg-white border border-neutral-200 rounded-[100px] flex items-center gap-2 hover:bg-neutral-50 transition-colors text-body-s text-neutral-950 font-medium">
            <Image src="/images/icons/filter.svg" alt="Filter" width={16} height={16} /> Filter
          </button>
          
          <button className="h-[44px] px-4 py-3 bg-white border border-neutral-200 rounded-[100px] flex items-center gap-2 hover:bg-neutral-50 transition-colors text-body-s text-neutral-950 font-medium">
            <Image src="/images/icons/chart_cat.svg" alt="Level" width={16} height={16} /> Level
          </button>
          
          <button className="h-[44px] px-4 py-3 bg-white border border-neutral-200 rounded-[100px] flex items-center gap-2 hover:bg-neutral-50 transition-colors text-body-s text-neutral-950 font-medium">
            <Image src="/images/icons/category.svg" alt="Category" width={16} height={16} /> Category
          </button>
        </div>
        
        <button className="h-[44px] px-4 py-3 bg-white border border-neutral-200 rounded-[100px] flex items-center gap-2 hover:bg-neutral-50 transition-colors text-body-s text-neutral-950 font-medium">
          <Image src="/images/icons/relevant.svg" alt="Most Relevant" width={16} height={16} /> Most Relevant
        </button>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto py-2 scrollbar-hide">
        <button 
          onClick={() => setCategory("Featured")}
          className={`h-[40px] px-4 py-3 rounded-[24px] flex items-center justify-center text-body-s text-neutral-950 font-medium whitespace-nowrap shrink-0 transition-transform hover:scale-105 ${currentCategory === "Featured" ? "bg-lime-500" : "bg-neutral-50"}`}
        >
          Featured
        </button>
        {CATEGORIES.map((category) => (
          <button 
            key={category}
            onClick={() => setCategory(category)}
            className={`h-[40px] px-4 py-3 rounded-[24px] flex items-center justify-center text-body-s text-neutral-950 font-medium whitespace-nowrap shrink-0 transition-transform hover:scale-105 ${currentCategory === category ? "bg-lime-500" : "bg-neutral-50"}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
