import React from "react";

function ProjectComponent({ name, des, image, technologys, options }) {
    // console.log(options , images )
  return (
    <div className="project">
      <div className="project_defination">
        <h3 className="primary_heading">{name}</h3>
        <p>{des}</p>
        <div className="technology_container">
        {technologys.map((tech) => {
            return(<span>{tech}</span>)
        })}
        </div>
      </div>


      <div className="project_image">
        <div className="image_container">
                <img src={image} />
        </div>
        <div className="options">
            { options.map((option)=>{
                return(
                  <a href={option.link}>{option.name}</a>
                )
            })}
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
