import React from 'react'
import './Footer.css'
import {BsTwitter} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {ImLinkedin2} from 'react-icons/im'
const Footer = () => {
  return (
    <footer>

      <a href="/#" className="footer_logo">Harsh</a>


      <ul className="permlinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer_socials">
        <a href="https://twitter.com"> <BsTwitter/> </a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://linkedin.com"> <ImLinkedin2/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Harsh Vardhan, 2022</small>
      </div>
    </footer>
  )
}

export default Footer