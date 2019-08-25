import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup, Button } from 'react-bootstrap'

const Todo = ({ onClick, onDelete, completed, text }) => (
  <ListGroup.Item
    onClick={onClick}
    class=""
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
    variant={completed ? " d-flex justify-content-between align-items-center light" : " d-flex justify-content-between align-items-center"}
  >
    {text}
    <Button
      onClick={onDelete}
      variant="outline-danger"
    >
      <img src="./svg/x.svg" style={{ fill: "red", height: '1rem' }} />
    </Button>
  </ListGroup.Item>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
