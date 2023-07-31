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
      // const perPage = currentPage === 1 ? 15 : 5;
      // const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${perPage}`);
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

  // increaseRenderedRecipes: () => {
  //   set((state) => ({ renderedRecipes: state.renderedRecipes + 5 }));
  // },

  // increaseRenderedRecipes: () => {
  //   set((state) => {
  //     // Удаляем первые 5 рецептов из массива
  //     const newRecipes = state.recipes.slice(5);
  //     // Добавляем следующие 5 рецептов из загруженных в конец массива
  //     const newLoadedRecipes = state.recipes.slice(0, 5);
  //     return {
  //       recipes: [...newRecipes, ...newLoadedRecipes],
  //       // renderedRecipes: state.renderedRecipes + 5,
  //     };
  //   });
  // },

  increaseRenderedRecipes: () => {
    set((state) => {
      const newRecipes = state.recipes.slice(5);
      return {
        recipes: newRecipes,
      };
    });
  },

}))



// import { create } from 'zustand';

// export const useRecipeStore = create((set, get) => ({
//   recipes: [],
//   selectedRecipes: new Set(),
//   currentPage: 1,
//   hasFetchedRecipes: false,
//   renderedRecipes: 15,

//   // fetchRecipes: async (currentPage, perPage) => {
//     fetchRecipes: async () => {
//     try {
//       const currentPage = get().currentPage;
//       // const perPage = currentPage === 1 ? 15 : 5;
//       // const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${perPage}`);
//       const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}`);
//       const data = await response.json();
      
//       set((state) => ({
//         recipes: [...state.recipes, ...data],
//         hasFetchedRecipes: true,
//       }));
//       set((state) => ({ currentPage: state.currentPage + 1 }));
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//     }
//   },

//   increaseRenderedRecipes: () => {
//     set((state) => ({ renderedRecipes: state.renderedRecipes + 5 }));
//   }
// }))