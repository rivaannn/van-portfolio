import { motion as Motion } from "motion/react";
import PropTypes from "prop-types";

/**
 * SectionBackground Component
 * Reusable animated background decorations for sections
 * Reduces code duplication by centralizing background animations
 *
 * @param {Object} props
 * @param {React.ReactNode} props.floatingIcon1 - First floating icon element
 * @param {React.ReactNode} props.floatingIcon2 - Second floating icon element
 * @param {string} props.orb1Color - Gradient colors for first orb (e.g., "from-blue-500/20 to-purple-500/20")
 * @param {string} props.orb2Color - Gradient colors for second orb
 * @param {boolean} props.showAccentLines - Whether to show decorative accent lines
 */
const SectionBackground = ({
  floatingIcon1,
  floatingIcon2,
  orb1Color = "from-blue-500/15 to-purple-500/15",
  orb2Color = "from-cyan-500/15 to-indigo-500/15",
  showAccentLines = true,
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Icons */}
      {floatingIcon1 && (
        <Motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-32 left-1/4 opacity-5"
        >
          {floatingIcon1}
        </Motion.div>
      )}

      {floatingIcon2 && (
        <Motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-40 right-1/3 opacity-5"
        >
          {floatingIcon2}
        </Motion.div>
      )}

      {/* Gradient Orbs */}
      <Motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute top-20 right-0 w-[400px] h-[400px] bg-linear-to-br ${orb1Color} rounded-full blur-3xl`}
      />

      <Motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className={`absolute bottom-20 left-0 w-[350px] h-[350px] bg-linear-to-tr ${orb2Color} rounded-full blur-3xl`}
      />

      {/* Accent Lines */}
      {showAccentLines && (
        <>
          <div className="absolute top-1/4 right-10 w-40 h-0.5 bg-linear-to-r from-transparent via-(--color-accent) to-transparent opacity-30" />
          <div className="absolute bottom-1/4 left-10 w-36 h-0.5 bg-linear-to-r from-transparent via-(--color-accent) to-transparent opacity-30" />
        </>
      )}
    </div>
  );
};

SectionBackground.propTypes = {
  floatingIcon1: PropTypes.node,
  floatingIcon2: PropTypes.node,
  orb1Color: PropTypes.string,
  orb2Color: PropTypes.string,
  showAccentLines: PropTypes.bool,
};

export default SectionBackground;
