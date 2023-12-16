import React from 'react'
import '../style/footer.scss'

function Footer() {
  return (
    <footer className='footer'>
        
          <p>
         Copyright © 2023 Sombhu Das. All rights reserved.
       </p>
       <p>
       <span className="abs_pos git_icon">
            <a href="mailto:sombhudas93@gmail.com">
            <i class="fa-solid fa-envelope"></i>
            </a>
          </span>
      
          <span className=" abs_pos ln_icon">
          <a href="https://www.linkedin.com/in/sombhu-das-21176823a/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

          </span>
          <span className="abs_pos git_icon">
            <a href="https://github.com/Sombhu2022">
              <i className="fa-brands fa-github"></i>              
            </a>
          </span>
       </p>
    
    </footer>
  )
}

export default Footer