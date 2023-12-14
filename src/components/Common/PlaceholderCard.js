// This is a sample feature section card. Do not modify this rather create a copy

function PlaceholderCard() {
    return (
        <div className="card" aria-hidden="true">
            <img src="./images/grayImg.png" className="card-img-top" alt="..." style={{ maxHeight: '100px', objectFit: 'cover' }}/>
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>  
                </h5>
                <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
        </div>
    )
}

export default PlaceholderCard;