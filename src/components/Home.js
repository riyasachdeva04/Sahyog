import React from 'react';
import { Link } from 'react-router-dom';
import './/Home.css'
const Home = () => {
  return (
    <>
    <div className="container desktop" style={{ height: '100vh',}}>
      <div className="navbar navbar-collapse ">
        <Link className="active m-3" to="/"><i className="fa fa-fw fa-home"></i> Shop</Link>
        <Link className="active m-3" to="/"><i className="fa fa-fw fa-home"></i>Search</Link>
        <Link className="active m-3" to="/"><i className="fa fa-fw fa-home"></i> Languages</Link>
        <Link className="active m-3" to="/"><i className="fa fa-fw fa-home"></i> Login</Link>
      </div>
      <div class="d-flex justify-content-around p-5" style={{maxHeight: '100%'}}>
      <h1 style={{ fontSize: '15vh', fontFamily: 'RobotoSlab', color: 'blue', 'font-family': 'bold'}}>Uniting Hearts, Empowering Carts </h1>
      <img src="bg.png" alt="" style={{'object-fit': 'contain', marginBottom: '50px'}} />
      </div>
    </div>
    <div className="container desktop">
      <h1 style={{color: 'blue', textAlign: 'center', fontSize: '10vh', fontFamily: 'ariel'}}>Welcome to Sahyog !</h1>
    </div>
    </>
  );
}

export default Home;
