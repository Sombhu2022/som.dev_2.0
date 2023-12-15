import React, { useState } from "react";
import "../style/skills.scss";
import data from "../data.json";

import html from "../images/skills/html.png";
import css from "../images/skills/css.png";
import scss from "../images/skills/sass.png";
import js from "../images/skills/js.png";
import react from "../images/skills/reactjs.png";
import node from "../images/skills/node.png";
import express from "../images/skills/ex.png";
import mongo from "../images/skills/mongo.png";
import git from "../images/skills/git.png";
import php from "../images/skills/php.png";
import django from "../images/skills/django.png";
import boots from "../images/skills/boots.png";
import SkillComponent from "../components/SkillComponent";
import Api from "../images/skills/api.png"
import figma from "../images/skills/figma.png"
import mysql from "../images/skills/mysql.jpg"

function Skills() {
  const [skill , setSkill] = useState([
    {frontend: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "Java Script", logo: js },
      { name: "Bootstrap", logo: boots },
      { name: "SASS", logo: scss },
      { name: "React", logo: react},
    ]},
   { backend: [
      { name: "Node", logo: node },
      { name: "Express", logo: express },
      { name: "Django", logo: django },
      { name: "PHP", logo: php },
      
    ]},
    {database: [
      
      { name: "MongoDB", logo: mongo },
      { name: "MySql", logo: mysql},
    ]},
   { others: [

      { name: "git & github", logo: git},
      { name: "Figma", logo: figma},
      { name: "Api", logo: Api},
    ]}
  ]);

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
