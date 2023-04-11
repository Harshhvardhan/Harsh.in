import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'> 
    <h5>What skills I hHave</h5>
    <h2>My Experience</h2>

    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Devlopment</h3>
        <div className="experience_content">
          <article className="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
             <div>  
                  <h4>HTML</h4>
                  <small className="text_light">Experienced</small>
              </div>
          </article>
          <article className="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
            <div>  
              <h4>CSS</h4>
              <small className="text_light">Intermidiate</small>
            </div>
          </article>
          <article className="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
              <div>  
                  <h4>Bootstarp</h4>
                  <small className="text_light">Experienced</small>
              </div>
          </article>
          <article className="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
              <div>  
                  <h4>React</h4>
                  <small className="text_light">Experienced</small>
              </div>
          </article>
          <article className="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
              <div>  
                  <h4>JavaScript</h4>
                  <small className="text_light">Experienced</small>
              </div>
          </article>
          <article className="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
              <div>  
                  <h4>Tailwind</h4>
                  <small className="text_light">Experienced</small>
              </div>
          </article>
        </div>
      </div>


      {/* ***************end of front end div************* */}
     
     
     
      <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
      <article className="experience_details">
      <BsPatchCheckFill className='experience_details-icon' />
              <div>  
                  <h4>Node</h4>
                  <small className="text_light">Basic</small>
              </div>
          </article>
          <article className="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
              <div>
                 <h4>Php</h4>
                 <small className="text_light">Basic</small>
              </div>
          </article>
          <article className="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
              <div>  
                  <h4>Mongodb</h4>
                  <small className="text_light">Basic</small>
              </div>
          </article>
          <article className="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
              <div>  
                  <h4>MySQL</h4>
                  <small className="text_light">Basic</small>
              </div>
          </article>
          <article className="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
              <div>  
                  <h4>Python</h4>
                  <small className="text_light">Basic</small>
              </div>
          </article>
          </div>
      </div>
    </div>
    </section>
  )
}

export default Experience