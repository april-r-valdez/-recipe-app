import PlaceholderCard from "./PlaceholderCard";


function FeaturedSection() {
    return (
        <div class="container-fluid">
            <h5>Featured Reciepe</h5>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col"><PlaceholderCard/></div>
            <div class="col"><PlaceholderCard/></div>
            <div class="col"><PlaceholderCard/></div>
            <div class="col"><PlaceholderCard/></div>
            <div class="col"><PlaceholderCard/></div>
            <div class="col"><PlaceholderCard/></div>
            <div class="col"><PlaceholderCard/></div>
            <div class="col"><PlaceholderCard/></div>
            <div class="col"><PlaceholderCard/></div>
            </div>
        </div>
    )
}

export default FeaturedSection;