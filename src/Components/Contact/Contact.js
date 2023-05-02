import React from 'react'

const Contact = () => {
  return (
    
    <div className="section continer section" id="contact">
 

        <h2 className="section_tittle">Get In Touch</h2>

        <div className="contact_container grid">
          <div className="contact-info">
            <h3 className="contact_title">Let's talk about everything !  </h3>
              <p className="contact_details">
                             Send me an Email 
              </p>
          
          </div>

          <form action='' className='contact_form'>
            <div className="contact_form-group">
              <div className="contact_form-div">
                <input type="text" name="" id=""  
                className='contact_form-input'
                placeholder='enter your name '/>
              </div>

              <div className="contact_form-div">
                <input type="email" name="" id=""  
                className='contact_form-input'
                placeholder='enter your email '/>
              </div>

            
            </div>
            <div className="contact_form-div">
                <input type="text" name="" id=""  
                className='contact_form-input'
                placeholder='enter your subject'/>
              </div>


              <div className="contact_form-div">
              
              <textarea name='' id='' cols='30' rows='10'
              
              className='contact_form-input'
                
              placeholder='write your message '
              
              ></textarea>
              </div>

              <div className="btn">Send Messages </div>

          </form>
        </div>

    </div>
  )
}

export default Contact