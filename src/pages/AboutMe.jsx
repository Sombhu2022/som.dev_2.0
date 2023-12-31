import React from "react";
import "../style/about.scss";
import Qualifications from "./Qualifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faPhone } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  const message =
    "Hello, and welcome to my digital space! I am currently pursuing my MCA, where I have been honing my skills in various aspects of computer science. My academic journey has equipped me with a strong foundation in programming, algorithms, and software development methodologies.";

  return (
    <section className="about_container" id="about">
      <h1 className="primary_heading ">
        About Me <div className="primary_line_of_heading"></div>{" "}
      </h1>
      <p className="typewriter_container"  data-aos="fade-right">{message}</p>
      <Qualifications  />
      <div>
              
       <a href="#skills" className="button primary_button">My Skill <FontAwesomeIcon className="icon" icon={faBrain}/>  </a>
              
      <a href="#contact" className="button primary_button">contact Me  <FontAwesomeIcon className="icon" icon={faPhone}/> </a>
      </div>
    </section>
  );
}

export default AboutMe;
