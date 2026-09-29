import Image from "next/image";
import CourseCard from "@/components/cards/course-card";

const MOCK_COURSES = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    image: "/images/products/1.png",
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
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    image: "/images/products/2.png",
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
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    image: "/images/products/3.png",
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
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    image: "/images/products/4.png",
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
  },
  {
    id: 5,
    title: "Mastering Money Manag...",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    image: "/images/products/5.png",
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
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    image: "/images/products/6.png",
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
  }
];

export default function StudioCourses() {
  return (
    <div className="max-w-[1200px] mx-auto w-full px-4 xl:px-0 py-20">
      
      {/* Top row: Dropdowns */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div className="flex flex-wrap items-center gap-3">
          <button className="h-[44px] px-5 py-3 bg-white border border-neutral-200 rounded-[100px] flex items-center gap-2 hover:bg-neutral-50 transition-colors text-body-s text-neutral-950 font-medium">
            <Image src="/images/icons/filter.svg" alt="Filter" width={16} height={16} /> Filter
          </button>
          
          <button className="h-[44px] px-5 py-3 bg-white border border-neutral-200 rounded-[100px] flex items-center gap-2 hover:bg-neutral-50 transition-colors text-body-s text-neutral-950 font-medium">
            <Image src="/images/icons/chart_cat.svg" alt="Level" width={16} height={16} /> Level
          </button>
          
          <button className="h-[44px] px-5 py-3 bg-white border border-neutral-200 rounded-[100px] flex items-center gap-2 hover:bg-neutral-50 transition-colors text-body-s text-neutral-950 font-medium">
            <Image src="/images/icons/category.svg" alt="Category" width={16} height={16} /> Category
          </button>
        </div>
        
        <button className="h-[44px] px-5 py-3 bg-white border border-neutral-200 rounded-[100px] flex items-center gap-2 hover:bg-neutral-50 transition-colors text-body-s text-neutral-950 font-medium">
          <Image src="/images/icons/relevant.svg" alt="Most Relevant" width={16} height={16} /> Most relevant
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {MOCK_COURSES.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
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
    </div>
  );
}
