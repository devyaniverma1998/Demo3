import Link from "next/link"
export default function Footer() {
    return (
        <>
            <div className="container-fluid footer py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item">
                                <h4 className="mb-4 text-white">Newsletter</h4>
                                <p className="text-white">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in tempor dui, non consectetur enim.</p>
                                <div className="position-relative mx-auto rounded-pill">
                                    <input className="form-control rounded-pill border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                    <button type="button" className="btn btn-primary btn-primary-outline-0 rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 text-white">Our Services</h4>
                                <Link href="/about"><i className="fas fa-angle-right me-2"></i> About</Link>
                                <Link href="/blog"><i className="fas fa-angle-right me-2"></i> Blog</Link>

                                <Link href="/terms"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</Link>
                                <Link href="/privacy"><i className="fas fa-angle-right me-2"></i> Privacy Policy</Link>
                                <Link href="/contact"><i className="fas fa-angle-right me-2"></i> Contact</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 text-white">Schedule</h4>
                                <p className=" mb-0">Monday: <span className="text-white"> 09:00 am – 10:00 pm</span></p>
                                <p className=" mb-0">Saturday: <span className="text-white"> 09:00 am – 08:00 pm</span></p>
                                <p className="mb-0">Sunday: <span className="text-white"> 09:00 am – 05:00 pm</span></p>
                                <h4 className="my-4 text-white">Address</h4>
                                <p className="mb-0"><i className="fas fa-map-marker-alt text-secondary me-2"></i> 123 ranking street North tower New York, USA</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 text-white">Follow Us</h4>
                                <Link href=""><i className="fas fa-angle-right me-2"></i> Faceboock</Link>
                                <Link href=""><i className="fas fa-angle-right me-2"></i> Instagram</Link>
                                <Link href=""><i className="fas fa-angle-right me-2"></i> Twitter</Link>
                                <h4 className="my-4 text-white">Contact Us</h4>
                                <p className="mb-0"><i className="fas fa-envelope text-secondary me-2"></i> info@example.com</p>
                                <p className="mb-0"><i className="fas fa-phone text-secondary me-2"></i> (+012) 3456 7890 123</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-4 text-center text-md-start mb-md-0">
                            <span className="text-light"><Link href="#"><i className="fas fa-copyright text-light me-2"></i>Your Site Name</Link>, All right reserved.</span>
                        </div>
                        <div className="col-md-4">
                            {/* <div className="d-flex justify-content-center">
                                <Link href="" className="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-2"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="" className="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-2"><i className="fab fa-twitter"></i></Link>
                                <Link href="" className="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-2"><i className="fab fa-instagram"></i></Link>
                                <Link href="" className="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in"></i></Link>
                            </div> */}
                        </div>
                        <div className="col-md-4 text-center text-md-end text-white">

                            <div className="d-flex justify-content-center">
                                <Link href="" className="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-2"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="" className="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-2"><i className="fab fa-twitter"></i></Link>
                                <Link href="" className="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-2"><i className="fab fa-instagram"></i></Link>
                                <Link href="" className="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in"></i></Link>
                            </div>

                            {/* 
                            Designed By <Link className="border-bottom" href="https://htmlcodex.com">HTML Codex</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}