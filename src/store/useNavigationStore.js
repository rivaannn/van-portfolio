import { create } from "zustand";

export const useNavigationStore = create((set) => ({
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
}));
