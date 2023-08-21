import React, { useState, useEffect } from "react";
import './NavbarStyles.css';
import {Link} from "react-router-dom"
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsSticky(window.scrollY > document.querySelector("#hero").offsetHeight);
    setIsHidden(window.scrollY < document.querySelector("#hero").offsetHeight);
  };

  return (
    <>
    <header id="head"
      className={`${isSticky ? "sticky" : ""} ${isHidden ? "hidden" : ""}`}
    >
        <Link to="/" className="logo">
        <img style={{ width: "60px", height: "55px" }} src="ro-logo1.png" href="#" />
        </Link>
      <div className="COMPANY button-49">SAMYOG</div>
      <nav>
        <ul>
          <li>
          <Link to="/aboutus" className="linkT"> 
            ABOUT US
            </Link>
          </li>
          <li>
          <Link to="/resources" className="linkT"> 
            RESOURCES
            </Link>
          </li>
          <li>
          
            <Link to="/gallery" className="linkT"> 
            GALLERY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
   
    </>
  );
};

export default Navbar;



/* CSS */
