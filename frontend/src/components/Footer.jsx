import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>DoSchedulise</h3>
                                <p>
                                    BBD University<br />
                                    Chinhat, Lucknow 226028<br /><br />
                                    <strong>Phone:</strong> +919292929299<br />
                                    <strong>Email:</strong> shubhamgupta10@gmail.com<br />
                                </p>
                                <div className="social-links mt-3">
                                    <Link to="" className="twitter"><i className="bx bxl-twitter"></i></Link>
                                    <Link to="" className="Github"><i className="bx bxl-github"></i></Link>
                                    <Link to="" className="facebook"><i className="bx bxl-facebook"></i></Link>
                                    <Link to="" className="instagram"><i className="bx bxl-instagram"></i></Link>
                                    <Link to="" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/dashboard">Dashboard</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/doctors">Doctor</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/join">Live Chat</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/appointment">Appointment</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Appointment Scheduling</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Telemedicine</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Medical Records Management</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Patient Communication</a></li>
                            </ul>
                        </div>
                     
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="credits">
                    &copy; Copyright <strong><span>DoSchedulise</span></strong>.
                    All Rights Reserved
                </div>
                <div className="credits">Designed by Shubham Kumar Gupta</div>
            </div>
        </footer>
  )
}

export default Footer