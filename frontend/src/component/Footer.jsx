import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>RapidStack</h2>
          <p>Building modern, scalable, and beautiful digital solutions.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@rapidstack.com</p>
          <p>Phone: +91 7667761697</p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RapidStack. All rights reserved.</p>
      </div>
    </footer>
  );
}
