const Ingredient = ({ ingredient: {name, amount} }) => {
    return (
        <>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">{amount}</li>
        <li className="list-group-item">{name}</li>
      </ul>
      </>
    );
}
 
export default Ingredient;