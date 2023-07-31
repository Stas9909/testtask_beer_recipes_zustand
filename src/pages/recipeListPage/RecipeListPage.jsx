import React from 'react';
import './RecipeListPage.css';
// import { useRecipeStore } from '../../store/store';

const RecipeListPage = (props) => {
  // const recipeList = useRecipeStore((state) => state.recipes);
  const { name, tagline, image, description, foundation, abv, ibu, fg, og, ebc, srm, ph, attenuation_level, volume, boil_volume } = props;

  return (
    <>
      <div className="RecipeListPage flippable">
        <div className="name">name: <span className="boldText specFont">{name}</span></div>
        <div className="tagline">tagline: <span className="boldText">{tagline}</span></div>
        <div className="foundation">foundation: <span className="boldText">{foundation}</span></div>
        <div className="abv">abv: <span className="boldText">{abv}</span></div>
        <div className="ibu">ibu: <span className="boldText">{ibu}</span></div>
        <div className="fg">fg: <span className="boldText">{fg}</span></div>
        <div className="og">og: <span className="boldText">{og}</span></div>
        <div className="ebc">ebc: <span className="boldText">{ebc}</span></div>
        <div className="srm">srm: <span className="boldText">{srm}</span></div>
        <div className="ph">ph: <span className="boldText">{ph}</span></div>
        <div className="volume">volume: <span className="boldText">{volume.value} {volume.unit}</span></div>
        <div className="boil_volume">boil_volume: <span className="boldText">{boil_volume.value} {boil_volume.unit}</span></div>
        <div className="attenuation_level">attenuation_level: <span className="boldText">{attenuation_level}</span></div>
        <div className="divForBeersImage">
          <img className="beersImage" src={image} alt={name} />
        </div>
        <div className='description'>{description}</div>
      </div>
    </>
  )
}

export default RecipeListPage;