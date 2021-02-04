import React from "react";

type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: Todo;
  handleDelete: (id: string) => void;
  handleCheck: (id: string) => void;
};

export const Row = ({
  todo: { task, isCompleted, id },
  handleDelete,
  handleCheck,
}: TodoProps) => {
  return (
    <div>
      <p>{task}</p>
      <div>
        <button onClick={() => handleDelete(id)}>X</button>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheck(id)}
        />
      </div>
    </div>
  );
};
