import React from 'react'

function SkillComponent({name , image}) {
  return (
    <div className='skill'>
        <img src={image} alt="" />
        {/* <span className='name'>{name}</span> */}
    </div>
  )
}

export default SkillComponent