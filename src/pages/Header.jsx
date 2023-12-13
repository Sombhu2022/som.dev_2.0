import React from "react";
import '../style/header.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook,  faBrain, faCode, faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
   <header className="header_container">
      <nav class="nav_container" id="links">
        <div className="logo_container">SOMBHU DAS</div>
        <div className="nav_links mobile_nav">
          <Link className="link">
              <FontAwesomeIcon className="icon" icon={faHouse}/> 
              <span>Home</span> 
          </Link >
          <Link className="link">
              <FontAwesomeIcon className="icon" icon={faAddressBook}/> 
              <span>About</span> 
          </Link>
          <Link className="link">
              <FontAwesomeIcon className="icon" icon={faBrain}/> 
              <span>Skills</span> 
          </Link>
          <Link className="link">
              <FontAwesomeIcon className="icon" icon={faCode}/> 
              <span>Project</span> 
          </Link>
          <Link className="link">
              <FontAwesomeIcon className="icon" icon={faPhone}/> 
              <span>Contact</span> 
          </Link>
        </div>      
        </nav>
   </header>
  );
}

export default Header;
