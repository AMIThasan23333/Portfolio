import React from 'react'
import "./About.css"
import img from "../assets/avatar-2.svg"


const About = () => {
  return (
    
   
    <div className="section about container" id="about">
      <div className="section_title">About Me</div>

      <div className="about_container grid">
  
       <img src={img} alt="" srcset="" className='about_img' />

       <div className="about_data grid" >

         <div className="about_info">

          <p className="about_description">
          I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.

          </p>
          <a href="" className="btn">Download Cv  </a>
         </div>

         <div className="about_skills grid">

          <div className="skills_data">
            <div className="skills_ttle">
              <h3 className="skills_name">
                
              </h3>

            </div>
          </div>
         </div>

       </div>

      </div>
    </div>


  )
}

export default About