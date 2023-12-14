import React, { useState, useEffect } from "react";
import RatingStars from '../components/Utils/RatingStars.js';
import { Modal } from 'react-bootstrap'
import DynamicRating from './DynamicRating.js';
import { useAuth } from '../firebase.js';
import { IoMdBookmark } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import parseIngredients from "../components/Utils/IngredientParser.js";
import AddToShoppingListButton from "../components/ShoppingList/AddToShoppingListButton.js";
import { auth } from "../firebase.js";

const RecipePage = ( {name, image, ingredients, ingredientDetails, directions, nutrition, rating, ratingCount, author, onSubmitRating, onAddToFavoriteList} ) => {

  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showSavedModal, setShowSavedModal] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const curUser = useAuth();

  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  }
  
  const handleModalClose = () => {
    setShowRatingModal(false);
    setShowSavedModal(false);
  }

  const handleRateButtonClick = () => {
    if (!curUser) {
      console.log("redirect to log in page");
      navigate('/login-page');
      
    } else {
      setShowRatingModal(true);
    }
  }

  const handleFavoriteClick = () => {
    if (!curUser) {
      console.log("redirect to log in page");
      navigate('/login-page');
    } else {
      onAddToFavoriteList(isFavorite);
      setIsFavorite(!isFavorite);
      setShowSavedModal(true);
    }
  }

  const handleSubmitRating = async () => {
    onSubmitRating(currentRating);
    setShowRatingModal(false);
  }

  // for toggling the add to shopping list button next to each ingredient element
  const toggleAddToShoppingListButton = (index, isVisible) => {
    const button = document.querySelectorAll(".list-group-item button")[index];
    button.style.visibility = isVisible ? "visible" : "hidden";
  };

  const [userID, setUserID] = useState(null);
  useState(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) setUserID(user.uid);
    });
  }, []);

  return (
    <div
      className="container-md mt-3 mb-3"
      style={{ maxWidth: "1000px", textAlign: "left" }}
    >
      {/* Recipe Title */}
      <div className="row mt-3">
        <h2>
          <strong>{name}</strong>
        </h2>
      </div>

      {/* Rating */}
      <div className='row'>
        <div className='col-auto'>
          <RatingStars rating={rating} />
        </div>
        <div className='col-auto' style={{paddingLeft: "0"}}>
          <span>({ratingCount})</span>
        </div>
      </div>
      
      {/* Rating and save buttons */}
      <div className='row mt-2'>
        <div className='col-auto'>
          <button type='button' className='btn btn-link' style={{paddingLeft: "0", paddingRight: "0", color:"black", fontSize:"18px"}} onClick={handleRateButtonClick}>Rate this recipe</button>
        </div>
        <div className='col-auto' onClick={handleFavoriteClick} style={{fontSize: "28px", cursor:"pointer"}}>
          {isFavorite ? <IoMdBookmark color='#BD9371'/> : <IoBookmarkOutline />}
        </div>
      </div>
        
      {/* Created by */}
      {
        author !== "" ? (
          <div className='row mt-2 mb-2'>
            <i>Recipe by {author}</i>
          </div>
        ) : (null)
      }

      {/* Recipe Image & Ingredients */}
      <div className="row mt-1 mb-5">
        <div className="col">
          <div className="row mt-3 mb-3">
            <img
              src={image}
              className="img-fluid"
              alt={name}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col gx-3">
          <h4>
            <strong>Ingredients</strong>
          </h4>
          <ul className="list-group list-group-flush">
            {ingredientDetails.map((ingredient, index) => (
              <li className="list-group-item" key={index}>
                <div
                  className="row justify-content-between"
                  onMouseOver={() => toggleAddToShoppingListButton(index, true)}
                  onMouseLeave={() =>
                    toggleAddToShoppingListButton(index, false)
                  }
                >
                  <div className="col">{ingredient}</div>
                  {/* <button
                    className="btn btn-secondary text-light col-1"
                    style={{
                      display: "inline-block",
                      height: "1.5rem",
                      paddingTop: "0",
                      paddingBottom: "0",
                      visibility: "hidden",
                    }}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Add to Shopping List"
                  >
                    +
                  </button> */}
                  <AddToShoppingListButton
                    newIngredient={ingredients[index]}
                    btnText="+"
                    btnStyle={{
                      display: "inline-block",
                      height: "1.5rem",
                      paddingTop: "0",
                      paddingBottom: "0",
                      visibility: "hidden",
                    }}
                    btnClassnames="btn btn-secondary text-light col-1"
                    userID={userID}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Directions */}
      <div className="row mt-4 mb-3">
        <h4>
          <strong>Directions</strong>
        </h4>
        <ul className="list-group list-group-flush">
          {directions.map((direction, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-start"
              key={index}
            >
              <div>
                <strong>Step {index + 1}</strong>
                <br /> {direction}
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

      {/* Save Successfully Modal */}
      <Modal show={showSavedModal} onHide={handleModalClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
            {isFavorite ? <p>Recipe has been added to your list</p> : <p>Recipe has been removed from your list</p>}
        </Modal.Body>
        <Modal.Footer style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
            <button 
              type='button' 
              className='btn btn-success' 
              onClick={handleModalClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RecipePage;
