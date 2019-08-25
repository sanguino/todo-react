import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { FormGroup } from 'react-bootstrap';

const App = () => (
  <FormGroup style={{
    width: "100%",
    maxWidth: "330px",
    padding: "15px",
    margin: "auto",
}}>
    <h1> Todo List </h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </FormGroup>
)

export default App
