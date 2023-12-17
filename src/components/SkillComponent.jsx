import React from 'react'

function SkillComponent({name , image}) {
  return (
    <div className='skill' >
        <img src={image} alt="" />
        <p className='name'>{name}</p>
    </div>
  )
}

export default SkillComponent