import React from 'react'
import '../style/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'



function ContactMe() {
  return (
    <section id='contact' className='contact_container'>
      <h1 className="primary_heading ">Contact Me <div className='primary_line_of_heading'></div> </h1>
     
      <span className="abs_pos git_icon">
            <a href="tel:917047808326">
            <i class="primary_icon fa-solid fa-phone"></i>
            </a>
          </span>
      <span className="abs_pos git_icon">
            <a href="mailto:sombhudas93@gmail.com">
            <i class="primary_icon fa-solid fa-envelope"></i>
            </a>
          </span>
      
          <span className=" abs_pos ln_icon">
          <a href="https://www.linkedin.com/in/sombhu-das-21176823a/">
              <i className="primary_icon fa-brands fa-linkedin-in"></i>
            </a>

          </span>
          <span className="abs_pos git_icon">
            <a href="https://github.com/Sombhu2022">
              <i className="primary_icon fa-brands fa-github"></i>              
            </a>
          </span>
          <span className="abs_pos git_icon">
            <a href="https://wa.me/917047808326">
            <i class="primary_icon fa-brands fa-whatsapp"></i>              
            </a>
          </span>
         
         

    </section>
  )
}

export default ContactMe