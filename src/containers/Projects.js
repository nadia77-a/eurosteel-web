
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect } from "react";

const Projects = (props) => {
  const { activeRoute, setActive } = props;
  useEffect(() => {
    setActive("projects");
  }, [setActive]);
  return (
    <>
      <Header  activeRoute={activeRoute} setActive={setActive}/>

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
                Projects <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-3 bread">Projects</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
                <span className="subheading">Our Global Work Industries</span>
                <h2 className="mb-4">Latest Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="project">
                  <a href="images/project-1.jpg" className="img image-popup d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center mb-5">
                      <span className="fa fa-plus"></span>
                    </div>
                  </a>
                  <div className="text">
                    <span className="subheading">ENGINEERING</span>
                    <h3>Engineering test project</h3>
                    <p>
                      <span className="fa fa-map-marker mr-1"></span> Ismet Gusia 36, Tirane, Albania
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project">
                  <a href="images/project-1.jpg" className="img image-popup d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center mb-5">
                      <span className="fa fa-plus"></span>
                    </div>
                  </a>
                  <div className="text">
                    <span className="subheading">ENGINEERING</span>
                    <h3>Engineering test project</h3>
                    <p>
                      <span className="fa fa-map-marker mr-1"></span> Ismet Gusia 36, Tirane, Albania
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project">
                  <a href="images/project-1.jpg" className="img image-popup d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center mb-5">
                      <span className="fa fa-plus"></span>
                    </div>
                  </a>
                  <div className="text">
                    <span className="subheading">ENGINEERING</span>
                    <h3>Engineering test project</h3>
                    <p>
                      <span className="fa fa-map-marker mr-1"></span> Ismet Gusia 36, Tirane, Albania
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project">
                  <a href="images/project-1.jpg" className="img image-popup d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center mb-5">
                      <span className="fa fa-plus"></span>
                    </div>
                  </a>
                  <div className="text">
                    <span className="subheading">ENGINEERING</span>
                    <h3>Engineering test project</h3>
                    <p>
                      <span className="fa fa-map-marker mr-1"></span> Ismet Gusia 36, Tirane, Albania
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project">
                  <a href="images/project-1.jpg" className="img image-popup d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center mb-5">
                      <span className="fa fa-plus"></span>
                    </div>
                  </a>
                  <div className="text">
                    <span className="subheading">ENGINEERING</span>
                    <h3>Engineering test project</h3>
                    <p>
                      <span className="fa fa-map-marker mr-1"></span> Ismet Gusia 36, Tirane, Albania
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project">
                  <a href="images/project-1.jpg" className="img image-popup d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center mb-5">
                      <span className="fa fa-plus"></span>
                    </div>
                  </a>
                  <div className="text">
                    <span className="subheading">ENGINEERING</span>
                    <h3>Engineering test project</h3>
                    <p>
                      <span className="fa fa-map-marker mr-1"></span> Ismet Gusia 36, Tirane, Albania
                    </p>
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


export default Projects;