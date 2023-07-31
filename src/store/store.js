import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  selectedRecipes: new Set(),
  currentPage: 1,
  hasFetchedRecipes: false,
  renderedRecipes: 15,
  isLastPage: false,

    fetchRecipes: async () => {
    try {
      const currentPage = get().currentPage;

      const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}`);
      const data = await response.json();
      
      set((state) => ({
        recipes: [...state.recipes, ...data],
        hasFetchedRecipes: true,
        isLastPage: (currentPage >= 13),
      }));
      set((state) => ({ currentPage: state.currentPage + 1 }));
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  },

  increaseRenderedRecipes: () => {
    set((state) => {
      const newRecipes = state.recipes.slice(5);
      return {
        recipes: newRecipes,
      };
    });
  },

}))