import './login.css';
import { Link } from 'react-router-dom';
import profile from "./user.jpeg";
import mail from "./mail.jpeg";
import pass from "./pass.jpeg";

function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>USER LOGIN</h1>
           <div>
             <img src={mail} alt="mail" className="mail"/>
             <input type="text" placeholder="Username,Email" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="mail"/>
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <Link to="/homepage"><button>Login</button></Link>
          </div>
           
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;