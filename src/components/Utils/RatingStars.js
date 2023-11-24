import { FaStar } from "react-icons/fa";

const ratingColors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

const RatingStars = ({ rating }) => {
      return (
        <p className="card-text"> 
                {[...Array(rating)].map((_, index) => (
                    <FaStar key={index} color={ratingColors.orange}/>
                ))}
                {[...Array(5 - rating)].map((_, index) => (
                    <FaStar key={index} color={ratingColors.gery}/>
                ))}    
        </p>
      )
};

export default RatingStars;