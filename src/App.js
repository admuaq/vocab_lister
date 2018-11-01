import React, { Component } from 'react'
import logo from './logo.svg'
import CardList from './components/container/CardList'
import './css/App.css'

class App extends Component {

  state = { 
    cards: ['apple','pear','orange','kiwi', 'Starfruit',
            'Mango', 'Pineapple', 'Guava','Tangerine','apple','pear','orange','kiwi'] }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
        Card Lister
        </header>
        <div className='cards-container'>
          <div className='add-remove-menu'>
            <button>add card</button>
            <button>delete card</button>
            <button>edit card</button>
          </div>
          <CardList cards={this.state.cards}/>
        </div>
      </div>
    )
  }
}

export default App
