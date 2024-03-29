import Stack from '@mui/material/Stack';
import { TodoItem } from "../../components/TodoItem";
import { TodoForm } from "../../components/TodoForm";
import { useAppContext } from '../../hooks/useAppContext';

export const ActiveTodos: React.FC = () => {
  const { getActiveTodos } = useAppContext();

  return (
    <>
      <Stack spacing={2} my={'20px'}>
        <TodoForm />
        <Stack spacing={2}>
          {getActiveTodos().map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </Stack>
      </Stack>
    </>
  );
};