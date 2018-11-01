import React, { Component } from 'react'

import logo from './logo.svg'
import CardList from './components/container/CardList'
import AddRemoveMenu from './components/menu/AddRemoveMenu'

import { Modal, Grid } from 'react-bootstrap'
import './css/App.css'

class App extends Component {

  state = { 
    cards: ['apple','pear','orange','kiwi', 'Starfruit',
            'Mango', 'Pineapple', 'Guava','Tangerine'],
    show: false,
    word:'',
    definition:''}

  handleClick = e => {
    console.log(e.target.innerText)
    switch (e.target.innerText) {
      case 'add card':
       return this.toggleShowCreateForm()
      case 'edit card':
      return this.editCard(e.target)
      case 'delete card':
       return this.deleteCard(e.target)
      default:
       return console.log('return nothing')
    }
  }

  onClickCard = e => {
    console.log(e.target.innerText)
  }

  handleChange = e => {
    // debugger
    switch (e.target.id){
      case 'word-field':
       return this.setState( {...this.state, word: e.target.value})
      case 'definition-field':
       return this.setState( {...this.state, definition: e.target.value})
      default:
        return
    }
  }

  toggleShowCreateForm = () => {
    console.log('Loads modal form')
    this.setState( {...this.state, show: !this.state.show, word:'', definition: '' })
  }

  editCard = (key) => {
    console.log('Link to actual card to be edited to reference id')
    console.log(key)
  }

  deleteCard = (key) => {
    console.log('Link to actual card to be deleted to reference id')
    console.log(key)
  }

  handleSubmit = () => {
    if (this.state.word === '' || this.state.definition === ''){
     return
    }
    else {
      this.setState( {...this.state, cards: [...this.state.cards, this.state.word] }, this.toggleShowCreateForm )
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
        Vocab Lister
        </header>
        <div className='cards-container'>
          <AddRemoveMenu handleClick={this.handleClick}/>
          <CardList handleClick={this.handleClick} cards={this.state.cards} onClickCard={this.onClickCard}/>
        </div>

        {/* Modals below*/}
        <Modal show={this.state.show} onHide={this.toggleShowCreateForm}>
          <Modal.Header closeButton>
            <Modal.Title>Create new card</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Grid>
              <label>Word:</label>
              <input id='word-field'placeholder='Enter word here...' onChange={ (e)=> this.handleChange(e) }></input>

              <label>Definition:</label>
              <input id='definition-field' placeholder='Enter word here...' onChange={ (e)=> this.handleChange(e) }></input>

              <button onClick={()=> this.handleSubmit()}>Submit</button>
            </Grid>
          </Modal.Body>
        </Modal>

      </div>

    )
  }
}

export default App
