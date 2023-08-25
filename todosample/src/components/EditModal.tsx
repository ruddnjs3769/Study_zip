import { useState } from 'react';
import { Todo, editTodo } from '@/apis/todo';

export const EditModal: React.FC<Iprops> = ({
  targeTodo: { id, done, title },
  setEditModal,
  setTodo,
  setDone,
}) => {
  const [editText, setEditText] = useState(title);

  const handleChangeInputEditText = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;
    setEditText(inputValue);
  };

  const handleClickCancelButton = () => {
    setEditModal({ id: '', done: false, title: '' });
  };

  const handleClickEditSaveButton = async () => {
    const editedTodo = await editTodo(id, {
      title: editText,
      done,
    });
    if (!editedTodo || typeof editedTodo !== 'object') return;
    if (done) {
      setDone(beforeDoneList => {
        const editedList = [...beforeDoneList];
        const targetIndex = beforeDoneList.findIndex(
          todo => todo.id === editedTodo.id,
        );
        editedList[targetIndex] = editedTodo;
        return editedList;
      });
    } else {
      setTodo(beforeTodoList => {
        const editedList = [...beforeTodoList];
        const targetIndex = beforeTodoList.findIndex(
          todo => todo.id === editedTodo.id,
        );
        editedList[targetIndex] = editedTodo;
        return editedList;
      });
    }
    setEditModal({ id: '', done: false, title: '' });
  };

  return (
    <div className="w-full h-screen absolute bg-black/50 flex justify-center items-center">
      <div className="py-12 px-12 bg-black mb-12 border border-orange-100 rounded-lg">
        <div className="text-center mb-12 text-3xl font-bold">Edit</div>
        <div>
          <input
            type="text"
            value={editText}
            onChange={handleChangeInputEditText}
            className="w-80 border-2 px-4 py-2 border-cyan-50 rounded-lg focus:outline-none bg-transparent"
          />
        </div>
        <button
          className="mt-8 border border-cyan-50 rounded-lg py-3 px-12 hover:bg-slate-900"
          onClick={handleClickCancelButton}
        >
          취소
        </button>
        <button
          className="mt-8 ml-[3.7rem] border border-cyan-50 rounded-lg py-3 px-12 hover:bg-slate-900"
          onClick={handleClickEditSaveButton}
        >
          저장
        </button>
        <div className="h-1"></div>
      </div>
    </div>
  );
};

interface Iprops {
  targeTodo: {
    id: string;
    title: string;
    done: boolean;
  };
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  setDone: React.Dispatch<React.SetStateAction<Todo[]>>;
  setEditModal: React.Dispatch<
    React.SetStateAction<{
      id: string;
      title: string;
      done: boolean;
    }>
  >;
}
