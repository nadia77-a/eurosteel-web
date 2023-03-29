
import Header from "../components/Header";
import Footer from "../components/Footer";

import React, { useEffect } from "react";

 const Services = (props) => {
  const { activeRoute, setActive } = props;
  useEffect(() => {
    setActive("services");
  }, [setActive]);
  return (
    <>
      <Header activeRoute={activeRoute} setActive={setActive}/>

      <section className="about hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-start">
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="./#">
                    Home <i className="fa fa-chevron-right"></i>
                  </a>
                </span>{" "}
                <span>
                  Services <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-3 bread">Services</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-half-light">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-2">
              <div className="col-md-8 text-center heading-section ftco-animate fadeInUp ftco-animated">
                <span className="subheading">Our Services</span>
                <h2 className="mb-4">We Offer Services</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="services-wrap ftco-animate fadeInUp ftco-animated service1">
                  <div className="img"></div>
                  <div className="text">
                    <div className="icon">
                      <span className="flaticon-architect"></span>
                    </div>
                    <h2>Pipes</h2>
                    <p>Eurosteel develops your projects looking for the most constructive and economical solution.</p>
                    <a href="#" className="btn-custom">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-wrap ftco-animate fadeInUp ftco-animated service2">
                  <div className="img"></div>
                  <div className="text">
                    <div className="icon">
                      <span className="flaticon-worker"></span>
                    </div>
                    <h2>Energy</h2>
                    <p>Eurosteel develops your projects looking for the most constructive and economical solution.</p>
                    <a href="/#" className="btn-custom">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-wrap ftco-animate fadeInUp ftco-animated service3">
                  <div className="img"></div>
                  <div className="text">
                    <div className="icon">
                      <span className="flaticon-hammer"></span>
                    </div>
                    <h2>Special Envelopes</h2>
                    <p>Eurosteel develops your projects looking for the most constructive and economical solution.</p>
                    <a href="#" className="btn-custom">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-wrap ftco-animate fadeInUp ftco-animated service3">
                  <div className="img"></div>
                  <div className="text">
                    <div className="icon">
                      <span className="flaticon-hammer"></span>
                    </div>
                    <h2>Heavy Lift</h2>
                    <p>Eurosteel develops your projects looking for the most constructive and economical solution.</p>
                    <a href="/#" className="btn-custom">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
      <Footer/>
    </>
  )
}

export default Services;