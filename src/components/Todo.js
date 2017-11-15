import React, { Component } from "react";
const Todo = ({ todo, toggle }) => {
  return (
    <div>
      <div onClick={toggle}>
        {todo.content}
        <span>
          {todo.completed ? "(done)" : "(pending)"}
        </span>
      </div>
    </div>
  );
};

export default Todo;
