import React from 'react'
import CardDetail from '../detail/CardDetail'
import '../../css/Cards.css'

const CardList = (props) => {
  return (
    <div className='card-list-container'>
      <h1>Cards go here</h1>
      <div className='card-list'>
        {props.cards.map(detail => {
          return (
            <CardDetail key={`item-${props.cards.indexOf(detail)}`} detail={detail}
              onClickCard={props.onClickCard} handleClick={props.handleClick} />
          )
        })
        }
      </div>
    </div>
  )
}

export default CardList
