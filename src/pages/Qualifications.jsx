import React from "react";
import qualifications from "../data/Qualification";
import QualificationComponent from "../components/QualificationComponent";

function Qualifications() {
  return (
    <div>
      <h1 className="primary_heading ">
        Qualification <div className="primary_line_of_heading"></div>{" "}
      </h1>
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
    </div>
  );
}

export default Qualifications;
