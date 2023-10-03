
const Amount = ({inputs, handleChange}) => {
    return (
        <div className="amount">
            <label>Amount:</label>
            <input
                required
                type='number'
                min='1'
                id='amount'
                name='amount'
                value={inputs.amount}
                placeholder='Ex: 1 egg, 2 cups,...'
                onChange={handleChange}
            ></input> 
        </div>
    );
}

export default Amount;