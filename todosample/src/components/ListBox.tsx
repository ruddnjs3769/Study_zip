import { Todo, deleteTodo, reorderTodoList } from '@/apis/todo';
import { ReactSortable, Sortable, Store } from 'react-sortablejs';

export const ListBox: React.FC<Iprops> = ({
  boxLabel,
  todoList,
  setTodoList,
  removebutton = false,
  children,
}) => {
  const handleSetTodoList = async (
    newState: Todo[],
    sortable: Sortable | null,
    store: Store,
  ) => {
    if (!store.dragging) return;

    const isSame = todoList.every(
      (todo, index) => todo.id === newState[index].id,
    );
    setTodoList(newState);
    if (isSame) return;
    const result = await reorderTodoList({
      todoIds: newState.map(item => item.id),
    });
    if (!result) {
      setTodoList(todoList);
    }
  };

  const handleClickRemoveAllDoneList = async () => {
    const idList = todoList.map(todo => todo.id);
    const results = await Promise.all(idList.map(id => deleteTodo(id)));
    if (results.every(result => result)) {
      setTodoList([]);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        {boxLabel && <div className="text-2xl select-none">{boxLabel}</div>}
        {removebutton && (
          <button
            className="text-xl select-none"
            onClick={handleClickRemoveAllDoneList}
          >
            Remove All
          </button>
        )}
      </div>
      <ReactSortable
        className="h-96 mt-1 overflow-y-auto border border-cyan-50 px-4 py-2 rounded-lg"
        list={todoList}
        setList={handleSetTodoList}
        animation={200}
        group={boxLabel}
        easing="ease-out"
        handle=".handle"
      >
        {children}
      </ReactSortable>
    </>
  );
};

interface Iprops {
  boxLabel?: string;
  children: React.ReactElement[];
  removebutton?: boolean;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}
