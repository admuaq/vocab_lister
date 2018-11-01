import React from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'

const AddRemoveMenu = (props) => {
  const { handleClick } = props

  return (
    <Grid>
      <Row className='add-remove-menu'>
        <Col xs={6} md={4}>
          <Button onClick={(e) => handleClick(e)}>add card</Button>
        </Col>
        <Col xs={6} md={4}>
          <Button>edit card</Button>
        </Col>
        <Col xs={6} md={4}>
          <Button>delete card</Button>
        </Col>
      </Row>
    </Grid>
  )
}

export default AddRemoveMenu
