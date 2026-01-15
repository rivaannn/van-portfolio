// EducationOverlay Component
// Displays educational background and certifications.
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { OverlayPanel, itemVariants } from "./OverlayPanel";
import { educationData } from "@/config";

interface EducationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const EducationOverlay = ({ isOpen, onClose }: EducationOverlayProps) => {
  const { t } = useTranslation();

  return (
    <OverlayPanel isOpen={isOpen} onClose={onClose} title="Foundations">
      <div className="max-w-3xl">
        {/* Introduction */}
        <motion.p
          className="text-body text-(--color-muted) mb-16"
          variants={itemVariants}
        >
          {t("editorial.foundations_intro")}
        </motion.p>

        {/* Education List */}
        <div className="space-y-12">
          {educationData.map((education) => (
            <motion.article
              key={education.id}
              className="grid grid-cols-12 gap-4"
              variants={itemVariants}
            >
              {/* Education Type */}
              <div className="col-span-12 md:col-span-3">
                <span className="text-caption text-(--color-subtle)">
                  {education.type === "formal" ? "Academic" : "Program"}
                </span>
              </div>

              {/* Content */}
              <div className="col-span-12 md:col-span-9">
                <h2 className="text-title font-semibold mb-1">
                  {t(education.institution)}
                </h2>
                <p className="text-body text-(--color-muted) mb-1">
                  {t(education.degree)}
                </p>
                <p className="text-caption text-(--color-subtle) mb-2">
                  {t(education.period)}
                </p>
                {education.gpa && (
                  <p className="text-label text-(--color-muted)">
                    {t(education.gpa)}
                  </p>
                )}
                {education.description && (
                  <p className="text-caption text-(--color-subtle) mt-2">
                    {t(education.description)}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </OverlayPanel>
  );
};

export default EducationOverlay;
