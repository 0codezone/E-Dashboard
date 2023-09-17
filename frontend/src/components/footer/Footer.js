import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer className="footer">
      {/* <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>

            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <i className="fab fa-facebook"> Facebook</i>
            </li>
            <li>
              <i className="fab fa-linkedin"> Linkedin</i>
            </li>
            <li>
              <i className="fab fa-instagram">Instagram</i>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="footer-bottom">
        <p>
          &copy; 2023 Your Company Name. All Rights Reserved. | Privacy Policy |
          Terms of Service
        </p>
      </div>
    </footer>
  );
}

export default Footer;
