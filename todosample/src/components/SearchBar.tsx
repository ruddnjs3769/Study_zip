import { useState } from 'react';
import { Todo, createTodo } from '@/apis/todo';

export const SearchBar: React.FC<Iprops> = ({ searchLabel, addTodo }) => {
  const [text, setText] = useState<string>('');

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;
    setText(inputValue);
  };

  const requestCreateTodo = async () => {
    if (!text) return;
    // order optional 특정 순서에 생기게 하려면 설정 필요
    const createdTodo = await createTodo({ title: text });
    if (createdTodo && typeof createdTodo === 'object') {
      addTodo(beforeTodoList => [createdTodo, ...beforeTodoList]);
      // 원래 있던 todo 위에 쌓인다. 백엔드가 아닌 프론트에서 잡고있는 부분이라 새로고침 누르면 아마 순서바뀔것.
      setText('');
    }
  };

  const handleKeyDownInput = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key !== 'Enter') return;
    requestCreateTodo();
  };

  const handleClickCreateTodoButton = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    requestCreateTodo();
  };

  return (
    <div>
      {searchLabel && (
        <div className="text-5xl font-bold select-none">
          <p className="text-2xl">{localStorage.getItem('userName') ?? ''}`s</p>
          {searchLabel}
        </div>
      )}
      <div className="flex mt-8">
        <input
          onChange={handleChangeInputValue}
          onKeyDown={handleKeyDownInput}
          value={text}
          type="text"
          className="w-80 border-2 px-4 py-2 border-cyan-50 rounded-lg focus:outline-none bg-transparent"
        />
        <button
          className="ml-5 w-11 h-11 text-3xl border-2 border-cyan-50 rounded-lg pb-4 select-none"
          onClick={handleClickCreateTodoButton}
        >
          +
        </button>
      </div>
    </div>
  );
};

interface Iprops {
  searchLabel?: string;
  addTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
