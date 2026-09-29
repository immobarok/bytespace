import Image from "next/image";
import ReviewCard from "@/components/cards/review-card";
import CourseReviewFilters from "./course-review-filters";

const REVIEWS = [
  {
    id: 1,
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/images/avatars/review_avatar1.png",
    rating: 5,
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/images/avatars/review_avatar2.png",
    rating: 5,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/images/avatars/review_avatar3.png",
    rating: 5,
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/images/avatars/review_avatar4.png",
    rating: 5,
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

const RATING_STATS = [
  { stars: 5, count: 720, percentage: 80 },
  { stars: 4, count: 120, percentage: 15 },
  { stars: 3, count: 21, percentage: 5 },
  { stars: 2, count: 12, percentage: 2 },
  { stars: 1, count: 16, percentage: 3 },
];

export default function CourseReviews() {
  return (
    <div className="flex flex-col gap-10 pb-20 pt-8">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <h2 className="text-heading-xs text-neutral-950">What Learners Are Saying</h2>
        <p className="text-body-m text-neutral-700">
          Discover what our learners have to say about their experience with &apos;Build Digital Assets:
          A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on
          the transformative journey of mastering digital asset creation.
        </p>
      </div>

      {/* Ratings Summary Card */}
      <div className="border border-neutral-200 rounded-[20px] p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
        {/* Big Rating Block */}
        <div className="w-[140px] h-[140px] bg-lime-400 rounded-[16px] flex flex-col items-center justify-center shrink-0">
          <span className="text-label-m text-neutral-950 font-medium mb-1">Ratings</span>
          <span className="text-[48px] leading-none font-bold text-neutral-950">4.7</span>
        </div>

        {/* Rating Bars */}
        <div className="flex-1 w-full flex flex-col gap-3">
          {RATING_STATS.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 w-full">
              {/* Progress Bar */}
              <div className="flex-1 h-[8px] bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-lime-400 rounded-full"
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
              
              {/* Stars */}
              <div className="flex items-center gap-1 shrink-0">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <Image
                    key={starIdx}
                    src="/images/icons/star_review.svg"
                    alt="star"
                    width={16}
                    height={16}
                    className="opacity-70"
                  />
                ))}
              </div>
              
              {/* Count */}
              <span className="text-label-m text-neutral-500 w-[30px] text-right shrink-0">
                {stat.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col gap-6">
        <h3 className="text-heading-xs text-neutral-950 font-bold">Individual Reviews:</h3>
        
        {/* Filters */}
        <CourseReviewFilters />

        {/* Reviews List */}
        <div className="flex flex-col gap-4">
          {REVIEWS.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              role={review.role}
              time={review.time}
              avatar={review.avatar}
              rating={review.rating}
              text={review.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
