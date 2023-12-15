import React from "react";
import "../style/skills.scss";

import skill from "../data/skillData"
import SkillComponent from "../components/SkillComponent";


function Skills() {
  
// console.log(skill[0].frontend[0].name)
  return (
    <section id="skills" className="skills_container">
      <h1 className="primary_heading ">
        Skills <div className="primary_line_of_heading"></div>{" "}
      </h1>
      <div className="sub_container">
        {/* {skill[0].frontend} */}
        <div className="skills">
        <h1 className="primary_heading">Frontend</h1>
         
          {skill[0].frontend.map((ele, index) => {
            
            return (
              <SkillComponent key={index} image={ele.logo} name={ele.name}/>

            );
          })}
        </div>
        <div className="skills">
          <h1 className="primary_heading">Backend</h1>
          {skill[1].backend.map((ele, index) => {
            return (
              <SkillComponent key={index} image={ele.logo} name={ele.name}/>
            );
          })}
        </div>

        <div className="skills">
        <h1 className="primary_heading">Database</h1><br/>

          {skill[2].database.map((ele, index) => {
            return (
              <SkillComponent key={index} image={ele.logo} name={ele.name}/>

            );
          })}
        </div>
        <div className="skills">
        <h1 className="primary_heading">Others</h1>

          {skill[3].others.map((ele, index) => {
            return (
              <SkillComponent key={index} image={ele.logo} name={ele.name}/>

            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
