"use client";

import { useQueryModal } from "@/hooks/useQueryModal";
import { useSearchParams } from "next/navigation";

export default function CourseTabs() {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "about";
  const { open } = useQueryModal("tab", "about");

  return (
    <div className="flex items-center gap-3">
      <button 
        onClick={() => open("about")}
        className={`px-4 py-3 rounded-[24px] text-label-m  shrink-0 transition-colors ${currentTab === 'about' ? 'bg-lime-400 text-neutral-950' : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600'}`}
      >
        About
      </button>
      <button 
        onClick={() => open("lessons")}
        className={`px-4 py-3 rounded-[24px] text-label-m  shrink-0 transition-colors ${currentTab === 'lessons' ? 'bg-lime-400 text-neutral-950' : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600'}`}
      >
        Lessons
      </button>
      <button 
        onClick={() => open("reviews")}
        className={`px-4 py-3 rounded-[24px] text-label-m  shrink-0 transition-colors ${currentTab === 'reviews' ? 'bg-lime-400 text-neutral-950' : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600'}`}
      >
        Reviews
      </button>
    </div>
  );
}
