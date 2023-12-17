import React from "react";

function ProjectComponent({ name, des, image, technologys, options , img_alt }) {
    // console.log(options , images )
  return (
    <div className="project" data-aos="zoom-in-up">
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
                <img src={image} alt={img_alt}/>
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
