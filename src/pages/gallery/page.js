// src/pages/home6/page.js
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <div className="container-fluid gallery py-5">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5">
          <p className="fs-4 text-uppercase text-primary">Our Gallery</p>
          <h1 className="display-4 mb-4">Let&apos;s See Our Gallery</h1>
        </div>
        <div className="tab-className text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
            <li className="nav-item">
             <Link
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                <span className="text-dark">All Gallery</span>
             </Link>
            </li>
            <li className="nav-item">
             <Link
                className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                <span className="text-dark">Skin Care</span>
             </Link>
            </li>
            <li className="nav-item">
             <Link
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                <span className="text-dark">Stream Bath</span>
             </Link>
            </li>
            <li className="nav-item">
             <Link
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-4"
              >
                <span className="text-dark">Stone Therapy</span>
             </Link>
            </li>
            <li className="nav-item">
             <Link
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-5"
              >
                <span className="text-dark">Face Massage</span>
             </Link>
            </li>
          </ul>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    <div className="col-lg-3">
                      <div className="gallery-img">
                        <Image
                          className="img-fluid rounded w-100"
                          src="/gallery-1.jpg"
                          alt="Skin Care"
                          width={300}
                          height={300}
                        />
                        <div className="gallery-overlay p-4">
                          <h4 className="text-secondary">Skin Care</h4>
                        </div>
                        <div className="search-icon">
                         <Link
                            href="/gallery-1.jpg"
                            data-lightbox="Gallery-1"
                            className="my-auto"
                          >
                            <i className="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                         </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="gallery-img">
                        <Image
                          className="img-fluid rounded w-100"
                          src="/gallery-2.jpg"
                          alt="Stream Bath"
                          width={300}
                          height={300}
                        />
                        <div className="gallery-overlay p-4">
                          <h4 className="text-secondary">Stream Bath</h4>
                        </div>
                        <div className="search-icon">
                         <Link
                            href="/gallery-2.jpg"
                            data-lightbox="Gallery-2"
                            className="my-auto"
                          >
                            <i className="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                         </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="gallery-img">
                        <Image
                          className="img-fluid rounded w-100"
                          src="/gallery-3.jpg"
                          alt="Stone Therapy"
                          width={300}
                          height={300}
                        />
                        <div className="gallery-overlay p-4">
                          <h4 className="text-secondary">Stone Therapy</h4>
                        </div>
                        <div className="search-icon">
                         <Link
                            href="/gallery-3.jpg"
                            data-lightbox="Gallery-3"
                            className="my-auto"
                          >
                            <i className="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                         </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="gallery-img">
                        <Image
                          className="img-fluid rounded w-100"
                          src="/gallery-4.jpg"
                          alt="Face Massage"
                          width={300}
                          height={300}
                        />
                        <div className="gallery-overlay p-4">
                          <h4 className="text-secondary">Face Massage</h4>
                        </div>
                        <div className="search-icon">
                         <Link
                            href="/gallery-4.jpg"
                            data-lightbox="Gallery-4"
                            className="my-auto"
                          >
                            <i className="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                         </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="gallery-img">
                        <Image
                          className="img-fluid rounded w-100"
                          src="/gallery-5.jpg"
                          alt="Skin Care"
                          width={300}
                          height={300}
                        />
                        <div className="gallery-overlay p-4">
                          <h4 className="text-secondary">Skin Care</h4>
                        </div>
                        <div className="search-icon">
                         <Link
                            href="/gallery-5.jpg"
                            data-lightbox="Gallery-5"
                            className="my-auto"
                          >
                            <i className="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                         </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="gallery-img">
                        <Image
                          className="img-fluid rounded w-100"
                          src="/gallery-6.jpg"
                          alt="Stream Bath"
                          width={300}
                          height={300}
                        />
                        <div className="gallery-overlay p-4">
                          <h4 className="text-secondary">Stream Bath</h4>
                        </div>
                        <div className="search-icon">
                         <Link
                            href="/gallery-6.jpg"
                            data-lightbox="Gallery-6"
                            className="my-auto"
                          >
                            <i className="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                         </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="gallery-img">
                        <Image
                          className="img-fluid rounded w-100"
                          src="/gallery-7.jpg"
                          alt="Stone Therapy"
                          width={300}
                          height={300}
                        />
                        <div className="gallery-overlay p-4">
                          <h4 className="text-secondary">Stone Therapy</h4>
                        </div>
                        <div className="search-icon">
                         <Link
                            href="/gallery-7.jpg"
                            data-lightbox="Gallery-7"
                            className="my-auto"
                          >
                            <i className="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                         </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="gallery-img">
                        <Image
                          className="img-fluid rounded w-100"
                          src="/gallery-8.jpg"
                          alt="Face Massage"
                          width={300}
                          height={300}
                        />
                        <div className="gallery-overlay p-4">
                          <h4 className="text-secondary">Face Massage</h4>
                        </div>
                        <div className="search-icon">
                         <Link
                            href="/gallery-8.jpg"
                            data-lightbox="Gallery-8"
                            className="my-auto"
                          >
                            <i className="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                         </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Additional tab panes (tab-2 to tab-5) omitted for brevity */}
            {/* Add them back with width and height props as shown above */}
          </div>
        </div>
      </div>
    </div>
  );
}