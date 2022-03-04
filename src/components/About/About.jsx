import React from 'react'
import "./About.scss"
import ProfileImage from "../../pictures/ProfileImage.jpg"
import { SiLinkedin, SiGithub } from "react-icons/si";
import {BsLink45Deg} from "react-icons/bs"

export default function About() {
  return (
    <div className='About'>
        <div className='Information'>
          <img className='ProfileImage' src={ProfileImage} alt="Me"/>
          <h1>Hey, I'm Hayden</h1>
          <p>I am currently a computer science and information management student at the university of auckland.
            I love full stack and back end development.
          </p>
          <ul>
            <li><a href='https://www.linkedin.com/in/hayden-gray-4824b2233'><SiLinkedin /> LinkedIn <BsLink45Deg/></a></li>
            <li><a href='https://github.com/Encryptar'><SiGithub /> Github <BsLink45Deg/></a></li>
          </ul>
        </div>
    </div>
  )
}
