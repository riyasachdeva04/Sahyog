import React from 'react'
import './/Login.css'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

function Login() {
  return (
    <>
    <div className="container login">
     <div className="form-box">
       <div className="header-form">
         <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
         <div className="image">
         </div>
       </div>
       <div className="body-form">
        <form>
           <div className="input-group mb-3">
        <div className="input-group-prepend">
        <span className="input-group-text" style={{height: '6vh' }}><i className="fa fa-user"></i></span>
        </div>
        <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="input-group mb-3">
        <div className="input-group-prepend">
        <span className="input-group-text" style={{height: '6vh'}}><i className="fa fa-lock " ></i></span>
        </div>
        <input type="text" className="form-control" placeholder="Password" />
        </div>
        <button type="button" className="btn btn-secondary btn-block" style={{alignContent: 'center' , width: '340px', margin: '0 auto'}}>LOGIN</button>
        <div className="message">
        <div><input type="checkbox" /> Remember ME</div>
        <div><Link to="/">Forgot your password</Link></div>
        </div>
        <div className='text-center mt-4'>
         <div> Account does not exist? <Link to="/">  Sign Up</Link></div>
          </div>
        </form>
         <div className="social">
           <Link to="/"><i className="fab fa-facebook"></i></Link>
           <Link to="/"><i className="fab fa-twitter-square"></i></Link>
           <Link to="/"><i className="fab fa-google"></i></Link>
         </div>
       </div>
     </div>
    </div>   
    </>
 )
}

export default Login
