import React from 'react'

interface props {
  indicator: number
  description: string
  indicatorType: 'person' | 'thing'
}

const Phrase: React.FC<props> = ({ indicator, indicatorType, description }) => {
  const unit = indicatorType === 'person' ? '명' : '개'
  return (
    <li>
      <strong>{`${indicator}만 ${unit}의`}</strong>
      <span>{description}</span>
    </li>
  )
}

export default Phrase
