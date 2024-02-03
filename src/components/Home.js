import React from 'react';
import { Link } from 'react-router-dom';
import './/Home.css'
import Footer from './Footer';
const Home = () => {
  return (
    <>
    <div className="container desktop" style={{ height: '100vh',}}>
      <div className="navbar navbar-collapse ">
        <Link className="active m-3" to="/shop"><i className="fa fa-fw fa-home"></i> Shop</Link>
        <Link className="active m-3" to="/search"><i className="fa fa-fw fa-home"></i>Search</Link>
        <Link className="active m-3" to="/languages"><i className="fa fa-fw fa-home"></i> Languages</Link>
        <Link className="active m-3" to="/login"><i className="fa fa-fw fa-home"></i> Login</Link>
      </div>
      <div className="d-flex justify-content-around p-5" style={{maxHeight: '100%'}}>
      <h1 style={{ fontSize: '15vh', fontFamily: 'RobotoSlab', color: 'blue'}}>Uniting Hearts, Empowering Carts </h1>
      <img src="images/bg.png" alt="" style={{'objectit': 'contain', marginBottom: '50px'}} />
      </div>
    </div>
    <div className="container desktop">
      <h1 style={{color: 'blue', textAlign: 'center', fontSize: '10vh', fontFamily: 'ariel'}}>Welcome to Sahyog !</h1>
      <div className="d-flex justify-content-around p-5">
        <div className="row about">
          <div className="col-sm about ">
            <div className="row my-3 " style={{color:'white'}}>
              <h1>Namaskar Shopaholics,</h1>
            </div>
            <div className="row my-3 " style={{color:'white'}}>
              <h2>Hold onto your virtual carts because you're about to embark on a shopping spree like never before! Welcome to Sahyog, the one-stop destination that speaks your language.
              </h2>
            </div>
            <div className="row my-3" style={{color:'white'}}>
              <h2>At Sahyog, we believe that shopping is not just about products; it's about creating moments, expressing individuality, and embracing the vibrant tapestry of Indian culture.
              </h2>
            </div>
            <div className="row my-3 " style={{color:'white'}}>
              <h2>
              Our mission is to redefine the way you shop online.
              </h2>
            </div>
          </div>
          <div className="col-sm" >
            hi
            <img src="images/mobile_trolley.jpg" style={{'object-fit': 'contain', marginBottom: '50px', overflow:'hidden', maxWidth:'80%'}} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="container desktop" style={{height: '75vh'}}>
      <div className="d-flex justify-content-around p-5">
        <div className="d-flex flex-column bd-highlight mb-3">
          <div className="bd-highlight">
            <h1 style={{ fontSize: '25vh', fontFamily: 'RobotoSlab', color: 'blue', 'fontStyle': 'bold'}}>
                50
            </h1>
          </div>
          <div className="bd-highlight">
            <h1 style={{color: "white"}}>
              Dive into the seamless experience of voice, text, or image search. It’s like magic but real!
            </h1>
          </div>
          <div className="bd-highlight">
            <h1 style={{color: "white"}}>
              We speak over 50 Indic languages. Yours is probably one of them!
            </h1>
          </div>
        </div>
        <div className='container-fluid'>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
