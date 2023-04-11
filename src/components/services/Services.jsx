import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Can Make</h5>
      <h2>Services</h2>

      <div className="container services_container">
         <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='services_list-icon' />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>Canva</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>Photoshop</p>
            </li>
            {/* <li>
              <BiCheck className='services_list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
         </article>
         {/* ******************END OF UI/UX************ */}

         <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='services_list-icon' />
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>JavaSrcipt</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>React</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>Bootstrap</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>NodeJs</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>Wordpress</p>
            </li>
            
          </ul>
         </article>
         {/* ******************END OF WEB DEV************ */}

         <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='services_list-icon' />
              <p>Blogs</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>Email</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>Web page contents</p>
            </li>
            {/* <li>
              <BiCheck className='services_list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
         </article>
         {/* ******************END OF Content Creation************ */}
         
      </div>
    </section>
  )
}

export default Services