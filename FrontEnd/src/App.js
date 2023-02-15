import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import { SignIn } from './Pages/Login';

function App() {
  return (
    <div className="App">
     <Navbar/>
    
     <AllRoutes/>
    </div>
  );
}

export default App;
