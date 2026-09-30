import HomeHero from "./_components/home-hero";
import TrustedBy from "./_components/trusted-by";
import LearningPaths from "./_components/learning-paths";
import HomeCourses from "./_components/home-courses";
import FeaturesSection from "./_components/features-section";
import CtaSection from "./_components/cta-section";

export default function Page() {
  return (
    <main className="w-full">
      <HomeHero />
      <TrustedBy />
      <HomeCourses />
      <LearningPaths />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}
