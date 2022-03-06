import React from 'react'
import "./Scroller.scss"
import Project from '../Project/Project'
import composite_furnace_front_on from "../../pictures/composite_furnace_front_on.png"


export default function Projects() {
  return (
    <div className='Scroller'>
      <div className='Projects'>
        <Project 
          Name="Industrial Expansion" 
          Desc="A minecraft mod which adds tools, machines and other new features."
          Language="Java"
          Image={composite_furnace_front_on}
        />
        
      </div>
    </div>
  )
}
