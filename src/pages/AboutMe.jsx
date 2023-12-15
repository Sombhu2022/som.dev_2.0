import React from 'react'
import '../style/about.scss'
import Qualifications from './Qualifications'

function AboutMe() {
  return (
    <section className='about_container' id='about'>
      <h1 className="primary_heading ">About Me <div className='primary_line_of_heading'></div> </h1>
      <div className='image_container'>
        <img src="" alt="" />
      </div>
      <Qualifications/>
    </section>
  )
}

export default AboutMe