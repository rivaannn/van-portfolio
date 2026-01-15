// OverlayPanel Component
// A reusable full-screen overlay container used for Projects, Experience, and Education sections.
// Manages the animation, layout, and close behavior for all overlay content.
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { type ReactNode } from "react";
import {
  overlayVariants,
  contentVariants,
  itemVariants,
} from "@/config/motion";

interface OverlayPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const OverlayPanel = ({
  isOpen,
  onClose,
  title,
  children,
}: OverlayPanelProps) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto bg-(--color-bg)"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="min-h-full w-full px-6 py-16 md:px-12 md:py-20 lg:px-20">
            {/* Close Button */}
            <motion.button
              className="fixed top-6 right-6 md:top-10 md:right-12 p-2 text-(--color-muted) hover:text-(--color-fg) transition-colors cursor-pointer z-60"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close overlay"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </motion.button>

            {/* Header */}
            <motion.header
              className="mb-12 md:mb-20"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-headline font-bold tracking-tight"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
            </motion.header>

            {/* Content */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {children}
            </motion.div>

            {/* Back Button */}
            <motion.div
              className="mt-16 md:mt-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={onClose}
                className="text-caption text-(--color-subtle) hover:text-(--color-fg) transition-colors cursor-pointer"
              >
                ← {t("editorial.return")}
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Re-export itemVariants for use in overlay content components
export { itemVariants } from "@/config/motion";
