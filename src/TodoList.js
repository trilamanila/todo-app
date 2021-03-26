import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
  return todos.map(todo => {
    return <Todo key={todo} todo={todo} />;
  });
}

export default TodoList;
