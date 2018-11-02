import React, { Component } from 'react'

// import logo from './logo.svg'
import Card from './components/container/Card'
import AddRemoveMenu from './components/menu/AddRemoveMenu'
import NewCardModal from './components/modal/NewCardModal'
import EditCardModal from './components/modal/EditCardModal'

import cards from './cards.js'
import './css/App.css'


class App extends Component {

  state = { 
    cards: cards,
    showNew: false,
    showEdit: false,
    word:'',
    definition:'',
    selectedCard: {},
    charactersRemaining: 300,
    wordCount: 300
   }

  
  handleClick = e => {
    console.log(e.target.innerText)
    // debugger
    let action = e.currentTarget.className.split(' ')[0]

    switch (action) {
      case 'add-card':
       return this.toggleShowCreateForm()
      case 'edit-card':
      return this.editCard(parseInt(e.currentTarget.parentElement.parentElement.id))
      case 'delete-card':
       return this.deleteCard(parseInt(e.currentTarget.parentElement.parentElement.id))
      default:
       return console.log('return nothing')
    }
  }

  onClickCard = e => {
    console.log(e.target.innerText)
  }

  handleChange = e => {
    
    switch (e.target.id){
      case 'word-field':
       return this.setState( {...this.state, word: e.target.value})
      case 'definition-field':
       return this.setState( {...this.state, definition: e.target.value, charactersRemaining: this.state.wordCount - e.target.value.length })
      default:
        return
    }
  }

  toggleShowCreateForm = () => {
    console.log('Loads modal form')
    this.setState( {...this.state, showNew: !this.state.showNew, word:'', definition: '', selectedCard: {} })
  }

  toggleShowEditForm = () => {
    console.log('Loads modal form')
    this.setState( {...this.state, showEdit: !this.state.showEdit, word:'', definition: '', selectedCard: {} })
  }

  editCard = (key) => {
    console.log('Link to actual card to be edited to reference id')
    console.log(key)
    let toEdit = this.state.cards.find(item => item.id === key)
    
    this.setState( {...this.state, showEdit: !this.state.showEdit, selectedCard: toEdit, word:toEdit.word, definition: toEdit.definition, charactersRemaining: this.state.wordCount - toEdit.definition.length})
  }

  deleteCard = (key) => {
    console.log('Link to actual card to be deleted to reference id')
    
    this.setState({...this.setState, cards: this.state.cards.filter( card => card.id !== key )})
  }

  handleNewSubmit = () => {
    if (this.state.word === '' || this.state.definition === ''){
     return
    }
    else {
      let newCard = {id: this.state.cards.length + 1, word:'', definition:''}

      newCard.word = this.state.word
      newCard.definition = this.state.definition

      this.setState( {...this.state, cards: [...this.state.cards, newCard] }, this.toggleShowCreateForm )
    }
  }

  handleEditSubmit = () => {
    let card = this.state.selectedCard

    
    let array = [...this.state.cards]
    let index = array.findIndex( item => item.id === card.id)

    card.word = this.state.word
    card.definition = this.state.definition

    array[index] = card

    this.setState( {...this.state, cards: array, charactersRemaining: this.state.wordCount - this.state.charactersRemaining }, this.toggleShowEditForm )
  }

  render () {
    console.log(this.state.cards)

    return (
      <div className='App'>
        <header className='App-header'>
        Vocab Lister
        </header>
        <div className='cards-container'>
          <AddRemoveMenu handleClick={this.handleClick}/>
          <Card handleClick={this.handleClick} cards={this.state.cards} onClickCard={this.onClickCard}/>
        </div>

        {/* Modal for adding new card */}
        {this.state.showNew ? 
        <NewCardModal 
        showModal={this.state.showNew}
        toggleShow={this.toggleShowCreateForm}
        handleChange={this.handleChange}
        handleNewSubmit={this.handleNewSubmit}
        charactersRemaining={this.state.charactersRemaining}/>
        : null}
  

        {/* Modal for edit card */}
        {this.state.showEdit ? 
        <EditCardModal 
        showModal={this.state.showEdit}
        toggleShow={this.toggleShowEditForm}
        handleChange={this.handleChange}
        handleEditSubmit={this.handleEditSubmit}
        selectedCard={this.state.selectedCard}
        charactersRemaining={this.state.charactersRemaining}/>
        : null}

      </div>
    )
  }
}

export default App
