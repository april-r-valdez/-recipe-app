

const  Textbox = () => {
    return (  
        <div className="textbox">
            <p>Enter your ingredients here</p>
            <input
            placeholder='Enter ingredients'
            ></input>
            <div>
                <button>Generate Recipes</button>
            </div>
        </div>
    );
}
 
export default Textbox;