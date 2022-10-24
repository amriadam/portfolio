import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form=useRef();
  const sendEmail= (e)=> {
    e.preventDefault();
    emailjs.sendForm('service_8o32xs7','template_k505owa',form.current,'NNHxYBWLqvwe9pltj')
    e.target.reset() ;
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container  contact__container">
        <div className="contact__options">
          <article className='contact__option' >
            <MdOutlineEmail className='contact__item-icon'/>
            <h4>Email</h4>
            <h5>adam.elamri@esprit.tn</h5>
            <a href="mailto:adam.elamri@esprit.tn" target="_blank">Send a message</a>

          </article>
          <article className='contact__option' >
            <RiMessengerLine className='contact__item-icon'/>
            <h4>Messenger</h4>
            <h5>Adam Amri</h5>
            <a href="https://m.me/adem.amri.52" target="_blank">Send a message</a>

          </article>
          <article className='contact__option' >
            <ImWhatsapp className='contact__item-icon'/>
            <h4>WhatsApp</h4>
            <h5>+216 90 250 993</h5>
            <a href="https://api.whatsapp.com/send?phone=+21690250993" target="_blank">Send a message</a>

          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />           
          <input type="email" name='email' placeholder='Your Email' required   />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact