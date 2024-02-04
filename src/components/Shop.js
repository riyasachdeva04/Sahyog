import React from 'react'
import { Link} from 'react-router-dom';
function Card(){
    return(
        <>
        <div className="card" style={{ width: '18rem', marginBottom:'20px'}}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
    
}
export default function Shop() {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/" style={{marginLeft: '13px'}}>Sahyog</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
        <form className="form-inline my-2 my-lg-0" style={{display: "flex"}}>
            <input className="form-control mr-sm-2 mx-2 " type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">Search</button>
        </form>
            <li className="nav-item active">
            <Link className="nav-link mx-2" to="/">Account <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link mx-2" to="/">Cart</Link>
            </li>
            {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/">Action</Link>
                <Link className="dropdown-item" to="/">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">Something else here</Link>
            </div> */}
            {/* </li> */}
            {/* <li className="nav-item">
            <Link className="nav-link disabled" to="/">Disabled</Link>
            </li> */}
        </ul>
       
        </div>
    </nav>

    {/* navbar ends */}
    <div className='cards' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop:'30px'}} >
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
</div>


  </div>
  )
}
