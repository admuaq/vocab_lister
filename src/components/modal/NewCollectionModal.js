import React from 'react'

import { Modal, Grid, FormGroup, Col, Button, ControlLabel, FormControl } from 'react-bootstrap'

import '../../css/Modal.css'

const NewCollectionModal = (props) => {
  let name = ''
  return (
    <Modal show={props.showModal} onHide={props.toggleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Create new collection</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Grid>
          <FormGroup>
            <Col xs={9} md={7}>
              <ControlLabel>Name:</ControlLabel>
              <br />
              <FormControl
                id='word-field'
                type='text'
                placeholder='Enter text'
                onChange={(e) => { name = e.target.value }}
              />
            </Col>
            <Col xs={9} md={7}>
              <Button onClick={() => props.handleSubmit(name)}>Submit</Button>
            </Col>
          </FormGroup>
        </Grid>
      </Modal.Body>
    </Modal>
  )
}

export default NewCollectionModal
