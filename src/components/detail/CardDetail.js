import React from 'react'
import '../../css/Cards.css'

const CardDetail = (props) => {
  return (
    <div className='card'>
      <p>Card detail goes here</p>
      <p>{props.detail}</p>
    </div>
  )
}

export default CardDetail
