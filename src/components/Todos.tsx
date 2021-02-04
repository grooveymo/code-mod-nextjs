import React, { useState } from "react";

import { Row } from "./Row";
import { data } from "../todos";

type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data);

  const handleDelete = (id: string) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCheck = (id: string) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <section>
      {todos.map((todo) => (
        <Row
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        ></Row>
      ))}
    </section>
  );
};
