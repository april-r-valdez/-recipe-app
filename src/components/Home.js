import Navbar from "./Navbar";
import InputIngredient from "./InputIngredient";
import FeaturedSection from "./FeaturedSection";

function Home() {
    return (
        <div className="container-xl">
            <div className="row">
                <Navbar/>
            </div>
            <div className="row">
                <div className="col-6 col-lg-1">

                </div>
                <div className="col-sm-6 col-lg-8">
                    <FeaturedSection/>   
                </div>
                <div className="col-6 col-lg-3">
                    <InputIngredient/>
                </div>

            </div>
            
        </div>
    )
}

export default Home;