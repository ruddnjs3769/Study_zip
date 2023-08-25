import { React, useState } from "react";

// export default class App extends Component {
//   state = {};
//   render() {
//     let name = "배진호";
//     let str = "나이가 적음";
//     let age = 21;
//     age++;
//     const FI = 3.14;
//     if (age > 40) {
//       str = "나이가 많음";
//     } else {
//       str = "나이가 적음";
//     }

//     return (
//       <div className="App">
//         이름 : {name} <br />
//         <br />
//         <br />
//         <br />
//         나이 : {age} <br />
//         나이의 많고 적음 : {age > 40 ? "나이가 많음" : "나이가 적음"}
//         <br />
//         <br />
//         <br />
//         <br />
//         {FI}
//       </div>
//     );
//   }
// }

// function App() {
//   let name = "김경원입니다";
//   let age = 39;

//   age++;

//   return (
//     <div className="App">
//       이름 : {name}
//       <br />
//       나이 : {age}
//       <br />
//       성인인가요? : {age >= 20 ? "예" : "아니오"}
//     </div>
//   );
// }

// export default App;

import TodoList from "./TodoList";
import "./App.scss";
import { Button, Input } from "antd";

const App = () => {
  const [test, setTest] = useState("테스트");
  const [num, setNum] = useState(0);
  const [todoText, setTodoText] = useState("");
  let str = "테스트";

  const handleTest = () => {
    setTest(test + "!");
    str = str + "!";
    setNum(num + 1);
    setTodos([{ id: 1, text: "리액트 만들기", hard: "쉬움" }]);
  };

  const [todos, setTodos] = useState([
    { id: 1, text: "리엑트 만들기", hard: "쉬움" },
    { id: 2, text: "리엑트 빌드 하기", hard: "보통" },
    { id: 3, text: "리엑트 배포하기", hard: "어려움" },
    { id: 4, text: "리액트 실습하기", hard: "보통" },
  ]);
  const todos1 = [
    { id: 1, text: "리엑트 만들기", hard: "쉬움" },
    { id: 2, text: "리엑트 빌드 하기", hard: "보통" },
    { id: 3, text: "리엑트 배포하기", hard: "어려움" },
  ];
  const todos2 = [
    { id: 1, text: "리엑트 만들기", hard: "--쉬움" },
    { id: 2, text: "리엑트 빌드 하기", hard: "--보통" },
    { id: 3, text: "리엑트 배포하기", hard: "--어려움" },
  ];
  return (
    <div className="App">
      <h1>나의 할일 목록 만들기</h1>
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        할일작성
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTodos([
              ...todos,
              { id: todos.length + 1, text: todoText, hard: "쉬움" },
            ]);
            setTodoText("");
          }}
        >
          <Input
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
          />
        </form>
      </div>
      <div>{todoText}</div>
      <div>testUseState : {test}</div>
      <div>testString : {str}</div>
      <div>testNumber : {num}</div>
      <Button type="primary" onClick={handleTest}>
        test!
      </Button>
      <TodoList todos={todos} />
      <TodoList todos={todos2} />
    </div>
  );
};

export default App;
