import React from 'react'

interface props {
  indicator: number
  description: string
  indicatorType: 'person' | 'thing'
}

const Phrase: React.FC<props> = ({ indicator, indicatorType, description }) => {
  const unit = indicatorType === 'person' ? '명' : '개'
  return (
    <li className="phrase">
      <strong className="phraseIndocator">{indicator}</strong>
      <strong>
        <span className="indicatorUnit">{`만 ${unit}의 `}</span>
        <span>{description}</span>
      </strong>
    </li>
  )
}

export default Phrase
