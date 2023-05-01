import React from 'react'
import "./Home.css"
import me from '../../Components/assets/avatar-1.svg'
import HeaderSocial from './HeaderSocial'
import Scrolldown from './Scrolldown'
import Shapes from './Shapes'
const Home = () => {
  return (
    <section className='homes' id='home'>

      <div className="intro">
        <img src={me} alt="" srcset="" />
        <h1 className='home_name'>M.G MORSHED </h1>
        <span className='home_education'>I'm a Front-End Developer</span>

        <HeaderSocial></HeaderSocial>

        <a href='#contact' className='btn'> Hire Me </a>
        <Scrolldown></Scrolldown>
      </div>

      <Shapes></Shapes>



    </section>
  )
}

export default Home