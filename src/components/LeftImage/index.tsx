import React from 'react'
import './leftImage.css'

const LeftImage = () => {
  return (
    <div className="leftImage">
      <small className="indicatorStandard">2021년 12월 기준</small>
      <img
        width="400px"
        height="338px"
        src={`${process.env.PUBLIC_URL}/assets/triple2x.png`}
        alt="triple"
      />
    </div>
  )
}

export default LeftImage
