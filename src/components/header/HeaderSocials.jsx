import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="www.linkedin.com/in/adam-elamri-90865a184" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/amriadam"  target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials