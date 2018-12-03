import React from 'react'
import { DropdownButton, MenuItem, Grid, Row, Col } from 'react-bootstrap'

import '../../css/Modal.css'

const SelectCollection = (props) => {
  const { collections, handleSelectCollection } = props
  const title = 'Select Collection'
  return (
    <Grid>
      <Row className='select-collection'>
        <Col xs={6} md={4}>
          <DropdownButton
            // bsStyle={title.toLowerCase()}
            title={title}
            key={1}
            id={`dropdown-basic-${1}`} >
            <MenuItem
              key='default-view'
              onClick={e => handleSelectCollection(e.target.innerText)}
              eventKey='default-view'>
                Show all cards
            </MenuItem>
            { collections.map(collection =>
              <MenuItem
                key={collections.indexOf(collection) + 1}
                eventKey={collections.indexOf(collection) + 1}
                onClick={e => handleSelectCollection(e.target.innerText)}>
                {`${collection}`}
              </MenuItem>
            ) }
          </DropdownButton>
        </Col>
      </Row>
    </Grid>
  )
}

export default SelectCollection
