import React from 'react'
import './Pricing.css'
import Img1 from '../assets/price-1.svg'
import Img2 from '../assets/price-2.svg'
import Img3 from '../assets/price-3.svg'



const Pricing = () => {
  return (
   <section className='pricing container section'>

    <h2 className='section_title'>Pricing Plans</h2>
    <div className="pricing_container grid">
      <div className="pricing_item">
           <img src={Img1} alt="" srcset=""  className='pricing_img'  />
           <h3 className='pricing-plan'>Basic </h3>
            <p className='pricing_title'>A Simple otion but poweful to manage your business</p>
            <p className='pricing_support'> Email Support </p>
            <h3 className='price'>
              <em>$ 9 <span>Month</span></em>
            </h3>

            <a href='#m' className='btn'>Get Started</a>

      </div>

      <div className="pricing_item">
           <img src={Img2} alt="" srcset=""  className='pricing_img'  />
           <h3 className='pricing-plan'>Premium </h3>
            <p className='pricing_title'>Unlimited product including app integration and more features</p>
            <p className='pricing_support'>Mon-Fri support</p>
            <h3 className='price'>
              <em>$9 <span>Month</span></em>
            </h3>

            <a href='' className='btn'>Get Started</a>

      </div>


      <div className="pricing_item best">
        {/* <span className="badge">Recommended</span> */}
           <img src={Img3} alt="" srcset=""  className='pricing_img'  />
           <h3 className='pricing-plan'>Ultimate</h3>
            <p className='pricing_title'>A wise option for large companies and individuals </p>
            <p className='pricing_support'>24/7 Support </p>
            <h3 className='price'>
            <em>$19 <span>Month</span></em>
            </h3>

            <a href='' className='btn'>Get Started</a>

      </div>
    </div>
   </section>
  )
}

export default Pricing