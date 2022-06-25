import React from 'react'
import Phrase from './Phrase'
import useIncrementTimeout from '../../hooks/useIncrementTimeout'
import './indicatorPhrase.css'

const IndicatorPhrase = () => {
  const endTravelers = 700
  const endTravelReviews = 100
  const endTravelPlans = 470

  //아래 훅은 slowerRate 와 initInterval 인자로 시간 증가 속도를 조정할 수 있습니다.
  const travelers = useIncrementTimeout({ endCount: endTravelers })
  const reviews = useIncrementTimeout({ endCount: endTravelReviews })
  const travelPlans = useIncrementTimeout({ endCount: endTravelPlans })

  return (
    <ul className="indicatorPhrase">
      <Phrase
        indicator={travelers}
        indicatorType="person"
        description="여행자"
      />
      <Phrase
        indicator={reviews}
        indicatorType="thing"
        description="여행 리뷰"
      />
      <Phrase
        indicator={travelPlans}
        indicatorType="thing"
        description="여행 일정"
      />
    </ul>
  )
}

export default IndicatorPhrase
