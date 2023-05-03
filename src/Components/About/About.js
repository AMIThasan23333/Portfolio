import React from 'react'
import "./About.css"
import img from "../assets/avatar-2.svg"
import AboutBox from './AboutBox'

const About = () => {

  return (   
    <div className="section about container" id="about">
      <div className="section_title">About Me</div>

      <div className="about_container grid">
  
       <img src={img} alt="" srcset="" className='about_img' />

       <div className="about_data grid" >

         <div className="about_info">

          <p className="about_description">
       Hi! My name is MD Golam Hasan. I am Frontend Developer, and I'm very passionate and dedicated to my work. With 1 year self experience as a frontend developer, I have acquired the skills and knowledge necessary to make your project a success.

          </p>
          <div className="btn">
                <a target="_blank" href="https://docs.google.com/document/d/1F_IzmWk1aaXjB8eKx5OdjRBhArQBWWAM6WphvUbfSEc/edit"><i className="fas fa-download"></i> Download Resume</a>
            </div>
         </div>

         <div className="about_skills grid">
          {/*  */}
          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name"> React Js   </h3>
                    <span className="skills_number">
                    70%
                    </span>
            </div>

            <div className="skills_bar">
              <span className="skills_percentage react">

              </span>

            </div>
          </div>

          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name"> Javascript   </h3>
                    <span className="skills_number">
                      68%
                    </span>
            </div>

            <div className="skills_bar">
              <span className="skills_percentage js">

              </span>

            </div>
          </div>

          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name">Node Js   </h3>
                    <span className="skills_number">
                      73%
                    </span>
            </div>

            <div className="skills_bar">
              <span className="skills_percentage node">

              </span>

            </div>
          </div>

          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name"> Express Js   </h3>
                    <span className="skills_number">
                      75%
                    </span>
            </div>

            <div className="skills_bar">
              <span className="skills_percentage express">

              </span>

            </div>
          </div>

          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name"> Mongodb   </h3>
                    <span className="skills_number ">
                      62%
                    </span>
            </div>

            <div className="skills_bar">
              <span className="skills_percentage mongodb">

              </span>

            </div>
          </div>

         </div>

       </div>

      </div>

      <AboutBox></AboutBox>
    </div>


  )
}

export default About