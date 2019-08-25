import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

import { ListGroup, Card } from 'react-bootstrap'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <Card style={{ margin: '1.8rem 0' }}>
    <ListGroup>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
          onDelete={(e) => {
            e.stopPropagation()
            deleteTodo(todo.id)
          }}
        />
      )}
    </ListGroup>
  </Card>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
