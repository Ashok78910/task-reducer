import React, { useState, useContext } from 'react'

import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap'

import { v4 } from 'uuid'
import  TodoContext  from '../context/TodoContext'
import { ADD_TODO } from '../context/Action.type'

const TodoFrom = () => {
  const [todoString, SetTodoString] = useState('')
  const {dispatch} = useContext(TodoContext);

  const handleSubmit = e =>{
      e.preventDefault();
      if(todoString === ""){
          return alert ("please enter a todo");
      }
      const todo ={
          todoString,
         id: v4()
      }
      dispatch({
          type:ADD_TODO,
          payload :todo
      })
      SetTodoString("")

  };



  return (
    <Form onSubmit = {handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Add your Todo"
            value = {todoString}
            onChange = {e =>SetTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="warning">Add</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  )
}
export default TodoFrom
