import React from 'react'
import "./Scroller.scss"
import Project from '../Project/Project'

export default function Projects() {
  return (
    <div className='Scroller'>
      <div className='Projects'>
        <Project 
          Name="Industrial Expansion" 
          Desc="A minecraft mod which adds tools, machines and other new features."
          Language="Java"
        />
      </div>
    </div>
  )
}
