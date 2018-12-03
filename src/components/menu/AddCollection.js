import React from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'

const AddCollection = (props) => {
  const { handleClick } = props

  return (
    <Grid>
      <Row className='new-collection'>
        <Col xs={6} md={4}>
          <Button className='new-collection' onClick={(e) => handleClick(e)}>new collection</Button>
        </Col>
      </Row>
    </Grid>
  )
}

export default AddCollection
