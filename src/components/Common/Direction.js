
const Directions = ({directions, handleChange}) => {
    return (
        <div className="directions">
            <div class="input-group mb-3">
                <textarea 
                    class="form-control"
                    required
                    type='text'
                    id='direction'
                    name='direction'
                    value={directions.direction}
                    onChange={handleChange}
                ></textarea>
            </div>
        </div>
    );
}

export default Directions;