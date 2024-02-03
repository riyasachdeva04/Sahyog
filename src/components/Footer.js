import React from 'react';
import { Link } from 'react-router-dom';
import './/Footer.css'
function Footer() {
  return (
    <footer className="footer-section">
        <div className="container p-5 m-0" style={{"block-size": "fit-content"}}>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link to="/"><img src="" className="img-fluid" alt="logo"/></Link>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <div className="d-flex justify-content-center">
                                <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">about</Link></li>
                                <li><Link to="/">services</Link></li>
                                <li><Link to="/">portfolio</Link></li>
                                <li><Link to="/">Contact</Link></li>
                                <li><Link to="/">About us</Link></li>
                                <li><Link to="/">Our Services</Link></li>
                                <li><Link to="/">Expert Team</Link></li>
                                <li><Link to="/">Contact us</Link></li>
                                <li><Link to="/">Latest News</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="copyright-text">
                    <p style={{textAlign: 'center'}}>Made with love, Sahyog</p>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
