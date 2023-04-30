import React from 'react'
import "./Home.css"
import me from '../../Components/assets/avatar-1.svg'
import HeaderSocial from './HeaderSocial'
const Home = () => {
  return (
    <section className='home-container' id='home'>

      <div className="intro">
        <img src={me} alt="" srcset="" />
        <h1 className='home_name'>M.G MORSHED </h1>
        <span className='home_education'>I'm a Front-End Developer   </span>

        <HeaderSocial></HeaderSocial>

        <a href='#contact' className='btn'> Hire Me </a>
      </div>



    </section>
  )
}

export default Home