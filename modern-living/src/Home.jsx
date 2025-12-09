import { faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Home() {
  return (
    <div>
      {/* header */}
      <div className="bg-image">
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col-lg-6 col-12 pt-5 mt-5">
              <p className="title mt-5 pt-3">
                We Make Your <span className="titleS">Home</span> Better
              </p>
              <div className="d-flex">
                <p className="texter py-3 px-5">
                  An Award Winning Studio Since 1990
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-5 pt-5">
              <div className="mt-5 d-flex justify-content-end position-relative">
                <div className="cart">
                  <div className="position-absolute top-50 translate-middle w-100">
                    <div
                      id="myCarousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#myCarousel"
                          data-bs-slide-to="0"
                          className="active"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#myCarousel"
                          data-bs-slide-to="1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#myCarousel"
                          data-bs-slide-to="2"
                        ></button>
                      </div>

                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                            className="img-fluid caro-img"
                            alt=""
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://images.unsplash.com/photo-1761658652336-95d31ce1d806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
                            className="img-fluid caro-img"
                            alt=""
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://images.unsplash.com/photo-1631941392209-70cad44ecfb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
                            className="img-fluid caro-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-12 mb-5">
              <p className="fs-4">
                <span className="border border-white border-2 p-2">
                  <i className="bi bi-robot fs-4 titleS"></i>
                </span>{" "}
                Crafted Furniture
              </p>
            </div>
            <div className="col-lg-3 col-12 mb-5">
              <p className="fs-4">
                <span className="border border-white border-2 p-2">
                  <i className="bi bi-robot fs-4 titleS"></i>
                </span>{" "}
                Sustainable Material
              </p>
            </div>
            <div className="col-lg-3 col-12 mb-5">
              <p className="fs-4">
                <span className="border border-white border-2 p-2">
                  <i className="bi bi-robot fs-4 titleS"></i>
                </span>{" "}
                Innovative Architects
              </p>
            </div>
            <div className="col-lg-3 col-12 mb-5">
              <p className="fs-4">
                <span className="border border-white border-2 p-2">
                  <i className="bi bi-robot fs-4 titleS"></i>
                </span>{" "}
                Budget Friendly
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end header */}
      {/* about */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="row ">
              <div className="col-lg-6 col-6 mt-5">
                <img
                  src="https://i.pinimg.com/564x/04/2a/47/042a47efc2e656148ba35b9bb9a932bb.jpg"
                  className="w-100 img-fluid h-100"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-6 mt-5">
                <img
                  src="https://cdn-cmnha.nitrocdn.com/ssdsNXemqJEzVtLBNvwluZKjrmcdWeBU/assets/images/optimized/rev-392f8e4/www.soulandlane.com/wp-content/uploads/2022/09/Black-Brick-Fireplace-768x960.jpg"
                  className="img-fluid w-100"
                  alt=""
                />
                <div className="card border-0 card-bg rounded-0">
                  <div className="text-center text-white">
                    <p className="fs-3 p-3">Award Winning Studio Since 1990</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-5">
            <h1>
              <span className="titleS light-bg p-1">HISTORY</span> of Our
              Creation
            </h1>
            <p className="mt-5">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <p className="mt-4">
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor.
            </p>
            <div className="row">
              <div className="col-lg-6 col-12 mt-5">
                <p>
                  <span>
                    <i className="bi bi-check-lg fs-5 titleS"></i>
                  </span>{" "}
                  Award Winning
                </p>
              </div>
              <div className="col-lg-6 col-12">
                <p>
                  <span>
                    <i className="bi bi-check-lg fs-5 titleS"></i>
                  </span>{" "}
                  24/7 Support
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12 ">
                <p>
                  <span>
                    <i className="bi bi-check-lg fs-5 titleS"></i>
                  </span>{" "}
                  Professional Staff
                </p>
              </div>
              <div className="col-lg-6 col-12 ">
                <p>
                  <span>
                    <i className="bi bi-check-lg fs-5 titleS"></i>
                  </span>{" "}
                  Fair Prices
                </p>
              </div>
            </div>
            <div className="d-flex">
              <button className="mt-5 text-white btn-bg border-0 fs-5 px-4 py-2">
                Read More
              </button>
              <span className="mt-5 icon  ms-3 d-flex align-items-center justify-content-center">
                <i className="fs-5 bi bi-facebook"></i>
              </span>
              <span className="mt-5 icon  ms-3 d-flex align-items-center justify-content-center">
                <i className="fs-5 bi bi-twitter"></i>
              </span>
              <span className="mt-5 icon  ms-3 d-flex align-items-center justify-content-center">
                <i className="fs-5 bi bi-instagram"></i>
              </span>
              <span className="mt-5 icon  ms-3 d-flex align-items-center justify-content-center">
                <i className="fs-5 bi bi-linkedin"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center mt-5 pt-5">
          Why People <span className="light-bg titleS px-1">CHOOSE US</span>
        </h1>
        <div className="row mt-5">
          <div className="col-lg-4 col-12 mt-5">
            <div className="">
              <i className="bi bi-calendar2-range-fill icon-fs d-flex justify-content-center titleS"></i>
              <p className="fs-5 fw-bold text-center mt-2">
                25+ Years Experience
              </p>
              <p className="text-center text-muted">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 mt-5">
            <div className="">
              <i className="bi bi-list-check icon-fs d-flex justify-content-center titleS"></i>
              <p className="fs-5 fw-bold text-center mt-2">
                Best Interior Design
              </p>
              <p className="text-center text-muted">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 mt-5">
            <div className="">
              <div className="d-flex justify-content-center">
                <FontAwesomeIcon
                  icon={faPenRuler}
                  className="icon-fs d-flex justify-content-center titleS"
                />
              </div>
              <p className="fs-5 fw-bold text-center mt-2">
                Innovative Architects
              </p>
              <p className="text-center text-muted">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
          </div>
        </div>
        <div className="row mt -5">
          <div className="col-lg-4 col-12 mt-5">
            <div className="">
              <i className="bi bi-person-fill icon-fs d-flex justify-content-center titleS"></i>
              <p className="fs-5 fw-bold text-center mt-2">
                Customer Satisfaction
              </p>
              <p className="text-center text-muted">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 mt-5">
            <div className="">
              <div className="d-flex justify-content-center">
                <FontAwesomeIcon
                  icon={faHandHoldingDollar}
                  className="icon-fs d-flex justify-content-center titleS"
                />
              </div>
              <p className="fs-5 fw-bold text-center mt-2">Budget Friendly</p>
              <p className="text-center text-muted">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 mt-5">
            <div className="">
              <i className="bi bi-check-lg icon-fs d-flex justify-content-center titleS"></i>
              <p className="fs-5 fw-bold text-center mt-2">
                Sustainable Material
              </p>
              <p className="text-center text-muted">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end about */}
      {/* projects */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-5 col-12 bg-col">
            <div className="d-flex justify-content-center align-items-center text-white flex-column h-100 mt-3">
              <h1>
                Our Latest{" "}
                <span className="titleS bg-white px-2">PROJECTS</span>
              </h1>

              <p className="text-center text-white">
                <span className="fs-1 pt-5">6</span>of our latest projects
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="row">
              <div className="col-lg-4 col-12 g-0 overflow-hidden">
                <div className="bg-img  ">
                  <div className="bg-leanr">
                    <div className=" ms-3 fs-5 fw-bold text-text d-flex h-100 flex-column justify-content-end text-white">
                      <p className="mb-0">Kitchen</p>
                      <p className="">72 Projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 g-0 overflow-hidden">
                <div className="bg-img1">
                  <div className="bg-leanr">
                    <div className=" ms-3 fs-5 fw-bold text-text d-flex h-100 flex-column justify-content-end text-white">
                      <p className="mb-0">Bathroom</p>
                      <p className="">67 Projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 g-0 overflow-hidden">
                <div className="bg-img2">
                  <div className="bg-leanr">
                    <div className=" ms-3 fs-5 fw-bold text-text d-flex h-100 flex-column justify-content-end text-white">
                      <p className="mb-0">Bedroom</p>
                      <p className="">53 Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-12 g-0 overflow-hidden">
                <div className="bg-img3">
                  <div className="bg-leanr">
                    <div className=" ms-3 fs-5 fw-bold text-text d-flex h-100 flex-column justify-content-end text-white">
                      <p className="mb-0">Living Room</p>
                      <p className="">33 Projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 g-0 overflow-hidden">
                <div className="bg-img4">
                  <div className="bg-leanr">
                    <div className=" ms-3 fs-5 fw-bold text-text d-flex h-100 flex-column justify-content-end text-white">
                      <p className="mb-0">Furniture</p>
                      <p className="">87 Projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 g-0 overflow-hidden">
                <div className="bg-img5">
                  <div className="bg-leanr">
                    <div className=" ms-3 fs-5 fw-bold text-text d-flex h-100 flex-column justify-content-end text-white">
                      <p className="mb-0">Rennovation</p>
                      <p className="">69 Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end projects */}
      {/* services */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-5 col-12 mt-5">
            <p className="fs-1 mt-5">
              Our Creative{" "}
              <span className="titleS light-bg px-1">SERVICES</span>
            </p>
            <p className="text-muted mt-5">
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <p className="text-muted">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <div className="d-flex mt-5">
              <i className="bi bi-telephone-fill fs-2 text-white icons"></i>
              <div className="p-bg px-4">
                <p className="mb-0 titleS fw-bold fs-4 mt-2">+0123456789</p>
                <p className="text-muted">
                  Call us direct 24/7 for get a free consultation
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="row">
              <div className="col-lg-6 col-12 g-0">
                <div className="card light-bg1 p-4 border-0 rounded-0">
                  <div className="img-bg">
                    <p className="light-bg1 w-50 fs-5">Interior Design</p>
                  </div>
                  <p className="mt-4 mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12 g-0">
                <div className="card light-bg2 p-4 border-0 rounded-0">
                  <div className="img-bg1">
                    <p className="light-bg2 w-50 fs-5">Implement</p>
                  </div>
                  <p className="mt-4 mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12 g-0">
                <div className="card light-bg2 p-4 border-0 rounded-0">
                  <div className="img-bg2">
                    <p className="light-bg2 w-50 fs-5">Renovation</p>
                  </div>
                  <p className="mt-4 mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12 g-0">
                <div className="card light-bg1 p-4 border-0 rounded-0">
                  <div className="img-bg3">
                    <p className="light-bg1 w-50 fs-5">Commercial</p>
                  </div>
                  <p className="mt-4 mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end services */}
      {/* personal */}
      <div className="light-bg mt-5">
        <div className="container pt-5">
          <p className="title-fs">
            Our Professional <span className="titleS">DESIGNERS</span>
          </p>
          <div className="row">
            <div className="col-lg-3 col-12 mb-5">
              <div className="position-relative zoom overflow-hidden">
                <img
                  src="https://themewagon.github.io/iStudio/img/team-1.jpg"
                  className="img-fluid zoom1"
                  alt=""
                />
                <div className="bg-leanr1"></div>
                <div className="position-absolute bottom-0 text-white px-4 text-text">
                  <p className="mb-0 tit-bg">Architect</p>
                  <p className="fs-4">Boris Johnson</p>
                  <div className="d-flex gap-2 mb-3">
                    <i className="bi bi-facebook icon-bg d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-twitter icon-bg d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-instagram icon-bg d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-linkedin icon-bg d-flex justify-content-center align-items-center"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 mb-5">
              <div className="position-relative zoom overflow-hidden">
                <img
                  src="https://themewagon.github.io/iStudio/img/team-2.jpg"
                  className="img-fluid zoom1"
                  alt=""
                />
                <div className="bg-leanr1"></div>
                <div className="position-absolute bottom-0 text-white px-4 text-text">
                  <p className="mb-0 tit-bg">Architect</p>
                  <p className="fs-4">Boris Johnson</p>
                  <div className="d-flex gap-2 mb-3">
                    <i className="bi bi-facebook icon-bg d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-twitter icon-bg d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-instagram icon-bg d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-linkedin icon-bg d-flex justify-content-center align-items-center"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 mb-5">
              <div className="position-relative zoom overflow-hidden">
                <img
                  src="https://themewagon.github.io/iStudio/img/team-3.jpg"
                  className="img-fluid zoom1"
                  alt=""
                />
                <div className="bg-leanr1"></div>
                <div className="position-absolute bottom-0 text-white px-4 text-text">
                  <p className="mb-0 tit-bg">Architect</p>
                  <p className="fs-4">Boris Johnson</p>
                  <div className="d-flex gap-2 mb-3">
                    <i className="bi bi-facebook icon-bg d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-twitter icon-bg d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-instagram icon-bg d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-linkedin icon-bg d-flex justify-content-center align-items-center"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 mb-5">
              <div className="position-relative zoom overflow-hidden">
                <img
                  src="https://themewagon.github.io/iStudio/img/team-4.jpg"
                  className="img-fluid zoom1"
                  alt=""
                />
                <div className="bg-leanr1"></div>
                <div className="position-absolute bottom-0 text-white px-4 text-text">
                  <p className="mb-0 tit-bg">Architect</p>
                  <p className="fs-4">Boris Johnson</p>
                  <div className="d-flex gap-2 mb-3">
                    <i className="bi bi-facebook icon-bg d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-twitter icon-bg d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-instagram icon-bg d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-linkedin icon-bg d-flex justify-content-center align-items-center"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 col-12 mt-5">
            <div className="mt-5 position-relative">
              <div className="cart1">
                <div className="position-absolute translate-middle top-50 start-50 w-100">
                  <div
                    id="Carousel1"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#Carousel1"
                        data-bs-slide-to="0"
                        className="active"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#Carousel1"
                        data-bs-slide-to="1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#Carousel1"
                        data-bs-slide-to="2"
                      ></button>
                    </div>

                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-lg-6 col-12">
                            <img
                              src="https://themewagon.github.io/iStudio/img/testimonial-1.jpg"
                              className="img-fluid ms-5"
                              alt=""
                            />
                          </div>
                          <div className="col-lg-6 col-12">
                            <div className="mt-5 ms-5">
                              <p className="fs-4 fw-bold">
                                Sustainable Material
                              </p>
                              <p className="text-muted">
                                Aliqu diam amet diam et eos labore. Clita erat
                                ipsum et lorem et sit, sed stet no labore lorem
                                sit. Sanctus clita duo justo et tempor eirmod
                                magna dolore erat amet
                              </p>
                              <p className="fw-bold fs-5">
                                _____ Boris Johnson
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-lg-6 col-12">
                            <img
                              src="https://themewagon.github.io/iStudio/img/testimonial-2.jpg"
                              className="img-fluid ms-5"
                              alt=""
                            />
                          </div>
                          <div className="col-lg-6 col-12">
                            <div className="mt-5 ms-5">
                              <p className="fs-4 fw-bold">
                                Costomer Satisfaction
                              </p>
                              <p className="text-muted">
                                Aliqu diam amet diam et eos labore. Clita erat
                                ipsum et lorem et sit, sed stet no labore lorem
                                sit. Sanctus clita duo justo et tempor eirmod
                                magna dolore erat amet
                              </p>
                              <p className="fw-bold fs-5">
                                _____ Alexander Bell
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-lg-6 col-12">
                            <img
                              src="https://themewagon.github.io/iStudio/img/testimonial-3.jpg"
                              className="img-fluid ms-5"
                              alt=""
                            />
                          </div>
                          <div className="col-lg-6 col-12">
                            <div className="mt-5 ms-5">
                              <p className="fs-4 fw-bold">Budget Friendly</p>
                              <p className="text-muted">
                                Aliqu diam amet diam et eos labore. Clita erat
                                ipsum et lorem et sit, sed stet no labore lorem
                                sit. Sanctus clita duo justo et tempor eirmod
                                magna dolore erat amet
                              </p>
                              <p className="fw-bold fs-5">
                                _____ Bradley Gordon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end personal */}
      {/* contact */}
      <div className="row mt-5 g-0">
        <div className="col-lg-5 col-12 mt-5 g-0 ">
          <img
            src="https://cdn.home-designing.com/wp-content/uploads/2023/04/modern-houses.jpg"
            height={500}
            className="w-100"
            alt=""
          />
        </div>
        <div className="col-lg-7 col-12 mt-5 col-bg ">
          <h1 className="pt-5 px-5 mt-5">
            {" "}
            Subscribe the{" "}
            <span className="titleS light-bg px-2">NEWSLETTER</span>{" "}
          </h1>
          <input type="email" className="form-control w-75 ms-5 border-0 mt-5 p-3 fs-5" placeholder="Enter Your Email" />
          <p className="ms-5 mt-3 text-muted">Diam sed sed dolor stet amet eirmod</p>
        </div>
      </div>
      {/* end contact */}
      {/* footer */}
      <div className="dark-bg">
            <div className="container text-white">
        <div className="row">
          <div className="col-lg-3 col-12 mt-5">
            <p className="fs-3">ISTUDIO</p>
            <p className="color">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor</p>
          </div>
          <div className="col-lg-3 col-12 mt-5">
            <p className="fs-3">Get In Touch</p>
            <div className="d-flex gap-2 color">
              <i className="bi bi-geo-alt-fill"></i>
              <p>123 Street, New York, USA</p>
            </div>
              <div className="d-flex gap-2 color">
              <i className="bi bi-telephone-fill"></i>
              <p>+012 345 67890</p>
            </div>
              <div className="d-flex gap-2 color">
              <i className="bi bi-envelope-fill"></i>
              <p>info@example.com</p>
            </div>
              <div className="d-flex gap-2 mb-3">
                    <i className="bi bi-facebook icon-bg1 d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-twitter icon-bg1 d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-instagram icon-bg1 d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-linkedin icon-bg1 d-flex justify-content-center align-items-center"></i>
                    <i className="bi bi-youtube icon-bg1 d-flex justify-content-center align-items-center"></i>
                  </div>
          </div>
          <div className="col-lg-3 col-12 mt-5">
            <p className="fs-3">Popular Link</p>
            <ul className="list-unstyled">
              <li className="color hov"><span>&gt;</span> About Us</li>
              <li className="color hov"><span>&gt;</span> Contact Us</li>
              <li className="color hov"><span>&gt;</span> Privacy Policy</li>
              <li className="color hov"><span>&gt;</span> Terms & Condition</li>
              <li className="color hov"><span>&gt;</span> Career</li>
            </ul>
          </div>
          <div className="col-lg-3 col-12 mt-5">
            <p className="fs-3">Our Services</p>
              <ul className="list-unstyled">
              <li className="color hov"><span>&gt;</span> Interior Design</li>
              <li className="color hov"><span>&gt;</span> Project Planning</li>
              <li className="color hov"><span>&gt;</span> Renovation</li>
              <li className="color hov"><span>&gt;</span> Implement</li>
              <li className="color hov"><span>&gt;</span> Landscape Design</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-7 col-12">
            <p className="color">&copy; <a href="#" className="text-white">Your Site Name,</a> All Right Reserved. Designed By <a href="#" className="text-white">HTML Codex.</a> Distributed by <a href="#" className="text-white"> ThemeWagon</a></p>
          </div>
          <div className="col-lg-5 col-12">
            <div className="d-flex justify-content-end">
              <p className="">Home</p>
            <p className="border-start ms-3 px-2">Cookies</p>
            <p className="border-start ms-3 px-2">Help</p>
            <p className="border-start ms-3 px-2">FAQS</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* end footer */}
    </div>
  );
}
export default Home;
