import type { Data } from './+data';
import { useData } from 'vike-react/useData';
import { TodoList } from '@/features/todos/TodoList';

export default function Page() {
  const data = useData<Data>();
  return (
    <>
      <h1>To-do List</h1>
      <TodoList initialTodoItems={data.todo} />
    </>
  );
}
