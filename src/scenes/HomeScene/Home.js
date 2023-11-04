import Navbar from "../../widgets/Navbar";
import InputIngredient from "../../widgets/SearchByIngredient";
import FeaturedSection from "../../widgets/FeaturedSection";
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="container-lg ">
            <div className="row mb-3">
                <Navbar/>
            </div>
            <div className="row">
            <   InputIngredient/>

            </div>
            <div className="row">
                <FeaturedSection/>        
            </div>
                      
        </div>
    )
}

export default Home;