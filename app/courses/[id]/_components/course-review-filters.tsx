"use client";
import Image from "next/image";
import { useQueryModal } from "@/hooks/useQueryModal";
import { useSearchParams } from "next/navigation";

export default function CourseReviewFilters() {
  const searchParams = useSearchParams();
  const currentRating = searchParams.get("rating") || "all";
  const { open } = useQueryModal("rating", "all");

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <button
        onClick={() => open("all")}
        className={`px-4 py-3 rounded-[100px] text-label-m font-medium transition-colors ${
          currentRating === "all" ? "bg-lime-400 text-neutral-950" : "bg-neutral-50 hover:bg-neutral-100 text-neutral-600"
        }`}
      >
        All rating
      </button>
      {[5, 4, 3, 2, 1].map((star) => (
        <button
          key={star}
          onClick={() => open(star.toString())}
          className={`px-4 py-3 rounded-[100px] text-label-m font-medium transition-colors flex items-center gap-2 ${
            currentRating === star.toString() ? "bg-lime-400 text-neutral-950" : "bg-neutral-50 hover:bg-neutral-100 text-neutral-600"
          }`}
        >
          <Image src="/images/icons/star_review.svg" alt="star" width={14} height={14} />
          {star}
        </button>
      ))}
    </div>
  );
}
