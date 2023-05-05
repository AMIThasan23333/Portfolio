import React, { useState } from 'react'
import "./Portfolio.css"
import Menu from './Menu';

const Portfolio = () => {

  const [items, setItems] = useState(Menu)

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
         return  curElem.category  === categoryItem;
    })
    setItems(updatedItems);

  }

  return (
    <div className="section word container section" id="work">

      <h2 className="section_title">
                Recent Works 
      </h2>

      <div className="work_filters">
        <span className='work_item'  onClick={() => setItems(Menu)}> All Project  </span>
        <span className='work_item'  onClick={() => filterItem('Doctors')}>Doctors </span>

        <span className='work_item'  onClick={() => filterItem('Digital-Electronics')} >Smart Home</span>
        <span className='work_item'  onClick={() => filterItem('Edtech')}>Code Academy</span>
        {/* <span className='work_item'  onClick={() => filterItem('Branding')}>Branding </span> */}

      </div>

      <div className="work_container grid">
               {
                items.map((elem) => {
                  const {id,image,title, Link, dsec, githubc, githubs} = elem;
                  return (
                   <div class="wrapper">
                  <div class="single-card">
                  <div class="front">
                        <img  className='img'  src= {image} alt=""  srcset="" />
                  </div>
                  <div class="back">
                      <div class="content">
                          <h2>{title}</h2>

                         <button className='btn'> <a href={Link}>Live Link</a> </button>
                         <p className='btn'> <a href={githubc}>Client Link</a> </p>

                        <p className='btn'> <a href={githubs}>Server Link</a> </p>


                          <p>{dsec}.</p>
                        
                      
            </div>
        </div>
    </div>
</div>

                  )
                })
              } 


      </div>
    </div>
  )
}

export default Portfolio