import React, { useState, useEffect } from "react";
import RatingStars from "../components/Utils/RatingStars.js";
import parseIngredients from "../components/Utils/IngredientParser.js";

const RecipePage = ({
  name,
  image,
  ingredients,
  ingredientDetails,
  directions,
  nutrition,
}) => {
  const [ingredientsParsed, setIngredientsParsed] = useState([]);
  useEffect(() => {
    if (ingredientDetails && ingredientsParsed.length === 0)
      setIngredientsParsed(parseIngredients(ingredientDetails));
  }, [ingredientDetails, ingredientsParsed.length]);
  // useEffect(()=>{console.log("parsed ingredients: ", ingredientsParsed);}, [ingredientDetails, ingredientsParsed]);

  // useEffect(()=>{console.log("raw ingredients: ", ingredients)}, [ingredients]);

  const toggleButton = (index, isVisible) => {
    // const button = document.getElementById(`addToListButton-${index}`);
    const button = document.querySelectorAll(".add-to-shopping-list button")[
      index
    ];
    button.style.visibility = isVisible ? "visible" : "hidden";
  };

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
      <div className="row mb-3">
        <RatingStars rating={5} />
      </div>

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
                {/* {ingredient}
                <button
                  style={{
                    visibility: "hidden",
                    height: "1.5rem",
                    pointerEvents: "none",
                  }}
                ></button> */}
                <div className="row justify-content-between">
                  <div className="col">{ingredient}</div>
                  <button
                    className="btn btn-secondary text-light col-1 add-to-shopping-list"
                    style={{
                      display: "inline-block",
                      height: "1.5rem",
                      paddingTop: "0",
                      paddingBottom: "0",
                      visibility: "hidden",
                    }}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Add to Shopping List Buttons */}
        {/* <div
          className="col-1 md-0 gx-5"
          style={{ paddingLeft: "0rem", paddingRight: "2.5rem" }}
        >
          <button
            className="btn btn-primary"
            style={{
              paddingTop: "0",
              paddingBottom: "0",
            }}
          >
            <h4>+</h4>
          </button>
          <ul className="list-group list-group-flush">
            {ingredientDetails.map((ingredient, index) => (
              <li
                className="list-group-item position-relative d-flex justify-content-between bg-secondary"
                key={index}
              >
                <button
                  id={`addToListButton-${index}`}
                  key={index}
                  type="button"
                  className="btn btn-primary list-group-item d-flex"
                  style={{
                    display: "inline-block",
                    height: "1.5rem",
                    paddingTop: "0",
                    paddingBottom: "0",
                  }}
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        </div> */}
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
    </div>
  );
};

export default RecipePage;
