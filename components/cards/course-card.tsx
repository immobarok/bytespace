import Image from "next/image";
import Link from "next/link";
import { CourseCardProps } from "@/types";

export default function CourseCard({
  id,
  title,
  author,
  rating,
  price,
  image,
  lessons,
  duration,
  comments,
  level,
  studentCount,
  avatars,
}: CourseCardProps) {
  return (
    <Link 
      href={`/courses/${id || 1}`}
      className="w-[373px] h-[384px] p-4 rounded-[24px] border border-neutral-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative w-full h-[190px] rounded-[16px] overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1 overflow-hidden">
          <div className="bg-white/80 backdrop-blur-sm rounded-[24px] px-[12px] py-[6px] text-label-xs text-neutral-700 whitespace-nowrap">
            {lessons} Lessons
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-[24px] px-[12px] py-[6px] text-label-xs text-neutral-700 whitespace-nowrap">
            {duration}
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-[24px] px-[12px] py-[6px] text-label-xs text-neutral-700 whitespace-nowrap">
            {comments} Comments
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-4 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col">
            <h3 className="text-heading-xs text-neutral-950 font-semibold line-clamp-1">{title}</h3>
            <p className="text-body-xs text-neutral-500 mt-1">
              by <span className="text-electric-violet-800">{author}</span>
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0 mt-1">
            <span className="text-body-l text-neutral-700 leading-none">{rating.toFixed(1)}</span>
            <Image src="/images/icons/star.svg" alt="star" width={20} height={20} className="object-contain" />
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-2 bg-neutral-50 rounded-[100px] px-3 py-2">
            <Image src="/images/icons/chart.svg" alt="level" width={16} height={16} className="object-contain" />
            <span className="text-label-xs text-neutral-600">{level}</span>
          </div>

          <div className="flex items-center -space-x-2">
            {avatars.slice(0, 4).map((avatar, idx) => (
              <div key={idx} className="w-[32px] h-[32px] rounded-full border-[2px] border-white overflow-hidden relative z-0">
                <Image src={avatar} alt={`avatar-${idx}`} fill className="object-cover" />
              </div>
            ))}
            <div className="w-[32px] h-[32px] rounded-full border-[2px] border-white bg-lime-500 flex items-center justify-center relative z-10 text-label-xs text-neutral-950">
              {studentCount}+
            </div>
          </div>
        </div>

        <div className="flex items-baseline gap-1 mt-auto">
          <span className="text-heading-xs text-primary font-bold">${price}</span>
          <span className="text-body-xs text-neutral-500">/lifetime</span>
        </div>
      </div>
    </Link>
  );
}
