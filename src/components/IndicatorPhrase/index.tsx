import React from 'react'
import Phrase from './Phrase'
import './indicatorPhrase.css'

const IndicatorPhrase = () => {
  return (
    <ul className="indicatorPharase">
      <Phrase indicator={700} indicatorType="person" description="여행자" />
      <Phrase indicator={100} indicatorType="thing" description="여행 리뷰" />
      <Phrase indicator={470} indicatorType="thing" description="여행 일정" />
    </ul>
  )
}

export default IndicatorPhrase
