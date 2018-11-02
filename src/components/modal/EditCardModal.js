import React from 'react'

import { Modal, Grid } from 'react-bootstrap'

const EditCardModal = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.toggleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Edit card</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Grid>
          <label>Word:</label>
          <input id='word-field' defaultValue={props.selectedCard.word} onChange={(e) => props.handleChange(e)} />

          <label>Definition:</label>
          <input id='definition-field' defaultValue={props.selectedCard.definition} onChange={(e) => props.handleChange(e)} />

          <button onClick={() => props.handleEditSubmit()}>Submit</button>
        </Grid>
      </Modal.Body>
    </Modal>
  )
}

export default EditCardModal
