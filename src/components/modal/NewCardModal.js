import React from 'react'

import { Modal, Grid } from 'react-bootstrap'

const NewCardModal = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.toggleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Create new card</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Grid>
          <label>Word:</label>
          <input id='word-field' placeholder='Enter word here...' onChange={(e) => props.handleChange(e)} />

          <label>Definition:</label>
          <input id='definition-field' placeholder='Enter word here...' onChange={(e) => props.handleChange(e)} />

          <button onClick={() => props.handleNewSubmit()}>Submit</button>
        </Grid>
      </Modal.Body>
    </Modal>
  )
}

export default NewCardModal
