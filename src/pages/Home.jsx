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
        <p style={{fontWeight:"normal", fontSize:"20px"}}>
        Motivated and ambitious student who recently completed a Bachelor's degree in Computer Applications (BCA). I specialize in full stack development .
        </p>
       <button>About Me</button>
       <button>Resume</button>
      </div>

      <div className="right_container">
        <div className="image_container">
          <img src={dp} alt="" /> 
        </div>
      </div>
    </section>
  );
}

export default Home;
