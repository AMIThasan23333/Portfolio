import React from 'react'

const Card = (props) => {
  return (
    <div className='timeline_item'>

        <i className={props.icon}> </i>
        <span className='timeline_date'>{props.year}</span>
        <h3 className='timeline_title'> {props.title}</h3>
        <h3 className='timeline_title'> {props.school}</h3>
        <p className='timeline_text'> {props.desc}</p>
        <h4 className='timeline_text'> {props.cp}</h4>
        <a href={props.web} >{props.web}</a>
    </div>
  )
}

export default Card