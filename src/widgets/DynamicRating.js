import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';

const ratingColors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

const DynamicRating = ( {rating, onRatingChange} ) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  const handleStarClick = (value) => {
    onRatingChange(value);
  }
  
  const handleStarHover = (value) => {
    setHoverRating(value);
  }

  const handleStarLeave = () => {
    setHoverRating(0);
  }

  return (
    <div>
      {
        [...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
                <span
                  key={index}
                  onClick={() => handleStarClick(starValue)}
                  onMouseEnter={() => handleStarHover(starValue)}
                  onMouseLeave={handleStarLeave}
                >
                  <FaStar 
                    color={(hoverRating || rating) >= starValue ? ratingColors.orange : ratingColors.grey}
                    size={30}
                  />
                </span>
            )
        })
      }
    </div>
  )
}

export default DynamicRating
