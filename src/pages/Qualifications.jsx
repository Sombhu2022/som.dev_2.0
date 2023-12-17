import React from "react";
import qualifications from "../data/Qualification";
import QualificationComponent from "../components/QualificationComponent";
import '../style/qualification.scss'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Qualifications() {
  return (
    <div className="qualification_container" >
      <h1 className="primary_heading ">
        Qualification <div className="primary_line_of_heading"></div>{" "}
      </h1>
      <div className="slider-div" data-aos="fade-left">
      <Carousel infiniteLoop autoPlay showArrows={false} showThumbs={false} showStatus={false} interval={2000} stopOnHover={true}>
      {qualifications.map((qualification) => {
        return (

          <QualificationComponent 
            deegre={qualification.deegre}
            institute={qualification.institute}
            course={qualification.course}
            year={qualification.year}
            per={qualification.percentage}
          />
        );
      })}
      </Carousel>
      </div>
    </div>
  );
}

export default Qualifications;
