import CourseDetailsHero from "./_components/course-details-hero";
import CourseTabs from "./_components/course-tabs";
import CourseAbout from "./_components/course-about";

export default function CourseDetailsPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { tab?: string };
}) {
  const tab = searchParams.tab || "about";

  return (
    <div className="min-h-screen bg-white">
      <CourseDetailsHero>
        <div className="pt-[160px] flex flex-col gap-2">
          <CourseTabs />
          {tab === "about" && <CourseAbout />}
          {tab === "lessons" && (
            <div className="py-20 text-center text-body-m text-neutral-500">
              Lessons content coming soon...
            </div>
          )}
          {tab === "reviews" && (
            <div className="py-20 text-center text-body-m text-neutral-500">
              Reviews content coming soon...
            </div>
          )}
        </div>
      </CourseDetailsHero>
    </div>
  );
}
