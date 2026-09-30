import { Suspense } from "react";
import CourseCard from "@/components/cards/course-card";
import CourseFilters from "./_components/course-filters";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseHero from "./_components/course-hero";

const MOCK_COURSES = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: i % 2 === 0 ? "Learn Figma from Basic" : "Balancing Productivity and...",
  author: "purepearl studio",
  rating: 4.5,
  price: 25,
  image: `/images/products/${(i % 6) + 1}.png`,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  studentCount: 26,
  avatars: [
    "/images/avatars/Ellipse.png",
    "/images/avatars/Ellipse (1).png",
    "/images/avatars/Ellipse (2).png",
    "/images/avatars/Ellipse (3).png"
  ]
}));

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <CourseHero />

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto w-full px-4">
          
          <Suspense fallback={<div className="h-[96px] w-full" />}>
            <CourseFilters />
          </Suspense>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-10">
            {MOCK_COURSES.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                author={course.author}
                rating={course.rating}
                price={course.price}
                image={course.image}
                lessons={course.lessons}
                duration={course.duration}
                comments={course.comments}
                level={course.level}
                studentCount={course.studentCount}
                avatars={course.avatars}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-20">
            <button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((page) => (
                <button 
                  key={page}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                    page === 1 
                      ? "text-neutral-950 font-bold" 
                      : "text-neutral-500 hover:bg-neutral-50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
        </div>
      </section>
    </main>
  );
}
