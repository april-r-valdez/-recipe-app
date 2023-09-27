import Navbar from "./Navbar";
import InputIngredient from "./InputIngredient";
import FeaturedSection from "./FeaturedSection";

function Home() {
    return (
        <div class="container-xl">
            <div class="row">
                <Navbar/>
            </div>
            <div class="row">
                <div class="col-6 col-lg-1">
                    
                </div>
                <div class="col-sm-6 col-lg-8">
                    <FeaturedSection/>   
                </div>
                <div class="col-6 col-lg-3">
                    <InputIngredient/>
                </div>

            </div>
            
        </div>
    )
}

export default Home;