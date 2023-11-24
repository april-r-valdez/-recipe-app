import React, { useState } from 'react'
import RatingStars from '../components/Utils/RatingStars.js';
import { Modal } from 'react-bootstrap'
import DynamicRating from './DynamicRating.js';
import { useAuth } from '../firebase.js';


const RecipePage = ( {name, image, ingredients, directions, nutrition, rating, ratingCount, author, onSubmitRating} ) => {

  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);

  const curUser = useAuth();

  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  }
  
  const handleModalClose = () => {
    setShowRatingModal(false);
  }

  const handleRateButtonClick = () => {
    setShowRatingModal(true);
  }

  const handleSubmitRating = async () => {
    onSubmitRating(currentRating);
    setShowRatingModal(false);
  }

  return (
    <div className='container-md mt-3 mb-3' style={{maxWidth:"1000px", textAlign: "left"}}>
      {/* Recipe Title */}
      <div className='row mt-3'>
        <h2><strong>{name}</strong></h2>
      </div>

      {/* Rating */}
      <div className='row'>
        <div className='col-auto'>
          <RatingStars rating={rating} />
        </div>
        <div className='col-auto'>
          <span>({ratingCount})</span>
        </div>
      </div>
      {
        curUser ? (
          <div className='row'>
            <button type='button' className='btn btn-link' style={{textAlign:"left", color:"black"}} onClick={handleRateButtonClick}>Rate this recipe</button>
          </div>
        ) : (null)
      }

      {/* Created by */}
      {
        author !== "" ? (
          <div className='row mt-2 mb-2'>
            <i>Recipe by {author}</i>
          </div>
        ) : (null)
      }

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
            <Modal.Title>
              Your Rating
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
            <DynamicRating rating={currentRating} onRatingChange={handleRatingChange}/>
        </Modal.Body>
        <Modal.Footer style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
            <button 
              type='button' 
              className='btn btn-success' 
              onClick={handleSubmitRating}>Submit</button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default RecipePage;
