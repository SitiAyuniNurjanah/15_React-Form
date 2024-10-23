import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>ARSHA</h5>
              <p style={{ color: "#5E5E5E" }}>
                A108 Adam Street
                <br />
                New York, NY 535022
                <br />
                United States
              </p>
              <p style={{ color: "#5E5E5E" }}>
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
              </p>
            </div>
            <div className="col-md-3">
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Our Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Our Social Networks</h5>
              <p style={{ color: "#777777" }}>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="social-icon d-inline-flex align-items-center justify-content-center"
                    data-bs-toggle="tooltip"
                    title="Facebook"
                    data-bs-placement="bottom"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="social-icon d-inline-flex align-items-center justify-content-center"
                    data-bs-toggle="tooltip"
                    title="Twitter"
                    data-bs-placement="bottom"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="social-icon d-inline-flex align-items-center justify-content-center"
                    data-bs-toggle="tooltip"
                    title="LinkedIn"
                    data-bs-placement="bottom"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="social-icon d-inline-flex align-items-center justify-content-center"
                    data-bs-toggle="tooltip"
                    title="Instagram"
                    data-bs-placement="bottom"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="social-icon d-inline-flex align-items-center justify-content-center"
                    data-bs-toggle="tooltip"
                    title="WhatsApp"
                    data-bs-placement="bottom"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <footer
        className="footer-bottom text-light py-3"
        style={{ backgroundColor: "#37517E" }}
      >
        <div className="container d-flex justify-content-between">
          <span>
            © Copyright <strong>Arsha</strong> All Rights Reserved
          </span>
          <span>
            Designed by{" "}
            <a href="#" className="footer-link">
              BootstrapMade
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
