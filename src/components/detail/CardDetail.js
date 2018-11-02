import React from 'react'

import { Button } from 'react-bootstrap'
import '../../css/Cards.css'

const CardDetail = (props) => {
  const { handleClick } = props
  return (
    <div id={props.id} className={'card'} /* onClick={(e) => props.onClickCard(e)} */ >
      {/* <p>Card detail goes here</p> */}
      <div className='detail'>
        <span>{props.detail.word}</span>
      </div>
      <div className='button-group'>
        <Button className='edit-card' onClick={(e) => handleClick(e)}> <span className='glyphicon glyphicon-pencil' aria-hidden='true' /> </Button>
        <Button className='delete-card' onClick={(e) => handleClick(e)}> <span className='glyphicon glyphicon-trash' aria-hidden='true' /> </Button>
      </div>
    </div>
  )
}

export default CardDetail
