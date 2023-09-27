function PlaceholderCard() {
    return (
        <div class="card" aria-hidden="true">
            <img src="grayImg.png" class="card-img-top" alt="..." style={{ maxHeight: '100px', objectFit: 'cover' }}/>
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
        </div>
    )
}

export default PlaceholderCard;