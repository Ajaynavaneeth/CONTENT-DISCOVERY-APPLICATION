
import './signup.css';
import profile from "./user.jpeg";
import mail from "./mail.jpeg";
import pass from "./pass.jpeg";
import { Link } from 'react-router-dom';

function LoginPage() {
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
          <button type="submit">Login</button>
          </div>
           
            <p className="link">
              
            </p>
            <Link to='/signup' className="login">SignUp</Link>
            
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginPage;
