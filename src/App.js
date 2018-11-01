import React, { Component } from 'react'
import logo from './logo.svg'
import CardList from './components/container/CardList'
import AddRemoveMenu from './components/menu/AddRemoveMenu'
import './css/App.css'

class App extends Component {

  state = { 
    cards: ['apple','pear','orange','kiwi', 'Starfruit',
            'Mango', 'Pineapple', 'Guava','Tangerine','apple','pear','orange','kiwi'] }

  handleClick = e => {
    console.log(e.target)

  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
        Card Lister
        </header>
        <div className='cards-container'>
          <AddRemoveMenu handleClick={this.handleClick}/>
          <CardList cards={this.state.cards}/>
        </div>
      </div>
    )
  }
}

export default App
