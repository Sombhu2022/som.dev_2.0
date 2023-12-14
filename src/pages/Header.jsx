import React from "react";
import '../style/header.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook,  faBrain, faCode, faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
   <header className="header_container">
      <nav className="nav_container" id="links">
        <div className="logo_container">SOMBHU</div>
        <div className="nav_links mobile_nav">
          <a href={'/#home'} className="link">
              <FontAwesomeIcon className="icon" icon={faHouse}/> 
              <span>Home</span> 
          </a>
          <a href={'/#about'} className="link">
              <FontAwesomeIcon className="icon" icon={faAddressBook}/> 
              <span>About</span> 
          </a>
          <a href={'#skills'} className="link">
              <FontAwesomeIcon className="icon" icon={faBrain}/> 
              <span>Skills</span> 
          </a>
          <a href={'#project'} className="link">
              <FontAwesomeIcon className="icon" icon={faCode}/> 
              <span>Project</span> 
          </a>
          <a href={'#contact'} className="link">
              <FontAwesomeIcon className="icon" icon={faPhone}/> 
              <span>Contact</span> 
          </a>
        </div>      
        </nav>
   </header>
  );
}

export default Header;
