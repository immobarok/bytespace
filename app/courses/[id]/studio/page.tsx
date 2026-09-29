import StudioHero from "./_components/studio-hero";
import StudioCourses from "./_components/studio-courses";

export default async function StudioProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const courseId = resolvedParams.id;

  return (
    <div className="min-h-screen bg-white pb-20">
      <StudioHero courseId={courseId} />
      <StudioCourses />
    </div>
  );
}
