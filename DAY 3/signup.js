import './login.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="main">
     <div className="sub-main">
         <div>
           <h1>NEW USER</h1>
           <div>
             <input type="text" placeholder="Username" className="name"/>
           </div>
           <div className="second-input">
             <input type="text" placeholder="Email-Id" className="name"/>
           </div>
           <div className="second-input">
             <input type="password" placeholder="Password" className="name"/>
           </div>
           <div className="second-input">
             <input type="password" placeholder="Confirm Password" className="name"/>
           </div>
          <div className="login-button">
          <button type="submit">Register</button>
          </div>


          <Link to="/signup" ></Link>
 
         </div>
       </div>
       

     </div>
  );
}

export default Signup;