import { Link } from "react-router-dom";

function PlaceholderCard({recipe}) {
    return (
        <div className="card" aria-hidden="true">
            <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} className="card-img-top" alt="..." style={{ maxHeight: '100px', objectFit: 'cover' }}/>
                <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                </div>
            </Link>
        </div>
    )
}

export default PlaceholderCard;