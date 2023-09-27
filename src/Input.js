import { useState } from "react";

const  Textbox = () => {
    const [ingredient, setIngredient] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const input = {ingredient};
        console.log(input);
    };

    return (  
        <div className="textbox">
            <p>Enter your ingredients here</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter ingredients'
                    onChange={(e) => setIngredient(e.target.value)}
                ></input>
                <div>
                    <button>Generate Recipes</button>
                </div>
                <p>{ingredient}</p>
            </form>
        </div>
    );
}
 
export default Textbox;