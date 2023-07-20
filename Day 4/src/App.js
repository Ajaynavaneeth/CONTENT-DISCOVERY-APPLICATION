
import './App.css';
import Login from './components/login';

// import  Feed  from './components/feed';
import Explore from './components/explore';
import Homepage from './components/homepage';
import Notification from './components/notification';
import Message from './components/message';
import Profile from './components/profile';
import Bookmark from './components/bookmark';


import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="app">

     
  {/* <Homepage/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route> 
        <Route path="/homepage" element={<Homepage/>}></Route> 
        <Route path="/explore" element={<Explore/>}></Route> 
        <Route path="/notification" element={<Notification/>}></Route>
        <Route path="/message" element={<Message/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/bookmark" element={<Bookmark/>}></Route>
        

      
      
      </Routes>
    </Router>
    </div>
    
  );
}

export default App
