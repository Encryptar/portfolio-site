import React from 'react'
import "./Project.scss"

export default function Project(props) {
  return (
    <div className='Project'>
        <h4>{props.Language}</h4>
        <h2>{props.Name}</h2>
        <p>{props.Desc}</p> 
    </div>
  )
}
