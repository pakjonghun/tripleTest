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
    <li>
      <img
        width="60px"
        height="60px"
        src={imageSrc}
        alt={awardWinningPlace + awards}
      />
      <span>{awardWinningPlace}</span>
      <span>{awards}</span>
    </li>
  )
}

export default AwardHistory
