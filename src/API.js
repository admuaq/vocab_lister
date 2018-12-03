
class API {

  static getCardList = () => {
    return fetch('http://localhost:3001/card')
    .then( resp => resp.json())
    .then( data => data )
  }

  static getCollection = (name) => {
    return fetch(`http://localhost:3001/collection/${name}`)
    .then( resp => resp.json())
  }

  static getUsersCollections = () => {
    let userCollections = []
    
    return fetch(`http://localhost:3001/collection`)
    .then( resp => resp.json())
    .then( data => data.forEach( collection => 
      userCollections.push(collection.name)
      )).then( show => userCollections)
  }

  static newCollection = (name) => {
    let userCollections = []

    return fetch(`http://localhost:3001/collection/`, {
      method: 'POST',
      body: JSON.stringify({name}),
      headers: {"Content-Type": "application/json"}
    }).then( resp => resp.json())
    .then( data => data.forEach( collection => 
      userCollections.push(collection.name)
      )).then( show => userCollections)
  }

  static submitEditCollection = (newName, oldName) => {
    return fetch(`http://localhost:3001/collection/`, {
      method: 'PUT',
      body: JSON.stringify({newName, oldName}),
      headers: {"Content-Type": "application/json"}
    }).then( resp => resp.json())
  }

  // static submitEditCollection = (name, text) => {
  //   return fetch(`http://localhost:3001/collection/`, {
  //     method: 'UPDATE',
  //     body: JSON.stringify({name, text}),
  //     headers: {"Content-Type": "application/json"}
  //   }).then( resp => resp.json())
  // }

  static deleteCardFromCollection = (key, collection) => {
    return fetch(`http://localhost:3001/collection/${collection}`, {
      method: 'DELETE',
      body: JSON.stringify({key,collection}),
      headers: {"Content-Type": "application/json"}
    }).then( resp => resp.json())
  }
}

export default API