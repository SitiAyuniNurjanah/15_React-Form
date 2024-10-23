import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-img.png";
import "../assets/styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <section
        className="text-light py-5"
        style={{ backgroundColor: "#37517E" }}
      >
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Better Solutions For Your Business</h1>
              <p className="mb-5">
                We are a team of talented designers making websites with
                Bootstrap
              </p>
              <Link
                to="/create-product"
                className="btn text-white me-2 mt-4 custom-btn"
              >
                Get Started
              </Link>
              <a
                href="#"
                className="btn text-white mt-4 custom-btn"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
              >
                Watch Video
              </a>
            </div>
            <div className="col-md-6">
              <img src={heroImg} className="img-fluid" alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-5" style={{ backgroundColor: "#F3F5FA" }}>
        <div className="container text-center">
          <h2 style={{ color: "#37517E" }}>Join Our Newsletter</h2>
          <p style={{ color: "#444444" }}>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="d-flex align-items-center mt-3">
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    style={{ width: "950px" }}
                  />
                  <button
                    className="btn text-light rounded-pill"
                    type="button"
                    style={{ backgroundColor: "#47B2E4" }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;