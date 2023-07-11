//import logo from './logo.svg';
import './App.css';
import LoginPage from './login';
import Signup from './signup';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


// import LoginPage from './Loginpage';
function App() {
  return (
    <Router>
            <Routes>
  
              {<Route path="/" element={<LoginPage/>} />}
             {<Route path="/signup" element={<Signup/>} />}
            </Routes>
</Router>
  );
}

export default App