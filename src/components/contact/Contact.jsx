import React from 'react'
import './Contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {SiMinutemailer} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qc3b33i', 'template_h4kp8ii', form.current, 'TAm6MsRj0YJfRfGrK')

    e.target.reset( window.alert("Message sent!"))
   
     
  }


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
         <div className="contact_options">
            <article className="contact_option">
              <MdOutlineMarkEmailRead className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>vardhanharsh826@gmail.com</h5>
              <a href="mailto:vardhanharsh826@gmail.com" target="blank">Send mail to me</a>
            </article>
            <article className="contact_option">
              <SiMinutemailer contact_option-icon/>
              <h4>Messenger(Insta)</h4>
              <h5>Harsh Vardhan</h5>
              <a href="https://m.me/Harsh Vardhan" target="blank">Send message</a>
            </article>
            <article className="contact_option">
              <BsWhatsapp contact_option-icon/>
              <h4>Whatsapp</h4>
              <h5>+91 79090 81798</h5>
              {/* <a href="https://wa.me/917909081798" target="blank">DM on Whatsapp</a> */}
              {/* <a href="https://api.whatsapp.com/send?phone=917909081798" target="blank">DM on Whatsapp</a>  */}
              <a href="www.google.com" target="blank">DM on Whatsapp</a> 
            </article>

         </div>
         {/* ******************conatct optinos box end******** */}


         <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name ' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
         </form>
      </div>
    </section>
  )
}

export default Contact