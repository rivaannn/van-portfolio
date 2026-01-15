// Motion Configuration
// Centralized animation variants and easing curves for Framer Motion
// Used throughout the application for consistent animations
import type { Variants } from "framer-motion";

// Standard easing curve used across all animations
// Provides a smooth, natural feel
export const EASE_CURVE: [number, number, number, number] = [
  0.25, 0.1, 0.25, 1,
];

// Container variant for staggered children animations
// Provides a smooth, natural feel
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Fade up animation - elements slide up while fading in
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_CURVE },
  },
};

// Simple fade animation
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_CURVE },
  },
};

// Overlay panel animation variants
export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_CURVE },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: EASE_CURVE },
  },
};

// Content animation variants for overlay items
export const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

// Individual overlay item animation
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_CURVE },
  },
};
