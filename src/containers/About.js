import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <section className="about hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-start">
            <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="fa fa-chevron-right"></i>
                  </a>
                </span>{" "}
                <span>
                  About Us <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-3 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section" id="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="about-wrap img w-100">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-crane"></span>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-5 pl-md-5">
              <div className="row justify-content-center mb-4 pt-md-4">
                <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                  <span className="subheading">Welcome to Eurosteel</span>
                  <h2 className="mb-4">Eurosteel an industrial group</h2>
                  <div className="d-flex about">
                    <div className="icon">
                      <span className="flaticon-hammer"></span>
                    </div>
                    <h3>We're in this business since 1975 and We provide the best insdustrial services</h3>
                  </div>
                  <p>
                    Eurosteel operates worldwide in the design, supply and erection of complex steel structures ranging from bridges and stadiums, to
                    architecturally complex buildings and structures for the Off-shore and Oil & Gas sectors, these being either commodities (pipes,
                    plate girders, etc..) or complete assemblies (modules, platforms, pressure vessels, etc.).
                  </p>
                  <div className="d-flex video-image align-items-center mt-md-4">
                    <a href="#" className="video img d-flex align-items-center justify-content-center">
                      <span className="fa fa-play-circle"></span>
                    </a>
                    <h4 className="ml-4">This is how we work on our clients, Watch video</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
