import Link from "next/link"
import Image from "next/image"
export default function Home1() {
    return (
        <>
            <div className="container-fluid carousel-header px-0">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <Image src="/carousel-3.jpg" className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" >
                                    <h4 className="text-primary text-uppercase mb-3">Spa & Beauty Center</h4>
                                    <h1 className="display-1 text-capitalize text-dark mb-3">Massage Treatment</h1>
                                    <p className="mx-md-5 fs-4 px-4 mb-5 text-dark">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum</p>
                                    <div className="d-flex align-items-center justify-content-center">
                                       <Link className="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" href="#">Get Start</Link>
                                       <Link className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" href="#">Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <Image src="/carousel-2.jpg" className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" >
                                    <h4 className="text-primary text-uppercase mb-3" >Spa & Beauty Center</h4>
                                    <h1 className="display-1 text-capitalize text-dark mb-3">Facial Treatment</h1>
                                    <p className="mx-md-5 fs-4 px-5 mb-5 text-dark">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum</p>
                                    <div className="d-flex align-items-center justify-content-center">
                                       <Link className="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" href="#">Get Start</Link>
                                       <Link className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" href="#">Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <Image src="/carousel-1.jpg" className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" >
                                    <h4 className="text-primary text-uppercase mb-3" >Spa & Beauty Center</h4>
                                    <h1 className="display-1 text-capitalize text-dark">Cellulite Treatment</h1>
                                    <p className="mx-md-5 fs-4 px-5 mb-5 text-dark">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum</p>
                                    <div className="d-flex align-items-center justify-content-center">
                                       <Link className="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" href="#">Get Start</Link>
                                       <Link className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" href="#">Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div></>
    )
}