import React from 'react'

import { Modal, Grid, FormGroup, Col, Button, ControlLabel, FormControl } from 'react-bootstrap'

import '../../css/Modal.css'

const EditCollectionModal = (props) => {
  let newName = ''
  let oldName = props.selectedCollection.name
  let collectionID = props.selectedCollection.id

  return (
    <Modal show={props.showModal} onHide={props.toggleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Edit collection</Modal.Title>
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
                placeholder={props.selectedCollection.name}
                defaultValue={props.selectedCollection.name}
                onChange={(e) => { newName = e.target.value }}
              />
            </Col>
            <Col xs={9} md={7}>
              <Button onClick={() => props.handleSubmit(newName, oldName, collectionID )}>Submit</Button>
            </Col>
          </FormGroup>
        </Grid>
      </Modal.Body>
    </Modal>
  )
}

export default EditCollectionModal
