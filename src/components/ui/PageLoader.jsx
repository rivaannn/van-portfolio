import { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import PropTypes from "prop-types";
import vanLogo from "@/assets/van.svg";

/**
 * Full Page Loader Component
 * Simple and aesthetic loader with Van logo
 * "Muhamad Rivan Sahronie"
 */
const PageLoader = ({ onLoadComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3;
      });
    }, 30);

    // Start exit animation after loading completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        onLoadComplete?.();
      }, 500);
    }, 1800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onLoadComplete]);

  return (
    <Motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-(--color-background) ${
        !isAnimating ? "pointer-events-none" : ""
      }`}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Van Logo */}
        <div className="relative">
          {/* Ornamental Circle */}
          <Motion.div
            className="absolute inset-0 -m-12"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-40 h-40" viewBox="0 0 100 100" fill="none">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-(--color-accent) opacity-20"
                strokeDasharray="4 4"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-(--color-accent) opacity-30"
                strokeDasharray="2 2"
              />
            </svg>
          </Motion.div>

          {/* Main Logo */}
          <Motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
            className="relative flex items-center justify-center w-16 h-16"
          >
            <img
              src={vanLogo}
              alt="Van Logo"
              className="w-full h-full object-contain"
            />
          </Motion.div>
        </div>

        {/* Name */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col items-center gap-1"
        >
          <p className="text-sm font-medium text-(--color-text-primary) tracking-wider">
            MUHAMAD RIVAN SAHRONIE
          </p>
          <Motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-px w-24 bg-linear-to-r from-transparent via-(--color-accent) to-transparent opacity-50"
          />
        </Motion.div>

        {/* Progress Bar */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-64 h-0.5 bg-(--color-surface) rounded-full overflow-hidden"
        >
          <Motion.div
            className="h-full bg-(--color-accent)"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </Motion.div>
      </div>

      {/* Corner Ornaments */}
      {[
        { top: true, left: true },
        { top: true, right: true },
        { bottom: true, left: true },
        { bottom: true, right: true },
      ].map((pos, i) => (
        <Motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          className={`absolute w-12 h-12 border-(--color-accent)
            ${pos.top ? "top-8" : "bottom-8"}
            ${pos.left ? "left-8" : "right-8"}
            ${pos.top && pos.left ? "border-l-2 border-t-2" : ""}
            ${pos.top && pos.right ? "border-r-2 border-t-2" : ""}
            ${pos.bottom && pos.left ? "border-l-2 border-b-2" : ""}
            ${pos.bottom && pos.right ? "border-r-2 border-b-2" : ""}
          `}
        />
      ))}
    </Motion.div>
  );
};

PageLoader.propTypes = {
  onLoadComplete: PropTypes.func,
};

export default PageLoader;
