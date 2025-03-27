import Image from "next/image"
import Link from "next/link"
export default function Testimonial() {
    return (
        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" >
                    <p className="fs-4 text-uppercase text-primary">Testimonial</p>
                    <h1 className="display-4 mb-4 text-white">What Our Clients Say!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item rounded p-4">
                        <div className="row">
                            <div className="col-4">
                                <div className="d-flex flex-column mx-auto">
                                    <div className="rounded-circle mb-4" >
                                        <Image src="/testimonial-1.jpg" className="img-fluid rounded-circle" alt="" />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="mb-2 text-primary">Person Name</h4>
                                        <p className="m-0 text-white">Profession</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="position-absolute" >
                                    <i className="fa fa-quote-right fa-2x text-secondary"></i>
                                </div>
                                <div className="testimonial-content">
                                    <div className="d-flex mb-4">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="fs-5 mb-0 text-white">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item rounded p-4">
                        <div className="row">
                            <div className="col-4">
                                <div className="d-flex flex-column mx-auto">
                                    <div className="rounded-circle mb-4" >
                                        < Image src="/testimonial-2.jpg" className="img-fluid rounded-circle" alt="" />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="mb-2 text-primary">Person Name</h4>
                                        <p className="m-0 text-white">Profession</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="position-absolute">
                                    <i className="fa fa-quote-right fa-2x text-secondary"></i>
                                </div>
                                <div className="testimonial-content">
                                    <div className="d-flex mb-4">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="fs-5 mb-0 text-white">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item rounded p-4">
                        <div className="row">
                            <div className="col-4">
                                <div className="d-flex flex-column mx-auto">
                                    <div className="rounded-circle mb-4" >
                                        <Image src="/testimonial-3.jpg" className="img-fluid rounded-circle" alt="" />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="mb-2 text-primary">Person Name</h4>
                                        <p className="m-0 text-white">Profession</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="position-absolute" >
                                    <i className="fa fa-quote-right fa-2x text-secondary"></i>
                                </div>
                                <div className="testimonial-content">
                                    <div className="d-flex mb-4">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="fs-5 mb-0 text-white">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}