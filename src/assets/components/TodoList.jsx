// TodoApp.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import styled from "styled-components";

const TodoApp = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  };

  return (
    <StyledContainer>
      <h1>To Do List</h1>
      <Form>
        <Form.Group controlId="formTodo">
          <Form.Label>Goals</Form.Label>
          <StyledFormInput
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Form.Group>
      </Form>

      <StyledListGroup>
        {todos.map((todo, index) => (
          <StyledListItem key={index} onClick={() => removeTodo(index)}>
            {todo}
          </StyledListItem>
        ))}
      </StyledListGroup>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align : center;
  margin-top: 30vh;
`;

const StyledFormInput = styled(Form.Control)`

 width:90vh;
  margin-bottom: 20px;
`;

const StyledListGroup = styled(ListGroup)`
  border: none; /* Remove border */
  width: 70%;
  margin-left:310px;

`;

const StyledListItem = styled(ListGroup.Item)`
  cursor: pointer;
  border: none; /* Remove border */
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  &:last-child {
    border-bottom: none; /* Remove border bottom for the last item */
  }
`;

export default TodoApp;
