import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="ftco-footer">
      <div className="container mb-5 pb-4">
        <div className="row">
          <div className="col-lg col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2 d-flex align-items-center">About</h2>
              <p>Experience, dedication and passion for engineering are key points that determine the way we work.</p>
              <ul className="ftco-footer-social list-unstyled mt-4">
                <li>
                  <a href="#">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">Links</h2>
              <div className="d-flex">
                <ul className="list-unstyled mr-md-4">
                  <li>
                    <a href="./#/services">
                      <span className="fa fa-chevron-right mr-2"></span>Projects
                    </a>
                  </li>
                  <li>
                    <a href="./#/services">
                      <span className="fa fa-chevron-right mr-2"></span>Services
                    </a>
                  </li>
                  <li>
                    <a href="./#/about">
                      <span className="fa fa-chevron-right mr-2"></span>About Us
                    </a>
                  </li>
                  <li>
                    <a href="./#/contact">
                      <span className="fa fa-chevron-right mr-2"></span>Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="fa fa-map-marker mr-3"></span>
                    <span className="text">Ismet Gusia 36, Tirane, Albania</span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-phone mr-3"></span>
                      <span className="text">+355 (0)69 60 28 431</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-paper-plane mr-3"></span>
                      <span className="text">info@eurosteel.al</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aside-stretch py-3">
              <p className="mb-0">
                Copyright ©<script>document.write(new Date().getFullYear());</script>2023 All rights reserved | This template is made with{" "}
                by{" "} Eurosteel
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}
