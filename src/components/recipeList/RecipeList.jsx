import './RecipeList.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import { useRecipeStore } from "../../store/store";
import DeleteButton from '../deleteButton/DeleteButton';
import RecipeListPage from '../../pages/recipeListPage/RecipeListPage';


const RecipeList = () => {
  const navigate = useNavigate();

  const { recipes, hasFetchedRecipes, fetchRecipes, increaseRenderedRecipes, renderedRecipes, selectedRecipes, isLastPage } = useRecipeStore((state) => ({
    recipes: state.recipes,
    loadedRecipes: state.loadedRecipes,
    hasFetchedRecipes: state.hasFetchedRecipes,
    fetchRecipes: state.fetchRecipes,
    currentPage: state.currentPage,
    increaseRenderedRecipes: state.increaseRenderedRecipes,
    renderedRecipes: state.renderedRecipes,
    removeTopRecipes: state.removeTopRecipes,
    selectedRecipes: state.selectedRecipes,
    isLastPage: state.isLastPage
  }));

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight) {
      if (renderedRecipes >= recipes.length) {
        fetchRecipes();
      } else if (renderedRecipes < recipes.length) {
        increaseRenderedRecipes()
      }
    }
  };

  useEffect(() => {
    if (!hasFetchedRecipes) {
      fetchRecipes();
    }
  }, []);

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleDeleteClick = () => {
    const filteredRecipes = recipes.filter((recipe) => !selectedRecipes.has(recipe.id));
    useRecipeStore.setState({
      recipes: filteredRecipes,
      selectedRecipes: new Set(),
    });
  }

  const handleContextMenu = (e, recipe) => {
    e.preventDefault();

    if (isLastPage) {
      return;
    }

    const newSelectedRecipes = new Set(selectedRecipes);
    if (newSelectedRecipes.has(recipe.id)) {
      newSelectedRecipes.delete(recipe.id);
    } else {
      newSelectedRecipes.add(recipe.id);
    }
    useRecipeStore.setState({ selectedRecipes: newSelectedRecipes });
  };

  return (
    <>
      <ul className='recipeList' onScroll={handleScroll}>
        {recipes.slice(0, renderedRecipes).map((recipe) => (
          <li
            key={recipe.id}
            name={recipe.name}
            className={`recipeItem ${selectedRecipes.has(recipe.id) ? "selected" : ""}`}
            onClick={() => handleRecipeClick(recipe.id)}
            onContextMenu={(e) => handleContextMenu(e, recipe)}
          >
            <RecipeListPage
              id={recipe.id}
              name={recipe.name}
              foundation={recipe.first_brewed}
              tagline={recipe.tagline}
              abv={recipe.abv}
              ibu={recipe.ibu}
              fg={recipe.target_fg}
              og={recipe.target_og}
              ebc={recipe.ebc}
              srm={recipe.srm}
              ph={recipe.ph}
              attenuation_level={recipe.attenuation_level}
              volume={recipe.volume}
              boil_volume={recipe.boil_volume}
              method={recipe.method}
              image={recipe.image_url}
              description={recipe.description}
            />
          </li>
        ))}
      </ul >
      {/*Созд портал компонент DeleteButton для логики по отображению кнопки*/}
      <DeleteButton
        showBtn={selectedRecipes.size > 0}
        onClick={handleDeleteClick}
      />
    </>
  );
};

export default RecipeList;

