import CourseDetailsHero from "./_components/course-details-hero";

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <CourseDetailsHero />
    </div>
  );
}
