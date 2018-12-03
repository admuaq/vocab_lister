import React from 'react'

import { Modal, Grid, FormGroup, Col, Button, ControlLabel, FormControl } from 'react-bootstrap'

import '../../css/Modal.css'

const EditCardModal = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.toggleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Edit card</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Grid>
          <FormGroup>
            <Col xs={9} md={7}>
              <ControlLabel>Word/Sentence:</ControlLabel>
              <br />
              <FormControl
                id='word-field'
                type='text'
                defaultValue={props.selectedCard.word}
                onChange={(e) => props.handleChange(e)}
              />
            </Col>
            <Col xs={9} md={7}>
              <ControlLabel>Definition:</ControlLabel>
              <br />
              <FormControl
                id='definition-field'
                componentClass='textarea'
                type='text'
                defaultValue={props.selectedCard.definition}
                onChange={(e) => props.handleChange(e)}
              />
              <br />
              <ControlLabel>Characters remaining: {props.charactersRemaining} </ControlLabel>
            </Col>
            <Col xs={9} md={7}>
              <Button onClick={() => props.handleEditSubmit()}>Submit</Button>
            </Col>
          </FormGroup>
        </Grid>
      </Modal.Body>
    </Modal>
  )
}

export default EditCardModal
