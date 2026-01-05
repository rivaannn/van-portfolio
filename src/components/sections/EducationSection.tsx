import { memo } from "react";
import { useTranslation } from "react-i18next";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/index";
import { educationData } from "@/data/index";
import { ParallaxSection, Container, SectionHeader } from "@/components/ui";

const EducationSection = memo(() => {
  const { t } = useTranslation();

  const containerRef = useScrollAnimation(
    {
      ".edu-title": { y: 40, duration: 800 },
      ".edu-subtitle": { y: 30, delay: 100, duration: 800 },
      ".edu-card": { y: 40, stagger: 150, startDelay: 250, duration: 800 },
    },
    { threshold: 0.1 }
  );

  return (
    <ParallaxSection
      id="education"
      className="py-20 md:py-32 bg-(--color-bg-secondary)"
      floatingIcons={[
        <GraduationCap size={80} key="graduation" />,
        <Award size={70} key="award" />,
      ]}
      orbColors={[
        "from-emerald-500/10 to-teal-500/10",
        "from-blue-500/10 to-indigo-500/10",
      ]}
    >
      <Container ref={containerRef}>
        <SectionHeader
          title={t("education.title")}
          subtitle={t("education.subtitle")}
          titleClassName="edu-title opacity-0"
          subtitleClassName="edu-subtitle opacity-0"
        />

        <div className="max-w-4xl mx-auto grid gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="edu-card opacity-0 p-6 rounded-2xl bg-(--color-surface) border-2 border-(--color-border) shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-(--color-accent) transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-(--color-accent)/10 text-(--color-accent)">
                    {edu.type === "formal" ? (
                      <GraduationCap size={24} />
                    ) : (
                      <Award size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-(--color-text-primary) mb-1 group-hover:text-(--color-accent) transition-colors">
                      {t(edu.institution)}
                    </h3>
                    <p className="text-(--color-text-secondary) font-medium mb-1">
                      {t(edu.degree)}
                    </p>
                    {edu.gpa && (
                      <p className="text-sm text-(--color-accent) font-medium">
                        {t(edu.gpa)}
                      </p>
                    )}
                    {edu.description && (
                      <p className="text-sm text-(--color-text-secondary) mt-2">
                        {t(edu.description)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full border bg-(--color-surface) border-(--color-border) text-(--color-text-secondary) whitespace-nowrap">
                  <Calendar size={12} />
                  <span>{t(edu.period)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </ParallaxSection>
  );
});

EducationSection.displayName = "EducationSection";

export default EducationSection;
