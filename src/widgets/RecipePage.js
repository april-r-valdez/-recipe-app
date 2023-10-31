import React from 'react'
import NavBar from "./Navbar.js";
import RatingStars from '../components/Utils/RatingStars.js';

const RecipePage = ( {name, image, ingredients, directions, nutrition} ) => {
  return (
    <div className='container-md mt-3 mb-3' style={{maxWidth:"1000px", textAlign: "left"}}>
      <NavBar />
      <div className='row mt-3'>
        <h2>{name}</h2>
      </div>
      <div className='row mb-3'>
        <RatingStars rating={5} />
      </div>
      <div className='row mt-1 mb-5 gx-5'>
        <div className='col'>
          <img src={image} alt={name} />
        </div>
        <div className='col'>
          <h4>Ingredients</h4>
          <ul className="list-group list-group-flush">
            {ingredients.map((ingredient) => (
              <li className='list-group-item' key={ingredient.id}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='row mt-4 mb-3'>
        <h4>Directions</h4>
        <ul className="list-group list-group-flush">
          {directions.map((direction, index) => (
            <li className="list-group-item" key={direction.id}>
              <b>Step {index+1}:</b> {direction}
            </li>
          ))}
          </ul>
      </div>
    </div>
  );
}

export default RecipePage;
