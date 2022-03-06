import React from 'react'
import "./Project.scss"

export default function Project(props) {
  return (
    <a href="https://github.com/Encryptar/IndustrialExpansion" className='Project'>
        <img src={props.Image} alt="Composite Furnace"/>
        <h4>{props.Language}</h4>
        <h2>{props.Name}</h2>
        <p>{props.Desc}</p> 
    </a>
  )
}
