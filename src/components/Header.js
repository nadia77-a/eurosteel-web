import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";

const Header = (props) =>{
  const {activeRoute, setActive} = props;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header>
      <div className="py-1 top">
        <div className="container">
          <div className="row">
            <div className="col-sm text-center text-md-left mb-md-0 mb-2 pr-md-4 d-flex topper align-items-center">
              <p className="mb-0 w-100">
                <span className="fa fa-paper-plane"></span>
                <span className="text">info@eurosteel.al</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-7 d-flex topper align-items-center text-lg-right justify-content-end">
              <p className="mb-0 register-link">
                <a href="./#/contact" className="btn btn-primary">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-5">
        <div className="container">
          <div className="row d-flex align-items-start align-items-center px-3 px-md-0">
            <div className="col-md-4 d-flex mb-2 mb-md-0">
              <a className="navbar-brand d-flex align-items-center" href="/">
                <img src={logo} alt="Eurosteel shpk" width={61} height={70} />
                <div className="description">
                  <span className="title"> Eurosteel shpk </span>
                  <span className="subTitle"> Steel consctruction </span>
                </div>
              </a>
            </div>
            <div className="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="fa fa-map"></span>
              </div>
              <div className="pr-md-4 pl-md-3 pl-3 text">
                <p className="con">
                  <span>Free Call</span> <span>+355 (0)69 60 28 431</span>
                </p>
                <p className="con">Call Us Now 24/7 Customer Support</p>
              </div>
            </div>
            <div className="col-md-4 d-flex topper mb-md-0 align-items-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="fa fa-paper-plane"></span>
              </div>
              <div className="text pl-3 pl-md-3">
                <p className="hr">
                  <span>Our Location</span>
                </p>
                <p className="con">Ismet Gusia 36, Tirane, Albania</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container d-flex align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className={"collapse navbar-collapse" + (showMobileMenu ? " show" : "")} id="ftco-nav">
            <ul className="navbar-nav mr-auto">
              <li className={"nav-item a"+ (activeRoute ==="home" ? " active":"")} onClick={()=>setActive("home")}>
                <a href="./#" className="nav-link">
                  Home
                </a>
              </li>

              <li className={"nav-item" + (activeRoute ==="services" ? " active":"")} onClick={()=>setActive("services")}>
                <a href="./#/services" className="nav-link">
                  Services
                </a>
              </li>
              <li className={"nav-item" + (activeRoute ==="projects" ? " active":"")} onClick={()=>setActive("projects")}>
                <a href="./#/projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li className={"nav-item" + (activeRoute ==="about" ? " active":"")} onClick={()=>setActive("about")}>
                <a href="./#/about" className="nav-link">
                  About Us
                </a>
              </li>
              <li className={"nav-item" + (activeRoute ==="contact" ? " active":"")} onClick={()=>setActive("contact")}>
                <a href="./#/contact" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default  Header