import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; // generates unique id for map() function

const  Textbox = () => {
    // useState hook updates the variables ingredient and listIngredients
    const [ingredient, setIngredient] = useState('');
    const [listIngredients, setIngredientsList] = useState([]);

    // handleSubmit function called when typing in input field
    const handleSubmit = (e) => {
        e.preventDefault();
        const newIngredient = {id: uuidv4(), item:ingredient}
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
            <h2>Your Pantry:</h2>
            {listIngredients.map((entry) => (
                <div key={entry.id}>
                    <p>{entry.item}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Textbox;