import React from 'react'

function QualificationComponent({deegre , institute , course , year , per}) {
  return (
    <div className='qualification'>
        <div>{deegre}</div>
        <div>
            <h3>{institute}</h3>
            <p>{course}</p>
            <span>{year}</span>
            <span>{per}</span>
        </div>
    </div>
  )
}

export default QualificationComponent