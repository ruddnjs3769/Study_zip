import React from "react";
import "./TodoItem.scss";

const TodoItem = ({ todo }) => {
  return (
    <div className="todoItem">
      {todo.id}. {todo.text} ({todo.hard})
    </div>
  );
};

export default TodoItem;
