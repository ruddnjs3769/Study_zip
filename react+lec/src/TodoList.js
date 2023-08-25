import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todos, onDelete, onModify }) => {
  return (
    <div>
      <h2>할일 목록</h2>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            number={index}
            onDelete={onDelete}
            onModify={onModify}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
