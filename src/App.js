import React, { Component } from 'react'

import API from './API.js'
// import logo from './logo.svg'
import Card from './components/container/Card'
import AddRemoveMenu from './components/menu/AddRemoveMenu'

import AddCollection from './components/menu/AddCollection'
import EditCollection from './components/menu/EditCollection'
import SelectCollection from './components/menu/SelectCollection'

import NewCardModal from './components/modal/NewCardModal'
import EditCardModal from './components/modal/EditCardModal'
import NewCollectionModal from './components/modal/NewCollectionModal'
import EditCollectionModal from './components/modal/EditCollectionModal'

// import cards from './cards.js'
import './css/App.css'


class App extends Component {

  state = { 
    collection: {},
    userCollections: [],
    cards: [],
    showNew: false,
    showEdit: false,
    showEditCollection: false,
    showNewCollection: false,
    word:'',
    definition:'',
    selectedCard: {},
    collectionSelected: false,
    charactersRemaining: 300,
    wordCount: 300
  }

  fetchData = () => {
    API.getCardList().then( data => this.setState({...this.state, cards: data}))
    API.getUsersCollections().then( data => this.setState({...this.state, userCollections: data}))
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
      case 'new-collection':
       return this.toggleShowCreateNewCollectionForm()
      case 'edit-collection':
       return this.toggleShowEditCollectionForm()
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
    console.log('Opens/Closes Create Card modal form')
    this.setState( {...this.state, showNew: !this.state.showNew, word:'', definition: '', selectedCard: {} })
  }

  toggleShowEditForm = () => {
    console.log('Closes Edit Card modal form')
    this.setState( {...this.state, showEdit: !this.state.showEdit, word:'', definition: '', selectedCard: {} })
  }

  toggleShowCreateNewCollectionForm = () => {
    console.log('Opens/Closes Create New Collection modal form')
    this.setState( {...this.state, showNewCollection: !this.state.showNewCollection })
  }

  toggleShowEditCollectionForm = () => {
    console.log('Opens/Closes Create New Collection modal form')
    this.setState( {...this.state, showEditCollection: !this.state.showEditCollection })
  }

  editCard = (key) => {
    console.log('Link to actual card to be edited to reference id')
    console.log(key)
    let toEdit = this.state.cards.find(item => item.id === key)
    
    this.setState( {...this.state, showEdit: !this.state.showEdit, selectedCard: toEdit, word:toEdit.word, definition: toEdit.definition, charactersRemaining: this.state.wordCount - toEdit.definition.length})
  }

  deleteCard = (key) => {
    console.log('Link to actual card to be deleted to reference id')
    if (this.state.collection !== ''){
      // debugger
      API.deleteCardFromCollection(key, this.state.collection)
      .then( collection => this.setState({...this.setState, cards: collection.cards}))
    }
    else {
      this.setState({...this.setState, cards: this.state.cards.filter( card => card.id !== key )})
    }
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

  handleSubmitNewCollection = (name) => {
    if (name === '') return;

    API.newCollection(name)
    .then( data => 
      this.setState(
        {...this.state, 
          userCollections: data, 
          showNewCollection: !this.state.showNewCollection
        }))
  }

  handleEditCollection = (newName, oldName, collectionID) => {
    console.log('Submits Changes to Collection')
    console.log(newName, oldName, collectionID)

    let editStateCollection = this.state.collection
    editStateCollection.name = newName

    // debugger

    API.submitEditCollection(newName, oldName)
    .then( data => 
      this.setState({...this.state, 
        collection: editStateCollection,
        showEditCollection: !this.state.showEditCollection
      }, this.onEditCollectionName()))
  }

  onEditCollectionName = () => {
    API.getUsersCollections().then( data => this.setState({...this.state, userCollections: data}))
  }

  handleSelectCollection = (name) => {
    if (name === 'Show all cards') {

      API.getCardList()
      .then( data => this.setState({ ...this.state, collection: '', cards: data, collectionSelected: false }) )

    }
    else {
      API.getCollection(name)
      .then( collection => this.setState({ ...this.state, collection: collection, cards: collection.cards, collectionSelected: true }))
    }
  }

  componentDidMount(){
    this.fetchData()
  }


  render () {
    // console.log(this.state.cards)

    return (
      <div className='App'>
        <header className='App-header'>
        Vocab Lister
        </header>
        <div id='menu-container'>
        {/* Collection Menu options Row */}
          <div className='collection-option-menu'>
            <AddCollection handleClick={this.handleClick}/>
            {this.state.collectionSelected ? <EditCollection handleClick={this.handleClick}/> : null}
            <SelectCollection
              collections={this.state.userCollections}
              handleSelectCollection={this.handleSelectCollection}/>
          </div>
        {/* Card Menu options Row */}
          <div className='card-option-menu'>
            <AddRemoveMenu handleClick={this.handleClick}/>
          </div>
        </div>
        <div className='cards-container'>
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

        {/* Modal for new collection */}
        {this.state.showNewCollection ? 
        <NewCollectionModal 
        showModal={this.state.showNewCollection}
        toggleShow={this.toggleShowCreateNewCollectionForm}
        handleSubmit={this.handleSubmitNewCollection} />
        : null}

        {/* Modal for Edit collection */}
        {this.state.showEditCollection ? 
        <EditCollectionModal 
        selectedCollection={this.state.collection}
        showModal={this.state.showEditCollection}
        toggleShow={this.toggleShowEditCollectionForm}
        handleSubmit={this.handleEditCollection} />
        : null}
      </div>
    )
  }
}

export default App
