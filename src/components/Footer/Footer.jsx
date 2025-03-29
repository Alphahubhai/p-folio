import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-contact">
          <h3>
            Let’s Collaborate <br />
            film<span>@</span>Alpha.com
          </h3>

          <p className="secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quasi eligendi sunt dolorum earum, facere inventore totam omnis id ullam veritatis culpa aperiam obcaecati ipsam atque reprehenderit odit debitis doloremque!
          </p>

          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>Home</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/work" className="footer-nav-item">
            <span>Work</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/about" className="footer-nav-item">
            <span>About</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/contact" className="footer-nav-item">
            <span>Contact</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/faq" className="footer-nav-item">
            <span>FAQ</span>
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-header">
          <h1>Alpha</h1>
          <h1>ALpha</h1>
        </div>

        <div className="footer-copyright-line">
          <p className="primary sm">&copy; Alpha 2025</p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
