const IngredientsList = () => {

  const renderIngredient = (ingredient, index) =>{
    return(
      <tr key = {index}>
        <td>{ingredient.amount}</td>
        <td>{ingredient.name}</td>
      </tr>
    )
  }

    return (
      <>
        <div className="container-sm text-center">
          <p className="h3">In Stock</p>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Amout</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {/*AllIngredients.map(renderIngredient)*/}
            </tbody>
          </table>
        </div>
      </>
    );
}
 
export default IngredientsList;