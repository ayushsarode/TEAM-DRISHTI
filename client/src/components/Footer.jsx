import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>About Us</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Courses</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>contact info</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +91 313XXXXXXX</p>
                            <p><i class="fa-solid fa-envelope"></i> studynest1515@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Abbottabad, Pakistan.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>STUDY NEST</p>
            </div>
        </>
    )
}

export default Footer