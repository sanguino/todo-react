import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const AddTodo = ({ dispatch }) => {
  let input

  return (

      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>

        <InputGroup>
          <FormControl ref={node => input = node} />
          <InputGroup.Append>
            <Button type="submit" size="sm">Add Todo</Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
  )
}

export default connect()(AddTodo)
