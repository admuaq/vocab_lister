import React from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'

const EditCollection = (props) => {
  const { handleClick } = props

  return (
    <Grid>
      <Row className='edit-collection'>
        <Col xs={6} md={4}>
          <Button className='edit-collection' onClick={(e) => handleClick(e)}>edit collection</Button>
        </Col>
      </Row>
    </Grid>
  )
}

export default EditCollection
