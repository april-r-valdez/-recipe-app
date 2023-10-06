import logo from './logo.svg';
import './App.css';
import IngredientsPage from './Components/InStockIngredients';

function App() {
  return (
    <div className="App">

      <div className="app-body">
      <div className="body-content">
          <IngredientsPage/>
      </div> 
      </div>  
    </div>
  );
}

export default App;
