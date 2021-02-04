import React, { ChangeEvent, FormEvent } from "react";

type AddTodoProps = {
  task: string;
  handleChange: (e: ChangeEvent) => void;
  handleSubmit: (e: FormEvent) => void;
};

export const AddTodo = ({ task, handleChange, handleSubmit }: AddTodoProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="task" value={task} onChange={handleChange} />
      <button type="submit">+</button>
    </form>
  );
};
