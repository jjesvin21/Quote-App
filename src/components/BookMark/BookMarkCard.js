
import React from 'react'
import './BookMarkCard.css'

export default function BookMarkCard(props) {
  return (
    <div className='InnerDivQuate'> 
    <h3>{props.name}</h3>
    <p>{props.aname}</p>
  </div>
  )
}
