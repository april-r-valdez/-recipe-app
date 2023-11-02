import Navbar from "../../widgets/Navbar";
import InputIngredient from "../../widgets/SearchByIngredient";
import FeaturedSection from "../../widgets/FeaturedSection";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-xl">
      <div className="row">
        <Navbar />
      </div>
      <br></br>
      <div className="row"></div>
      <div className="row">
        <div className="col-6 col-lg-1">
          {/* This is an empty row to be used */}
        </div>
        <div className="col-sm-6 col-lg-8">
          <FeaturedSection />
        </div>
        <div className="col-6 col-lg-3">
          <br></br>
          <div className="row">
            <InputIngredient />
          </div>
          <div className="row">
            <ul class="list-group">
              <li class="list-group-item">
                <Link to="/createrecipe">Create Recipe</Link>
              </li>
              <li class="list-group-item">
                <Link to="/instock">In Stock</Link>
              </li>
              <li class="list-group-item">
                <Link to="/inputportal">Input Ingredients Portal</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
