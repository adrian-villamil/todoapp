import Stack from '@mui/material/Stack';
import { TodoItem } from '../../components/TodoItem';
import { TodoForm } from '../../components/TodoForm';
import { useAppContext } from '../../hooks/useAppContext';

export const AllTodos: React.FC = () => {
  const { todos } = useAppContext();

  return (
    <>
      <Stack spacing={2} my={'20px'}>
        <TodoForm />
        <Stack spacing={2}>
          {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </Stack>
      </Stack>
    </>
  );
};