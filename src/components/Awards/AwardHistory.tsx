import React from 'react'

interface props {
  imageSrc: string
  awardWinningPlace: string
  awards: string
}

const AwardHistory: React.FC<props> = ({
  awards,
  imageSrc,
  awardWinningPlace,
}) => {
  return (
    <li className="awardHistory">
      <img
        className="awardHistoryImage"
        width="60px"
        height="60px"
        src={imageSrc}
        alt={awardWinningPlace + awards}
      />
      <div className="awardInfo">
        <span>{awardWinningPlace}</span>
        <span>{awards}</span>
      </div>
    </li>
  )
}

export default AwardHistory
