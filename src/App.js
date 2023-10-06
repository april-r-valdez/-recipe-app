import "./App.css";
import TextBox from "./components/TextBox";
import IngredientInput from "./components/IngredientInput/IngredientInput";

function App() {
  return (
    <div className="container">
      <h2>Recipe Generator App</h2>
      <TextBox />
      <IngredientInput />
    </div>
  );
}

export default App;
