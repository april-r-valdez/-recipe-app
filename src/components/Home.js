import Navbar from "./Navbar";
import InputIngredient from "./InputIngredient"

function Home() {
    return (
        <div class="container-xl">
            <div class="row">
                <Navbar/>
            </div>
            <div class="row">
                <div class="col-6 col-lg-2">
                    
                </div>
                <div class="col-sm-6 col-lg-8">
                    <InputIngredient/>
                </div>
                <div class="col-6 col-lg-2">
                    
                </div>

            </div>
        </div>
    )
}

export default Home;