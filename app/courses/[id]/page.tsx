import CourseDetailsHero from "./_components/course-details-hero";
import CourseTabs from "./_components/course-tabs";
import CourseAbout from "./_components/course-about";
import CourseLessons from "./_components/course-lessons";
import CourseReviews from "./_components/course-reviews";

export default async function CourseDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const tab = resolvedSearchParams.tab || "about";

  return (
    <div className="min-h-screen bg-white">
      <CourseDetailsHero>
        <div className="pt-[160px] flex flex-col gap-2">
          <CourseTabs />
          {tab === "about" && <CourseAbout />}
          {tab === "lessons" && <CourseLessons />}
          {tab === "reviews" && <CourseReviews />}
        </div>
      </CourseDetailsHero>
    </div>
  );
}
