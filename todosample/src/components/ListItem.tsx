import { Todo, deleteTodo, editTodo } from '@/apis/todo';

export const ListItem: React.FC<IProps> = ({
  todo: { id, title, done, createdAt, updatedAt },
  setTodo,
  setDone,
  setEditModal,
}) => {
  const handleClickDoneChangeButton = async () => {
    const editedTodo = await editTodo(id, { title, done: !done });
    if (!editedTodo || typeof editedTodo !== 'object') return;
    if (done) {
      setDone(beforeDoneList => beforeDoneList.filter(todo => todo.id !== id));
      setTodo(beforeTodoList => [...beforeTodoList, editedTodo]);
    } else {
      setTodo(beforeTodoList => beforeTodoList.filter(todo => todo.id !== id));
      setDone(beforeDoneList => [...beforeDoneList, editedTodo]);
    }
  };

  const handleClickEditTodo = () => {
    setEditModal({
      id,
      title,
      done,
    });
  };

  const handleClickDeleteTodo = async () => {
    const result = await deleteTodo(id);
    if (!result) return;
    if (done) {
      setDone(beforeDoneList => beforeDoneList.filter(todo => todo.id !== id));
    } else {
      setTodo(beforeTodoList => beforeTodoList.filter(todo => todo.id !== id));
    }
  };

  return (
    <li className="w-full flex justify-between items-center border-b-4 border-cyan-50 h-20">
      <div className="flex w-full items-center">
        <div className="handle w-4 h-4 bg-sky-600 mr-2 cursor-move"></div>
        {done ? (
          <button
            className="w-4 h-4 rounded-full bg-lime-400 cursor-pointer"
            onClick={handleClickDoneChangeButton}
          ></button>
        ) : (
          <button
            className="w-4 h-4 rounded-full bg-amber-400 cursor-pointer"
            onClick={handleClickDoneChangeButton}
          ></button>
        )}
        <div className="ml-2 w-3/4 truncate">{title}</div>
      </div>
      <div className="flex items-center shrink-0">
        <div className="w-4">
          <div
            className="cursor-help select-none font-bold"
            title={formatDate(createdAt)}
          >
            C
          </div>
          <div
            className="cursor-help select-none font-bold"
            title={formatDate(updatedAt)}
          >
            U
          </div>
        </div>
        <div className="flex flex-col ml-0.5">
          <button
            className="w-4 select-none font-bold"
            onClick={handleClickEditTodo}
          >
            E
          </button>
          <button
            className="w-4 select-none font-bold"
            onClick={handleClickDeleteTodo}
          >
            D
          </button>
        </div>
      </div>
    </li>
  );
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  return date.toLocaleDateString('ko', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

interface IProps {
  todo: Todo;
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
