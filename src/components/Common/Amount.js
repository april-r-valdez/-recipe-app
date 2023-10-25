
const Amount = ({inputs, handleChange}) => {
    return (
        <div className="amount">
            <input
                className="form-control"
                required
                type='number'
                min='1'
                id='amount'
                name='amount'
                value={inputs.amount}
                placeholder='Amount (ex: 1 egg, 2 cups,...)'
                onChange={handleChange}
            ></input> 
        </div>
    );
}

export default Amount;