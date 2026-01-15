// Overlay Configuration
// Centralized definition of all overlay types and their navigation items

// Valid overlay type keys
export type OverlayType = "projects" | "experience" | "education" | null;

// Navigation items that open overlays
// Used in the main page navigation
export const overlayNavItems = [
  { label: "Projects", key: "projects" as const },
  { label: "Journey", key: "experience" as const },
  { label: "Foundations", key: "education" as const },
] as const;
