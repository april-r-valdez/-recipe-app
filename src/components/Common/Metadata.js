
const Metadata = ({metadata, handleChange}) => {
    return (
        <div className="metadata">
            <input
                className="form-control"
                required
                type='text'
                id='name'
                name='name'
                value={metadata.name}
                placeholder='Recipe name'
                onChange={handleChange}
            ></input><br></br>
            <input
                className="form-control"
                required
                type='number'
                min='1'
                id='servingSize'
                name='servingSize'
                value={metadata.servingSize}
                placeholder='Number of servings'
                onChange={handleChange}
            ></input><br></br>
            <input
                className="form-control"
                required
                type='number'
                min='15'
                step='15'
                id='prepTime'
                name='prepTime'
                value={metadata.prepTime}
                placeholder='Prep time (minutes)'
                onChange={handleChange}
            ></input><br></br>
            <input
                className="form-control"
                required
                type='number'
                min='15'
                step='15'
                id='cookTime'
                name='cookTime'
                value={metadata.cookTime}
                placeholder='Cook time (minutes)'
                onChange={handleChange}
            ></input><br></br>
            <div class="d-grid gap-2 col-8 mx-auto">
                <button type="submit" class="btn btn-primary">Add Information</button>
            </div>
        </div>
    );
}

export default Metadata;