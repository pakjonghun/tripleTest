import React from 'react'
import AwardHistory from './AwardHistory'

const Awards = () => {
  return (
    <ul>
      <AwardHistory
        awardWinningPlace="2018 구글 플레이스토어"
        awards="올해의 앱 최우수상 수상"
        imageSrc={`${process.env.PUBLIC_URL}/assets/play-store2x.png`}
      />
      <AwardHistory
        awardWinningPlace="2018 애플 앱스토어"
        awards="오늘의 여행앱 선정"
        imageSrc={`${process.env.PUBLIC_URL}/assets/badge-apple4x.png`}
      />
    </ul>
  )
}

export default Awards
