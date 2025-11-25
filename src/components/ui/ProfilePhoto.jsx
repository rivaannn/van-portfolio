import { motion as Motion } from "motion/react";
import PropTypes from "prop-types";

/**
 * ProfilePhoto Component
 * Clean profile photo with breathing animation
 */
const ProfilePhoto = ({ src, alt, className = "" }) => {
  return (
    <div className={`relative aspect-3/4 max-w-sm mx-auto ${className}`}>
      {/* Simple up and down animation */}
      <Motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full h-full"
      >
        {/* Photo container with gradient border */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-linear-to-br from-(--color-accent) via-(--color-text-primary) to-(--color-accent) p-0.5">
          <div className="w-full h-full rounded-3xl overflow-hidden bg-(--color-bg-primary)">
            <img
              src={src}
              alt={alt}
              width="400"
              height="533"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-(--color-accent) rounded-3xl blur-2xl opacity-20 -z-10" />
      </Motion.div>
    </div>
  );
};

ProfilePhoto.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProfilePhoto;
