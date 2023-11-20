import React, { useState } from 'react'
import RatingStars from '../components/Utils/RatingStars.js';
import { Modal } from 'react-bootstrap'
import DynamicRating from './DynamicRating.js';

const RecipePage = ( {name, image, ingredients, directions, nutrition, rating} ) => {

  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  }
  
  const handleModalClose = () => {
    setShowRatingModal(false);
  }

  const handleRateButtonClick = () => {
    setShowRatingModal(true);
  }

  return (
    <div className='container-md mt-3 mb-3' style={{maxWidth:"1000px", textAlign: "left"}}>
      {/* Recipe Title */}
      <div className='row mt-3'>
        <h2><strong>{name}</strong></h2>
      </div>

      {/* Rating */}
      <div className='row mb-3'>
        <div className='col-2'>
          <RatingStars rating={rating} />
        </div>
        <div className='col-2'>
          <button type='button' className='btn btn-link' onClick={handleRateButtonClick}>Rate this recipe</button>
        </div>
      </div>

      {/* Recipe Image & Ingredients */}
      <div className='row mt-1 mb-5 gx-5'>
        <div className='col'>
          <div className='row mt-3 mb-3'>
            <img src={image} className='img-fluid' alt={name} style={{objectFit:"cover"}}/>
          </div>
        </div>
        <div className='col'>
          <h4><strong>Ingredients</strong></h4>
          <ul className="list-group list-group-flush">
            {ingredients.map((ingredient, index) => (
              <li className='list-group-item' key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Directions */}
      <div className='row mt-4 mb-3'>
        <h4><strong>Directions</strong></h4>
        <ul className="list-group list-group-flush">
          {directions.map((direction, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-start" key={index}>
              <div>
                <strong>Step {index+1}</strong><br/> {direction}
              </div>
            </li>
          ))}
          </ul>
      </div>

      {/* Nutrition? */}

      {/* Rating Modal */}  
      <Modal show={showRatingModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
            <Modal.Title>Rate this recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <DynamicRating rating={currentRating} onRatingChange={handleRatingChange}/>
        </Modal.Body>
        <Modal.Footer>
            <button type='button' className='btn btn-primary'>Submit</button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default RecipePage;
