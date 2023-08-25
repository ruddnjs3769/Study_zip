import axios from 'axios';

//쇼핑몰의 경우
// 상품, 인증 등 섹션을 나누어서 빼는게 좋다.
const requestTodo = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
  headers: {
    'content-type': 'application/json',
    apikey: 'KDT5_nREmPe9B',
    username: 'KDT5_SongSuYeon',
  },
});

export const getTodoList = async (): Promise<Todo[]> => {
  try {
    const { data } = await requestTodo.get('');
    return data;
  } catch (error) {
    console.warn(error);
    console.warn('Fail to load TodoList');
    return [];
  }
};

export const reorderTodoList = async (
  payload: ReorderTodo,
): Promise<boolean> => {
  try {
    const { data } = await requestTodo.put('reorder', payload);
    return data;
  } catch (error) {
    console.warn(error);
    console.warn('Fail to reorder TodoList');
    return false;
  }
};

export const createTodo = async (
  payload: CreateTodo, // payload로 받을 데이터 타입 지정
): Promise<Todo | boolean> => {
  try {
    const { data } = await requestTodo.post('', payload);
    return data;
  } catch (error) {
    console.warn(error);
    console.warn('Fail to create Todo');
    return false;
  }
};

export const editTodo = async (
  id: string,
  payload: EditTodo,
): Promise<Todo | boolean> => {
  try {
    const { data } = await requestTodo.put(id, payload);
    return data;
  } catch (error) {
    console.warn(error);
    console.warn('Fail to edit Todo');
    return false;
  }
};

export const deleteTodo = async (id: string): Promise<boolean> => {
  try {
    const { data } = await requestTodo.delete(id);
    return data;
  } catch (error) {
    console.warn(error);
    console.warn('Fail to delete Todo');
    return false;
  }
};

export interface Todo {
  id: string; // 할 일 ID
  order: number; // 할 일 순서
  title: string; // 할 일 제목
  done: boolean; // 할 일 완료 여부
  createdAt: string; // 할 일 생성일
  updatedAt: string; // 할 일 수정일
}

export interface ReorderTodo {
  todoIds: string[];
}

export interface CreateTodo {
  title: string; // 할 일 제목
  order?: number; // 할 일 순서
}

export interface EditTodo {
  title: string; // 할 일 제목 (필수!)
  done: boolean; // 할 일 완료 여부 (필수!)
  order?: number; // 할 일 순서
}
