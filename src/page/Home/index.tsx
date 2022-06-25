import React from 'react'
import Awards from '../../components/Awards'
import IndicatorPhrase from '../../components/IndicatorPhrase'
import LeftImage from '../../components/LeftImage'
import './home.css'

const Home = () => {
  return (
    <div className="home">
      {/* <LeftImage /> */}
      <Awards />
      <IndicatorPhrase />
    </div>
  )
}

export default Home
