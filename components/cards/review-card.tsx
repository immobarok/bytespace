import Image from "next/image";

interface ReviewCardProps {
  name: string;
  role: string;
  time: string;
  avatar: string;
  rating: number;
  text: string;
}

export default function ReviewCard({ name, role, time, avatar, rating, text }: ReviewCardProps) {
  return (
    <div className="border border-neutral-200 rounded-[24px] p-6 sm:p-10 flex flex-col gap-4 shadow-sm">
      {/* Review Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="w-[48px] h-[48px] rounded-full bg-neutral-200 overflow-hidden shrink-0 relative">
            <Image src={avatar} alt={name} fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-label-l text-neutral-950 font-bold">{name}</span>
            <span className="text-label-m text-neutral-500">{role}</span>
          </div>
        </div>
        <span className="text-label-m text-neutral-500">{time}</span>
      </div>

      {/* Review Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Image
            key={i}
            src="/images/icons/star_review.svg"
            alt="star"
            width={16}
            height={16}
            className={i < rating ? "" : "opacity-30"}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-body-m text-neutral-600 leading-[1.6]">{text}</p>
    </div>
  );
}
