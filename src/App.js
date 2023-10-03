import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';
import IngredientsPage from './Components/IngredientsPage';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App">
      <div className="Navbar">
      <Navbar />
      </div>
      <div className="app-body">
      <div className="SideBar">
          <SideBar />
         </div>
      <div className="body-content">
          <IngredientsPage/>
        </div>
        
        
      </div>
      
      
    </div>
  );
}

export default App;
