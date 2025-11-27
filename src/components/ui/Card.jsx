import * as React from "react";
import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/utils";

/**
 * Card Component Variants
 */

const cardVariants = cva(
  "rounded-xl border bg-card text-card-foreground transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900",
        elevated:
          "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900",
        gradient:
          "border-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20",
        glass:
          "border-neutral-200/50 dark:border-neutral-700/50 bg-white/80 dark:bg-neutral-900/80",
        project:
          "border-2 border-(--color-border) bg-(--color-surface) shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-(--color-accent) rounded-2xl transition-all duration-300",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-1",
        glow: "",
        scale: "hover:scale-[1.02]",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      hover: "none",
    },
  }
);

const Card = React.forwardRef(
  ({ className, variant, padding, hover, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, hover }), className)}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neutral-600 dark:text-neutral-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

/**
 * ProjectCard Component
 */
const ProjectCard = React.memo(({ project, index, t, className, ...props }) => {
  return (
    <div
      className={cn("group relative opacity-0 animate-fade-in", className)}
      style={{ animationDelay: `${index * 0.1}s` }}
      {...props}
    >
      <Card variant="project" padding="none">
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-(--color-bg-tertiary)">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-200 bg-(--color-accent) text-(--color-bg-primary) hover:scale-110 active:scale-95"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full transition-all duration-200 bg-(--color-accent) text-(--color-bg-primary) hover:scale-110 active:scale-95"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors text-(--color-text-primary)">
            {project.title}
          </h3>

          <p className="mb-4 leading-relaxed text-(--color-text-secondary) overflow-hidden text-ellipsis line-clamp-3">
            {t(project.desc)}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-default bg-(--color-overlay) text-(--color-text-secondary) hover:bg-(--color-overlay-hover) hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
};

// PropTypes for base components
Card.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "elevated",
    "gradient",
    "glass",
    "project",
  ]),
  padding: PropTypes.oneOf(["none", "sm", "md", "lg"]),
  hover: PropTypes.oneOf(["none", "lift", "glow", "scale"]),
  children: PropTypes.node,
};

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  ProjectCard,
};
