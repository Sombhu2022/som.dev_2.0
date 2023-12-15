import React from "react";
import { Carousel } from "react-responsive-carousel";
import ProjectComponent from "../components/ProjectComponent";
import projects from "../data/projectData";
import '../style/project.scss'


function Projects() {
  return (
    <section className="projects_container" id="project">
      <h1 className="primary_heading ">
        Projects<div className="primary_line_of_heading"></div>{" "}
      </h1>
      {projects.map((project, index) => {
        console.log(project.image)
        return(<ProjectComponent
          key={index}
          name={project.name}
          des={project.description}
          image={project.image}
          technologys={project.technology}
          options={project.option}
        />);
        
      })}
    </section>
  );
}

export default Projects;
