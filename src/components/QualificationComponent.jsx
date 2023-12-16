import React from 'react'

function QualificationComponent({deegre , institute , course , year , per}) {
  return (
    <div className='slider-class qualification'>
        <div className='deegre'>{deegre}</div>
        <div>
            <h3 className='primary_heading'>{institute}</h3>
            <p>{course}</p>
            <b>{year}</b>
            <b>{per}</b>
        </div>
    </div>
  )
}

export default QualificationComponent