import React from 'react'
import Awards from '../../components/Awards'
import IndicatorPhrase from '../../components/IndicatorPhrase'
import LeftImage from '../../components/LeftImage'
import './home.css'

const Home = () => {
  return (
    <section className="home">
      <LeftImage />
      <div className="rightInfo">
        <IndicatorPhrase />
        <Awards />
      </div>
    </section>
  )
}

export default Home
