// ExperienceOverlay Component
// Displays professional experience and career journey in a timeline format.
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { OverlayPanel, itemVariants } from "./OverlayPanel";
import { experienceData } from "@/config";

interface ExperienceOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExperienceOverlay = ({ isOpen, onClose }: ExperienceOverlayProps) => {
  const { t } = useTranslation();

  return (
    <OverlayPanel isOpen={isOpen} onClose={onClose} title="Journey">
      <div className="max-w-3xl">
        {/* Introduction */}
        <motion.p
          className="text-body text-(--color-muted) mb-16"
          variants={itemVariants}
        >
          {t("editorial.journey_intro")}
        </motion.p>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experienceData.map((experience) => (
            <motion.article
              key={experience.id}
              className="grid grid-cols-12 gap-4"
              variants={itemVariants}
            >
              {/* Period */}
              <div className="col-span-12 md:col-span-3">
                <span className="text-caption text-(--color-subtle)">
                  {experience.period}
                </span>
              </div>

              {/* Content */}
              <div className="col-span-12 md:col-span-9">
                <h2 className="text-title font-semibold mb-1">
                  {t(experience.role)}
                </h2>
                <p className="text-label text-(--color-muted) mb-3">
                  {t(experience.company)}
                </p>
                <p className="text-body text-(--color-muted)">
                  {t(experience.desc)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </OverlayPanel>
  );
};

export default ExperienceOverlay;
