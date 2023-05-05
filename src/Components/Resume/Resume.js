import React from 'react'
import './Resume.css';
import Data  from './Data';
import Card from './Card';
const Resume = () => {
  return (
    <section className='resume container section' id='resume'>

    <h2 className='section_title'>  Education and Courses</h2>

    <div className='resume_container grid'>

      <div className='timeline grid'>
     {Data.map ((val,id) =>  {
     
        if(val.category === 'education'){

          return ( <Card  key={id} icon={val.icon} title={val.title} 
          year={val.year}  desc={val.desc} cp={val.cp} school={val.school}

          technology1={val.technology1}

          
          />)
        }

     })}

      </div>


      <div className='timeline grid'>
     {Data.map ((val,id) =>  {
     
        if(val.category === 'courses'){

          return ( <Card  key={id} icon={val.icon} title={val.title} 
          year={val.year}  desc={val.desc} web={val.web}  

          
          />)
        }

     })}

      </div>
    </div>

    </section>
  )
}

export default Resume