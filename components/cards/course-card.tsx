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
  darkStudentBadge = false,
  isStatic = false,
}: CourseCardProps) {
  const cardContent = (
    <>
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
            {isStatic ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.43 9.61158L12.96 4.77158C12.67 3.82158 11.33 3.82158 11.05 4.77158L9.56996 9.61158H5.11996C4.14996 9.61158 3.74996 10.8616 4.53996 11.4216L8.17996 14.0216L6.74996 18.6316C6.45996 19.5616 7.53996 20.3116 8.30996 19.7216L12 16.9216L15.69 19.7316C16.46 20.3216 17.54 19.5716 17.25 18.6416L15.82 14.0316L19.46 11.4316C20.25 10.8616 19.85 9.62158 18.88 9.62158H14.43V9.61158Z" fill="#D4FB20"/>
              </svg>
            ) : (
              <Image src="/images/icons/star.svg" alt="star" width={20} height={20} className="object-contain" />
            )}
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
            <div className={`w-[32px] h-[32px] rounded-full border-[2px] border-white flex items-center justify-center relative z-10 text-label-xs ${darkStudentBadge ? "bg-neutral-950 text-white" : "bg-lime-500 text-neutral-950"}`}>
              {studentCount}+
            </div>
          </div>
        </div>

        <div className="flex items-baseline gap-1 mt-auto">
          <span className="text-heading-xs text-primary font-bold">${price}</span>
          <span className="text-body-xs text-neutral-500">/lifetime</span>
        </div>
      </div>
    </>
  );

  const baseClasses = "w-full max-w-[373px] mx-auto h-[384px] p-4 rounded-[24px] border border-neutral-200 bg-white flex flex-col group";
  const linkClasses = "hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer";

  if (isStatic) {
    return (
      <div className={baseClasses}>
        {cardContent}
      </div>
    );
  }

  return (
    <Link href={`/courses/${id || 1}`} className={`${baseClasses} ${linkClasses}`}>
      {cardContent}
    </Link>
  );
}
