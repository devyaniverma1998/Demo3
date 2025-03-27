import Image from "next/image"
import Link from "next/link"
export default function Service() {
    return (
        <>
        <div className="container-fluid services py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" >
                    <p className="fs-4 text-uppercase text-center text-primary">Our Service</p>
                    <h1 className="display-3">Spa & Beauty Services</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-end border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <div className="services-content text-end">
                                        <h3>Skin Care</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy</p>
                                        <Link href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <Image src="/services-1.jpg" className="img-fluid rounded" alt="not found"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <Image src="/services-2.jpg" className="img-fluid rounded" alt="not found"/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="services-content text-start">
                                        <h3>Face Masking</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy</p>
                                        <Link href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-end border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <div className="services-content text-end">
                                        <h3>Stream Bath</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy</p>
                                        <Link href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <Image src="/services-3.jpg" className="img-fluid rounded" alt="not found"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <Image src="/services-4.jpg" className="img-fluid rounded" alt="not found"/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="services-content text-start">
                                        <h3>Facial Therapy</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy</p>
                                        <Link href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-end border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <div className="services-content text-end">
                                        <h3>Body Massage</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy</p>
                                        <Link href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <Image src="/services-5.jpg" className="img-fluid rounded" alt="not found"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <Image src="/services-6.jpg" className="img-fluid rounded" alt="not found"/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="services-content text-start">
                                        <h3>Aroma Therapy</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy</p>
                                        <Link href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-end border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <div className="services-content text-end">
                                        <h3>Mineral Baths</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy</p>
                                        <Link href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <Image src="/services-3.jpg" className="img-fluid rounded" alt="not found"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <Image src="/services-1.jpg" className="img-fluid rounded" alt="not found"/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="services-content text-start">
                                        <h3>Stone Therapy</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy</p>
                                        <Link href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="services-btn text-center">
                            <Link href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5">Service More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}