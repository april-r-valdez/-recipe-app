import PlaceholderCard from "../components/Common/PlaceholderCard";


function FeaturedSection() {
    return (
        <div className="container-fluid">
            <h5>Featured Recipe</h5>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            </div>
        </div>
    )
}

export default FeaturedSection;