import React from "react";
import "./Footer.css";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-row">
          <div className="footer-column">
            <h3 className="H3" id="visitUs" style={{ color: "#20E7F4", fontSize: "1.65rem" }}>VISIT US</h3>
            <p className="para">
              JSS Academy of Technical Education
              <br />
              Dr.Vishnuvardhan Road
              <br />
              Uttarahalli <br />
              Srinivaspura-Post
              <br />
              Bengaluru – 560 060
            </p>
          </div>
          <div className="footer-column">
            <h3 className="H3 con"
              style={{
                color: "#20E7F4",
                fontSize: "1.65rem",
                marginBottom: "1px"
              }}
            >
              CONNECT
            </h3>
            <a className="linkF" href="mailto:isesamyog@gmail.com" class="email-link">
              isesamyog@gmail.com
            </a>
            <p className="para" id="par123">9632908348</p>

            <h3 className="H3 mi"
              style={{
                color: "#20E7F4",
                fontSize: "1.65rem",
                marginBottom: "1px"
              }}
            >
              MORE INFO
            </h3>
            <a className="linkF" id="mrIFJss" href="https://www.jssateb.ac.in/is_engg" class="email-link">
              JSSATEB
            </a>
          </div>
          <div className="footer-column">
            <h3 className="H3" id="styUpToDate" style={{ color: "#20E7F4", fontSize: "1.65rem" }}>
              STAY UP TO DATE
            </h3>
            <input type="email" placeholder="Subscribe with email" />
            <button
              className="subscribe-button"
              style={{ fontSize: "1.12rem" }}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
        <hr />
        <br />
        <br />
        <div className="footer-row ">
          <div className="footer-column">
            <p className="para" style={{ fontSize: "1.15rem" }}>
              ©2023 Samyog. All rights reserved.
            </p>
          </div>
          <div className="footer-column">
            <p className="para" style={{ fontSize: "1.15rem" }}>Made with passion by <Link to="/team" className="teamPL">appX</Link></p> 
          </div>
          <div className="footer-column social-icons">
            {/* <FontAwesomeIcon icon={faWhatsapp} className="social-icon" /> */}
            <a href="https://www.instagram.com/jssateb_official/"><FontAwesomeIcon icon={faInstagram} className="social-icon" /></a>
            <a href="https://www.facebook.com/JSSATEBlore/"><FontAwesomeIcon icon={faFacebook} className="social-icon" /></a>
            <a href="https://in.linkedin.com/school/j-s-s-academy-of-technical-education-bangalore/"><FontAwesomeIcon icon={faLinkedin} className="social-icon" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
