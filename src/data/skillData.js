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
import Api from "../images/skills/api.png"
import figma from "../images/skills/figma.png"
import mysql from "../images/skills/mysql.jpg"


const skill = [
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
]

export default skill