import InputIngredient from "../../widgets/SearchByIngredient";
import FeaturedSection from "../../widgets/FeaturedSection";

function Home() {
    return (
        <div className="container-lg ">
            <div className="row">
            <InputIngredient/>

            </div>
            <div className="row">
                <FeaturedSection/>        
            </div>
                      
        </div>
  );
}

export default Home;
