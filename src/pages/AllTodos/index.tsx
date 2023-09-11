import Stack from '@mui/material/Stack';
import { TodoItem } from '../../components/TodoItem';
import { TodoForm } from '../../components/TodoForm';

export const AllTodos: React.FC = () => {
  return (
    <Stack spacing={2} my={'20px'}>
      <TodoForm />
      <Stack spacing={2}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </Stack>
    </Stack>
  );
};