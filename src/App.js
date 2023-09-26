import logo from "./logo.svg";
import "./App.css";
import TextInput from "./components/TextInput";

function App() {
  return (
    <div>
      <TextInput
        label="Enter an Ingredient"
        placeholder="ex: eggs, milk..."
        type="text"
      />
    </div>
  );
}

export default App;
