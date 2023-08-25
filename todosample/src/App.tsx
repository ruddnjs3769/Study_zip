import { useEffect, useState } from 'react';
import { Todo, getTodoList } from '@/apis/todo';
import { EditModal } from '@/components/EditModal';
import { ListBox } from '@/components/ListBox';
import { ListItem } from './components/ListItem';
import { SearchBar } from '@/components/SearchBar';

export default function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [doneList, setDoneList] = useState<Todo[]>([]);
  const [editModal, setEditModal] = useState({
    id: '',
    title: '',
    done: false,
  });
  const [userName, setUserName] = useState('');

  //여기부터 localStarge 저장하는 함수
  const handleClickSetNameInput = () => {
    setUserNameInLocalStorage();
  };

  const setUserNameInLocalStorage = () => {
    localStorage.setItem('userName', userName); // userName 로컬스토리지에 저장
    setUserName('');
  };

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const userName = event.target.value;
    setUserName(userName);
  };
  //여기까지 localStarage 저장하는 함수

  const handleKeyDownInput = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key !== 'Enter') return;
    setUserNameInLocalStorage();
  };

  useEffect(() => {
    (async () => {
      const data = await getTodoList();
      setTodoList(data.filter(todo => !todo.done));
      setDoneList(data.filter(todo => todo.done));
    })();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black text-cyan-50">
      <div className="absolute top-10 right-[12.5%]">
        <div className="font-medium mb-2">Set Name</div>
        <div className="flex items-center">
          <input
            type="text"
            value={userName}
            className="w-62 border-2 px-4 py-2 border-cyan-50 rounded-lg focus:outline-none bg-transparent"
            onKeyDown={handleKeyDownInput}
            onChange={handleChangeInputValue}
          />
          <button
            className="ml-2 w-11 h-11 pt-1.5 text-xl border-2 border-cyan-50 rounded-lg pb-4 select-none"
            onClick={handleClickSetNameInput}
          >
            Set
          </button>
        </div>
      </div>
      <SearchBar searchLabel="Todo List" addTodo={setTodoList} />
      <div className="flex w-3/4 gap-4">
        <div className="w-1/2 mt-8">
          <ListBox
            boxLabel="Todo"
            todoList={todoList}
            setTodoList={setTodoList}
          >
            {todoList.map(todo => (
              <ListItem
                key={todo.id}
                todo={todo}
                setTodo={setTodoList}
                setDone={setDoneList}
                setEditModal={setEditModal}
              />
            ))}
          </ListBox>
        </div>
        <div className="w-1/2 mt-8">
          <ListBox
            boxLabel="Done"
            todoList={doneList}
            setTodoList={setDoneList}
            removebutton
          >
            {doneList.map(todo => (
              <ListItem
                key={todo.id}
                todo={todo}
                setTodo={setTodoList}
                setDone={setDoneList}
                setEditModal={setEditModal}
              />
            ))}
          </ListBox>
        </div>
      </div>
      <div className="air-block h-12"></div>
      {editModal.id && (
        <EditModal
          targeTodo={editModal}
          setEditModal={setEditModal}
          setTodo={setTodoList}
          setDone={setDoneList}
        />
      )}
    </div>
  );
}
