import React from 'react'
import './Testimonials.css'
import I1 from '../assets/avatar-1.svg';
import I2 from '../assets/avatar-2.svg';
import I3 from '../assets/avatar-2.svg';








const data = [
  {
    id: 1,
    image: I1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: I2,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: I3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
];


const Testimonials = () => {
  return (
    
    <section className="testimonials container section">

      <h2 className="section_title">Clients & Reviews </h2>

      <div className='testimonials_container grid'>

        {
          data.map(({id,image,title,subtitle,comment}) => {

            return (
          
               <div className="testimonials_item" key={id}>

                <div className="thumb">
                  <img src={image} alt="" srcset="" />
                </div>
                <h3 className="testimonials_title">{title}</h3>
                <span className="subtitle">{subtitle}</span>
                <div className="commnent">{comment}</div>


               </div>

            )
          })
        }

      </div>
    </section>
  )
}

export default Testimonials