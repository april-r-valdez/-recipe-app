import Navbar from "../../widgets/Navbar";
import InputIngredient from "../../widgets/SearchByIngredient";
import FeaturedSection from "../../widgets/FeaturedSection";
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="container-lg ">
            <Navbar/>
            <InputIngredient/>
            <FeaturedSection/>            
        </div>
    )
}

export default Home;