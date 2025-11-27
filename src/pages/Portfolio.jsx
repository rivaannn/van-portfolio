import { lazy, Suspense, useState } from "react";
import { SEO, PageLoader, SectionSkeleton } from "@/components";
import MainLayout from "@/layouts/MainLayout";

// Lazy load sections
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const AboutHero = lazy(() => import("@/components/sections/AboutHero"));
const SkillSection = lazy(() => import("@/components/sections/SkillSection"));
const ExperienceSection = lazy(() =>
  import("@/components/sections/ExperienceSection")
);
const EducationSection = lazy(() =>
  import("@/components/sections/EducationSection")
);
const ProjectsSection = lazy(() =>
  import("@/components/sections/ProjectsSection")
);
const ContactSection = lazy(() =>
  import("@/components/sections/ContactSection")
);

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <PageLoader onLoadComplete={handleLoadComplete} />}
      <MainLayout>
        <SEO />
        <div className="relative w-full overflow-hidden">
          {/* Hero */}
          <Suspense fallback={<SectionSkeleton />}>
            <HeroSection />
          </Suspense>

          {/* About */}
          <Suspense fallback={<SectionSkeleton />}>
            <AboutHero />
          </Suspense>

          {/* Skills */}
          <Suspense fallback={<SectionSkeleton />}>
            <SkillSection />
          </Suspense>

          {/* Experience */}
          <Suspense fallback={<SectionSkeleton />}>
            <ExperienceSection />
          </Suspense>

          {/* Education */}
          <Suspense fallback={<SectionSkeleton />}>
            <EducationSection />
          </Suspense>

          {/* Projects */}
          <Suspense fallback={<SectionSkeleton />}>
            <ProjectsSection />
          </Suspense>

          {/* Contact */}
          <Suspense fallback={<SectionSkeleton />}>
            <ContactSection />
          </Suspense>
        </div>
      </MainLayout>
    </>
  );
};

export default Portfolio;
