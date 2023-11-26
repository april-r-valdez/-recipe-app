
const Directions = ({directions, handleChange}) => {
    return (
        <div className="directions">
            <textarea 
                class="form-control"
                required
                type='text'
                id='direction'
                name='direction'
                value={directions.direction}
                onChange={handleChange}
            ></textarea><br></br>
            <div class="d-grid gap-2 col-8 mx-auto">
                <button type="submit" class="btn btn-secondary">Add Direction</button>
            </div>
        </div>
    );
}

export default Directions;