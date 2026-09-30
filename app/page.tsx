import HomeHero from "./_components/home-hero";
import TrustedBy from "./_components/trusted-by";
import LearningPaths from "./_components/learning-paths";
import HomeCourses from "./_components/home-courses";

export default function Page() {
  return (
    <main className="w-full">
      <HomeHero />
      <TrustedBy />
      <HomeCourses />
      <LearningPaths />
    </main>
  );
}
