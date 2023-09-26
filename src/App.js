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
      <TextInput label="amount" placeholder="ex: 10..." type="number" />
      <TextInput label="unit" placeholder="ex: lb, oz..." type="text" />
    </div>
  );
}

export default App;
