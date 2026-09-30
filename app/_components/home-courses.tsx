import CourseCard from "@/components/cards/course-card";
import Link from "next/link";
import MOCK_COURSES from "@/data/mock-courses.json";

const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", 
  "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", 
  "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity", 
  "Web Development", "Data Science", "Cooking"
];

export default function HomeCourses() {
  return (
    <section className="w-full bg-white py-24 flex flex-col items-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center px-4 xl:px-0">
        
        {/* Header Area */}
        <div className="text-center max-w-[917px] mb-12">
          <h2 className="text-heading-m text-neutral-950 font-bold mb-4 leading-tight">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="text-body-l text-neutral-400">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Categories / Pills */}
        <div className="flex flex-wrap justify-center gap-[21px] mb-16 max-w-[1186px]">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-3 rounded-full text-label-m font-medium transition-colors ${
                category === "Featured" 
                ? "bg-lime-400 text-neutral-950" 
                : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              {category}
            </button>
          ))}
          <button className="px-4 py-3 text-label-m font-medium text-electric-violet-600 hover:text-electric-violet-800 transition-colors">
            + More
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {MOCK_COURSES.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

      </div>
    </section>
  );
}
