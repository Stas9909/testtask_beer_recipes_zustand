import { useParams } from "react-router-dom";
import React from 'react';
import './RecipePage.css';
import { useRecipeStore } from "../../store/store";

const RecipePage = () => {
  const params = useParams();
  const recipes = useRecipeStore((state) => state.recipes);

  const recipe = recipes.find(recipe => recipe.id === +(params.id))

  return (
    <>
      <div className="postPagePar">
        {recipe ? (
          <>
            <div className="divForBeerImage">
              <img className="beerImage" src={recipe.image_url} alt={recipe.name} />
            </div>
            <h1 className="specFont">{recipe.name}</h1>
            <h2>{recipe.ingredients.yeast}</h2>
            <h3>Ingredients:</h3>
            <ul className="ulForMalt ul">
              {recipe.ingredients.malt.map((malt, index) => (
                <li key={index}>
                  {malt.amount.value} {malt.amount.unit} - {malt.name}
                </li>
              ))}
            </ul>
            <h3>Hops:</h3>
            <ul className="ulForHops ul">
              {recipe.ingredients.hops.map((hop, index) => (
                <li key={index}>
                  {hop.amount.value} {hop.amount.unit} - {hop.name} ({hop.add}, {hop.attribute})
                </li>
              ))}
            </ul>
            <h3>Food Pairing:</h3>
            <ul className="ulForFoodPairing ul">
              {recipe.food_pairing.map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ul>
            <h3>Brewers Tips:</h3>
            <p>{recipe.brewers_tips}</p>
            <p>Contributed by: {recipe.contributed_by}</p>
          </>
        ) : (
          <p>Recipe not found</p>
        )}
      </div>
    </>
  )
}

export default RecipePage;
