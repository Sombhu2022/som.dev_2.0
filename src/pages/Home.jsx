import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../style/home.scss";
import dp from "../images/dp.png";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <section className="home_container" id="home">
        {/* <h1>home </h1> */}
        <div className="left_container">
          <h1 className="primary_heading">
            Hii , <br />
            I'm Sombhu Das
          </h1>
          <br />
          <br />
          <p className="typewriter_container">
            A
            <Typewriter
              cursorColor="violet"
              className="Typewriter"
              words={[" Web Developer", " Designer", " IT Student"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={40}
            />
          </p>
          <p className="description_para">
            I specialize in creating dynamic and responsive websites that not
            only look great but also provide an excellent user experience. From
            front-end design to back-end development.
          </p>
          <button>
            About Me <i class="fa-solid fa-eject fa-rotate-90"></i>
          </button>
          <button className="active">
            Resume <i class="fa-solid fa-file fa-fade"></i>
          </button>
        </div>

        <div className="right_container">
          <div className="image_container">
            <img src={dp} alt="" />
            <span className=" abs_pos fb_icon">
              <a href="https://www.facebook.com/sombhu.das.5268?mibextid=ZbWKwL">
                <i className="primary_icon fa-brands fa-facebook"></i>
              </a>
            </span>
            <span className=" abs_pos ln_icon">
              <a href="https://www.linkedin.com/in/sombhu-das-21176823a/">
                <i className="primary_icon fa-brands fa-linkedin-in"></i>
              </a>
            </span>
            <span className="abs_pos git_icon">
              <a href="https://github.com/Sombhu2022">
                <i className="primary_icon fa-brands fa-github"></i>
              </a>
            </span>
          </div>
        </div>
      </section>

      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer/>
    </>
  );
}

export default Home;
