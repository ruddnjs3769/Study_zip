import React, { Component, useState, useEffect,useReducer } from 'react';
//import React, { Component } from 'react';
import {Button , Input, Select, Modal} from 'antd';
import logo from './logo.svg';
import './TodoApp.scss';
/*
class App extends Component {
  state={}
  render() {
    let name = “배진호“;
    let str = “나이가 적음“;
    let age = 39;
    let namestyle = “oldstyle”;
    age++;
    age++;
    const FI = 3.14;
    if(age>40){
      str = “나이가 많음“;
      namestyle = “oldstyle”;
    }else{
      str = “나이가 적음“;
      namestyle = “youngstyle”;
    }
    return (
      <div className=“App”>
        <div className={“name “+namestyle}
         style={{fontSize:40, fontWeight:“bold”}}
         >이름 : {name} <br /><br /><br /><br /></div>
        나이 : {age} <br/>
        나이의 많고 적음 : {age>40?“나이가 많음“:”나이가 적음“}
        <br /><br /><br /><br />
        {FI}
      </div>
    );
  }
}
*/
import TodoList from './TodoList';
const TodoApp = () => {
  const [todoText, setTodoText] = useState(“”);
  const [todoModifyText, setTodoModifyText] = useState(“”);
  const [selectText, setSelectText] = useState(“”);
  const [selectModifyText, setSelectModifyText] = useState(“”);
  const [selectNumber, setSelectNumber] = useState(0);
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, text: '리엑트 만들기' , hard:“쉬움“},
    { id: 2, text: '리엑트 빌드 하기', hard:“어려움” },
    { id: 3, text: '리엑트 배포하기', hard:“보통” },
    { id: 4, text: '실습하기', hard:“어려움” }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    let tmp = [...todos];
    let obj = tmp[selectNumber];
    obj.text = todoModifyText;
    obj.hard = selectModifyText;
    tmp[selectNumber] = obj;
    let updatedData ={title:todoModifyText, description:selectModifyText, complete:0};
    //alert(`http://localhost:3003/api/works/${tmp[selectNumber]._id}`);
    const url = `http://localhost:3003/api/works/${tmp[selectNumber]._id}`;
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      let tmp = [...todos];
      let obj = tmp[selectNumber];
      obj.text = todoModifyText;
      obj.hard = selectModifyText;
      tmp[selectNumber] = obj;
      setTodos(tmp);
      //alert(selectNumber);
      //alert(todoModifyText);
      setIsModalOpen(false);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    // 변화 감지
    console.log(“change”);
    if(data){
      let tmp = [...data];
      let tmpArray = [];
      tmp.map((item, index)=>{
        let tmpObj ={ id: item.id, text: item.title , hard:“쉬움“, _id:item._id};
        tmpArray.push(tmpObj);
      });
      setTodos(tmpArray);
    }
  }, [data, update]);
  useEffect(() => {
    // 초기 데이터 로딩
    console.log(“init”);
     fetchData()
       .then((response) => setData(response))
       .catch((error) => console.log(error));
   // watchExternalData();
  }, []);
  const fetchData = async () => {
    // API 요청 처리
    const response = await fetch('http://localhost:3003/api/works/today');
    console.log(response);
    const data = await response.json();
    return data;
  };
  const onSave = () =>{
    // POST 요청을 보낼 엔드포인트 URL
    const url = 'http://localhost:3003/api/works';
    // 데이터 객체
    const postData = {
      title: todoText,
      description: selectText,
      complete:0
    };
    console.log(postData);
    // fetch를 사용하여 POST 요청 보내기
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // 응답 데이터 처리
        console.log(responseData);
        let tmp =  [...todos];
        tmp.push({ id: tmp.length+1, text: todoText , hard:selectText});
        setTodos(tmp);
      })
      .catch((error) => {
        // 오류 처리
        console.error('Error:', error);
      });
  }
  const onModify = (todo, number) =>{
    setSelectNumber(number);
    setTodoModifyText(todo.text);
    setSelectModifyText(todo.hard);
    setIsModalOpen(true);
  }
  const onDelete = async (number) =>{
    //console.log(number);
    //alert(number);
    let tmp =  [...todos];
     //alert(`http://localhost:3003/api/works/${tmp[selectNumber]._id}`);
    const url = `http://localhost:3003/api/works/${tmp[number]._id}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({})
    }).then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        fetchData()
        .then((response) => {
          console.log(“fetchData”);
          setData(response);
          setUpdate(true);
        })
        .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    /*
    let tmp =  [...todos];
    tmp.splice(number,1);
    //tmp.push({ id: tmp.length+1, text: todoText , hard:selectText});
    setTodos(tmp);
    */
  }
  return (
    <div className=“App”>
      <h1>나의 할일 목록 만들기</h1>
      <Modal title=“나의 할일 수정” open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div style={{width:400, display:“flex”,
       flexDirection:“row”, justifyContent:“center”, alignItems:“center”}}>
        <div  style={{width:120}}>할 일 </div>
        <Input
        value={todoModifyText}
         onChange={(e)=>{
        setTodoModifyText(e.target.value);
      }}/>
        <Select
          labelInValue
          defaultValue={{ value: '쉬움', label: '쉬움' }}
          style={{ width: 120 }}
          onChange={(e)=>{
            console.log(e);
            console.log(e);
            setSelectModifyText(e.value);
          }}
          options={[
            {
              value: '쉬움',
              label: '쉬움',
            },
            {
              value: '보통',
              label: '보통',
            }, {
              value: '어려움',
              label: '어려움',
            }
          ]}
        />
        </div>
      </Modal>
      <div style={{width:500, display:“flex”,
       flexDirection:“row”, justifyContent:“center”, alignItems:“center”}}>
        <div  style={{width:120}}>할 일 작성</div>
        <Input
        value={todoText}
         onChange={(e)=>{
        setTodoText(e.target.value);
      }}/>
        <Select
          labelInValue
          defaultValue={{ value: '쉬움', label: '쉬움' }}
          style={{ width: 120 }}
          onChange={(e)=>{
            console.log(e);
            console.log(e);
            setSelectText(e.value);
          }}
          options={[
            {
              value: '쉬움',
              label: '쉬움',
            },
            {
              value: '보통',
              label: '보통',
            }, {
              value: '어려움',
              label: '어려움',
            }
          ]}
        />
        </div>
      <div>{todoText}{selectText?<span>({selectText})</span>:null}</div>
      <Button  onClick={()=>{
        onSave();
      }} >저장</Button>
      <Button  onClick={()=>{
       setIsModalOpen(true);
      }} >모달 오픈</Button>
      <TodoList todos={todos} onDelete={onDelete} onModify={onModify} />
    </div>
  );
};
/*
class App extends Component {
  constructor(props){
    super(props);
    this.state={todoText:“”,test:“테스트“,
              test1:[1,2,3],test2:1,test3:1.5,
              todos:[
                { id: 1, text: '리엑트 만들기' , hard:“쉬움“},
                { id: 2, text: '리엑트 빌드 하기', hard:“어려움” },
                { id: 3, text: '리엑트 배포하기', hard:“보통” },
                { id: 4, text: '실습하기', hard:“어려움” }
              ],selectText:“”};
    console.log(“constructor”);
  }
  componentDidMount(){
    console.log(“componentDidMount”);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log(“shouldComponentUpdate”);
    return true;
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(“componentDidUpdate”);
  }
  componentWillUnmount(){
    console.log(“componentWillUnmount”);
  }
  onOk = () =>{
  }
  onDelete = (number) =>{
    //console.log(number);
    //alert(number);
    let tmp =  [...this.state.todos];
    tmp.splice(number,1);
    //tmp.push({ id: tmp.length+1, text: todoText , hard:selectText});
    //setTodos(tmp);
    this.setState({todos:tmp});
  }
  render() {
    console.log(“render”);
    return (
      <div className=“App”>
        <h1>나의 할일 목록 만들기</h1>
        <div style={{width:400, display:“flex”,
         flexDirection:“row”, justifyContent:“center”, alignItems:“center”}}>
          <div  style={{width:100}}>할 일 작성</div>
          <Input
          value={this.state.todoText}
           onChange={(e)=>{
            this.setState({todoText:e.target.value})
          //setTodoText(e.target.value);
        }}/>
        <Select
          labelInValue
          defaultValue={{ value: '쉬움', label: '쉬움' }}
          style={{ width: 120 }}
          onChange={(e)=>{
            console.log(e);
            console.log(e);
            this.setState({selectText:e.value});
            //setSelectText(e.value);
          }}
          options={[
            {
              value: '쉬움',
              label: '쉬움',
            },
            {
              value: '보통',
              label: '보통',
            }, {
              value: '어려움',
              label: '어려움',
            }
          ]}
        />
        </div>
        <div>{this.state.todoText}{this.state.selectText?<span>({this.state.selectText})</span>:null}</div>
        <Button  onClick={()=>{
          let tmp =  [...this.state.todos];
          tmp.push({ id: tmp.length+1, text: this.state.todoText , hard:this.state.selectText});
          this.setState({todos:tmp});
          //setTodos(tmp);
        }} >저장</Button>
        <TodoList todos={this.state.todos} onDelete={this.onDelete}/>
      </div>
    );
  }
}
*/
export default TodoApp;