import { useState, useEffect } from "react";

const  Textbox = () => {
    // useState hook updates the variables ingredient and listIngredients
    const [ingredient, setIngredient] = useState('');
    const [listIngredients, setIngredientsList] = useState([]);

    // handleSubmit function called when typing in input field
    const handleSubmit = (e) => {
        e.preventDefault();
        const newIngredient = {item:ingredient}
        setIngredientsList([...listIngredients, newIngredient])
    };

    // useEffect hook runs function with every render of component
    // [listIngredients] is a dependency added and will run function if it changes 
    useEffect(() => {
        console.log(listIngredients);
    }, [listIngredients]); 

    return (  
        <div className="textbox">
            <p>Enter your ingredients here</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter ingredients'
                    onChange={(e) => setIngredient(e.target.value)}
                ></input>
            </form>
            <button>Add Ingredients</button>
        </div>
    );
}
 
export default Textbox;