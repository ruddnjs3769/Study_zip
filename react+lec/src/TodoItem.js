import React from "react";
import { Button, Input } from "antd";
import "./TodoItem.scss";
const TodoItem = ({ todo, number, onDelete, onModify }) => {
  return (
    <div
      style={{
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="todoItem">
        {todo.id}. {todo.text}({todo.hard})
      </div>
      <Button
        style={{ height: 60 }}
        onClick={() => {
          //alert(number);
          onDelete(number);
        }}
      >
        삭제
      </Button>
      <Button
        style={{ height: 60 }}
        onClick={() => {
          //alert(number);
          onModify(todo, number);
        }}
      >
        수정
      </Button>
      <div>{number}</div>
    </div>
  );
};
export default TodoItem;
