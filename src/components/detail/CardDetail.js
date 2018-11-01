import React from 'react'

import { Button } from 'react-bootstrap'
import '../../css/Cards.css'

const CardDetail = (props) => {
  const { handleClick } = props
  return (
    <div id={props.id} className={'card'} /* onClick={(e) => props.onClickCard(e)} */ >
      {/* <p>Card detail goes here</p> */}
      <div className='detail'>
        <span>{props.detail}</span>
      </div>
      <div className='button-group'>
        <Button onClick={(e) => handleClick(e)}>edit card</Button>
        <Button onClick={(e) => handleClick(e)}>delete card</Button>
      </div>
    </div>
  )
}

export default CardDetail
