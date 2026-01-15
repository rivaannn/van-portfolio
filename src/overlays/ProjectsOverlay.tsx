// ProjectsOverlay Component
// Displays a detailed list of portfolio projects with descriptions and links.
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Github } from "lucide-react";
import { OverlayPanel, itemVariants } from "./OverlayPanel";
import { projectsData } from "@/config";

interface ProjectsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectsOverlay = ({ isOpen, onClose }: ProjectsOverlayProps) => {
  const { t } = useTranslation();

  return (
    <OverlayPanel isOpen={isOpen} onClose={onClose} title="Projects">
      <div className="max-w-3xl">
        {/* Introduction */}
        <motion.p
          className="text-body text-(--color-muted) mb-16"
          variants={itemVariants}
        >
          {t("editorial.projects_intro")}
        </motion.p>

        {/* Projects List */}
        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              className="grid grid-cols-12 gap-4"
              variants={itemVariants}
            >
              {/* Project Number */}
              <div className="col-span-2 md:col-span-1">
                <span className="text-label text-(--color-subtle)">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Project Content */}
              <div className="col-span-10 md:col-span-11">
                <h2 className="text-title font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="text-body text-(--color-muted) mb-4">
                  {t(project.desc)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-caption text-(--color-subtle)"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-caption text-(--color-fg) hover:text-(--color-muted) transition-colors"
                    >
                      <span>View</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-caption text-(--color-muted) hover:text-(--color-fg) transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </OverlayPanel>
  );
};

export default ProjectsOverlay;
