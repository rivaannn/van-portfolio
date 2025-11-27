import * as TechIcons from "@/assets/LogoTech";
import { TechIcon } from "@/components/ui";

// Helper function untuk create icon element
const createIcon = (iconSrc, altText, className = "w-10 h-10") => (
  <TechIcon src={iconSrc} alt={altText} className={className} />
);

export const skillCategories = {
  frontend: {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: createIcon(TechIcons.HtmlIcon, "HTML") },
      { name: "CSS", icon: createIcon(TechIcons.CssIcon, "CSS") },
      {
        name: "JavaScript",
        icon: createIcon(TechIcons.JavascriptIcon, "JavaScript"),
      },
      {
        name: "Typescript",
        icon: createIcon(TechIcons.TypescriptIcon, "Typescript"),
      },
      { name: "React", icon: createIcon(TechIcons.ReactIcon, "React") },
      { name: "Next.js", icon: createIcon(TechIcons.NextIcon, "Next.js") },
      {
        name: "Tailwind",
        icon: createIcon(TechIcons.TailwindIcon, "Tailwind"),
      },
      {
        name: "Bootstrap",
        icon: createIcon(
          TechIcons.BootstrapIcon,
          "Bootstrap",
          "w-10 h-10 object-contain"
        ),
      },
    ],
  },
  backend: {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: createIcon(TechIcons.NodeIcon, "Node.js") },
      { name: "PHP", icon: createIcon(TechIcons.PhpIcon, "PHP") },
      { name: "Laravel", icon: createIcon(TechIcons.LaravelIcon, "Laravel") },
    ],
  },
  tools: {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: createIcon(TechIcons.GitIcon, "Git") },
      { name: "GCP", icon: createIcon(TechIcons.GcpIcon, "GCP") },
      { name: "Figma", icon: createIcon(TechIcons.FigmaIcon, "Figma") },
      {
        name: "Balsamiq",
        icon: createIcon(TechIcons.BalsamiqIcon, "Balsamiq"),
      },
    ],
  },
};
