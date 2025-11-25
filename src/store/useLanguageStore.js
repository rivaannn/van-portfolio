import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Language Store
 * Manages language state (en/id) with persistence
 */
const useLanguageStore = create(
  persist(
    (set, get) => ({
      // State
      language: 'id', // Default to Indonesian

      // Actions
      setLanguage: (language) => set({ language }),

      toggleLanguage: () => {
        const newLang = get().language === 'en' ? 'id' : 'en';
        set({ language: newLang });
      },
    }),
    {
      name: 'language-storage',
      partialize: (state) => ({
        language: state.language,
      }),
    }
  )
);

export default useLanguageStore;
