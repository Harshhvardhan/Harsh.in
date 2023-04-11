import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
      <img src={ME} alt="me" />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>10+ clients</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>8+ Projects</small>
            </article>
          </div>
          <p>
          As a web developer with a strong interest and proficiency in the frontend part of web development, I believe that my skills and experience would be an excellent fit for this role. I am also a hardworking individual who is committed to delivering high-quality work and always striving to give my 100 percent on every project.Throughout my career as a web developer, I have gained extensive experience in frontend development, including HTML, CSS, JavaScript, and various frontend frameworks like React. I am well-versed in building responsive and user-friendly web applications that provide an excellent user experience.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
      
    </section>
  )
}

export default About