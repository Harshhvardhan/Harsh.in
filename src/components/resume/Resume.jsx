import React from 'react'
import './Resume.css'
// import {AiOutlineHome} from 'react-icons/ai'
// import {AiOutlineUser} from 'react-icons/ai'
// import {BsFillBookFill} from 'react-icons/bs'
// import {MdDesignServices} from 'react-icons/md'

const resume = () => {
  return (
    <section>
        <h5>Explore my Resume</h5>
        <h2>Resume </h2>

     <div className="resume_options">
         {/* <a href="/#"><AiOutlineHome/></a>
         <a href="/#"><AiOutlineUser/></a>
         <a href="/#"><BsFillBookFill/></a>
         <a href="/#"><MdDesignServices/></a> */}
         <a href="/#">Skills</a>
         <a href="/#">Education</a>
         <a href="/#">Projects</a>
         <a href="/#">Extra Curricular</a>
     </div>

    </section>
  )
}

export default resume