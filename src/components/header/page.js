import Link from "next/link"
export default function Header(){
    return(
        <>
      <div className="navbar container-fluid sticky-top px-0" style={{background:"#295F98"}}>
            <div className="container-fluid topbar d-none d-lg-block">
                <div className="container px-0">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="d-flex flex-wrap">
                               <Link href="#" className="me-4 text-light"><i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</Link>
                               <Link href="#" className="me-4 text-light"><i className="fas fa-phone-alt text-primary me-2"></i>+01234567890</Link>
                               <Link href="#" className="text-light"><i className="fas fa-envelope text-primary me-2"></i>Example@gmail.com</Link>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center justify-content-end">
                               <Link href="#" className="me-3 btn-square border rounded-circle nav-fill"><i className="fab fa-facebook-f"></i></Link>
                               <Link href="#" className="me-3 btn-square border rounded-circle nav-fill"><i className="fab fa-twitter"></i></Link>
                               <Link href="#" className="me-3 btn-square border rounded-circle nav-fill"><i className="fab fa-instagram"></i></Link>
                               <Link href="#" className="btn-square border rounded-circle nav-fill"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-light">
                <div className="container px-0">
                    <nav className="navbar navbar-light navbar-expand-xl">
                       <Link href="/" className="navbar-brand">
                            <h1 className="text-primary display-4">Sparlex</h1>
                        </Link>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-light py-3" id="navbarCollapse">
                            <div className="navbar-nav mx-auto border-top">
                               <Link href="/" className="nav-item nav-link active">Home</Link>
                               <Link href="about" className="nav-item nav-link">About</Link>
                               <Link href="service" className="nav-item nav-link">Services</Link>
                               <Link href="price" className="nav-item nav-link">Price</Link>
                                <div className="nav-item dropdown">
                                   <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                       <Link href="team" className="dropdown-item">Team</Link>
                                       <Link href="testimonial" className="dropdown-item">Testimonial</Link>
                                       <Link href="gallery" className="dropdown-item">Gallery</Link>
                                       <Link href="appointment" className="dropdown-item">Appointment</Link>
                                       <Link href="404" className="dropdown-item">404 page</Link>
                                    </div>
                                </div>
                               <Link href="contact" className="nav-item nav-link">Contact Us</Link>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                                <button className="btn-search btn btn-primary btn-primary-outline-0 rounded-circle btn-lg-square" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                               <Link href="appointment" className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-4 ms-4">Book Appointment</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
        </>
    )
}