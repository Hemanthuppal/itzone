import React from 'react';

function Contact() {
  return (
 
    <div>
        {/* <body>
    <!-- Spinner Start --> */}
    {/* <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}
    {/* <!-- Spinner End -->


    <!-- Navbar Start --> */}
    {/* <div className="container-fluid sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <a href="index.html" className="navbar-brand">
                    <h1 className="text-white">AI<span className="text-dark">.</span>Tech</h1>
                </a>
                <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <a href="index.html" className="nav-item nav-link">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Services</a>
                        <a href="project.html" className="nav-item nav-link">Projects</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light mt-2">
                                <a href="feature.html" className="dropdown-item">Features</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="faq.html" className="dropdown-item">FAQs</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link active">Contact</a>
                    </div>
                    <butaton type="button" className="btn text-white p-0 d-none d-lg-block" data-bs-toggle="modal"
                        data-bs-target="#searchModal"><i className="fa fa-search"></i></butaton>
                </div>
            </nav>
        </div>
    </div> */}
    {/* <!-- Navbar End -->


    <!-- Hero Start --> */}
    <div className="container-fluid pt-5 bg-primary hero-header">
        <div className="container pt-5">
            <div className="row g-5 pt-5">
                <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 className="display-4 text-white mb-4 animated slideInRight">Contact Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-lg-6 align-self-end text-center text-lg-end">
                    <img className="img-fluid" src="img/hero-img.png" alt="" style={{ maxHeight: '300px' }} />
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- Full Screen Search Start --> */}
    <div className="modal fade" id="searchModal" tabindex="-1">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{ background: 'rgba(20, 24, 62, 0.7)' }}>
                <div className="modal-header border-0">
                    <button type="button" className="btn btn-square bg-white btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                    <div className="input-group" style={{ maxWidth: '600px'}}>
                        <input type="text" className="form-control bg-transparent border-light p-3"
                            placeholder="Type search keyword" />
                        <button className="btn btn-light px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Full Screen Search End -->


    <!-- Contact Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Contact Us</div>
                <h1 className="mb-4">If You Have Any Query, Please Contact Us</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    <div className="wow fadeIn" data-wow-delay="0.3s">
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}
        
{/* 
    <!-- Newsletter Start --> */}
    <div className="container-fluid bg-primary newsletter py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn" data-wow-delay="0.3s">
                    <img className="img-fluid" src="img/newsletter.png" alt="" />
                </div>
                <div className="col-md-7 py-5 newsletter-text wow fadeIn" data-wow-delay="0.5s">
                    <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Newsletter</div>
                    <h1 className="text-white mb-4">Let's subscribe the newsletter</h1>
                    <div className="position-relative w-100 mt-3 mb-2">
                        <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text"
                            placeholder="Enter Your Email" style={{height: '48px'}}/>
                        <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                                className="fa fa-paper-plane text-primary fs-4"></i></button>
                    </div>
                    <small className="text-white-50">Diam sed sed dolor stet amet eirmod</small>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Newsletter End -->


    <!-- Footer Start --> */}
    {/* <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <a href="index.html" className="d-inline-block mb-3">
                        <h1 className="text-white">AI<span className="text-primary">.</span>Tech</h1>
                    </a>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                        amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                        clita duo justo et tempor</p>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <h5 className="text-white mb-4">Get In Touch</h5>
                    <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <h5 className="text-white mb-4">Popular Link</h5>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Privacy Policy</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Career</a>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <h5 className="text-white mb-4">Our Services</h5>
                    <a className="btn btn-link" href="">Robotic Automation</a>
                    <a className="btn btn-link" href="">Machine learning</a>
                    <a className="btn btn-link" href="">Predictive Analysis</a>
                    <a className="btn btn-link" href="">Data Science</a>
                    <a className="btn btn-link" href="">Robot Technology</a>
                </div>
            </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                        Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <a href="">Home</a>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FAQs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}
    {/* <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i className="bi bi-arrow-up"></i></a> */}


  

    </div>
  )
}

export default Contact;