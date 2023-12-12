import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../style/home.scss";
import dp from "../images/dp.png";


function Home() {
  return (
    <section className="home_container" id="home">
      {/* <h1>home </h1> */}
      <div className="left_container">
        <h1>
          Hii , <br />
          I'm Sombhu Das
        </h1>
        <br />
        <p>
          I am a
          <Typewriter
            cursorColor="violet"
            className="Typewriter"
            words={[" Developer", " Designer", " Student"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={40}
          />
          <br></br>
        </p>
        <p style={{ fontWeight: "normal", fontSize: "20px" }}>
          Motivated and ambitious student who recently completed a Bachelor's
          degree in Computer Applications (BCA). I specialize in full stack
          development .
        </p>
        <button>About Me <i class="fa-solid fa-eject fa-rotate-90"></i></button>
        <button className="active">Resume <i class="fa-solid fa-file fa-fade"></i></button>
        
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
  );
}

export default Home;
