import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { toast } from 'react-toastify';
import { AppContext } from '../../context/AppContext';

interface Props {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const { toggleTodoStatus, deleteTodoById } = React.useContext(AppContext) as TodoAppContext;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    toggleTodoStatus(todo.id, event.target.checked);
    notifyStatusChanged(event.target.checked);
  };

  const handleButtonClick = (): void => {
    notifyDeletedTodo(todo.details);
    deleteTodoById(todo.id);
  };

  const notifyDeletedTodo = (message: string): void => {
    const details = message;
    toast.success(`Deleted task: "${details}".`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const notifyStatusChanged = (completed: boolean): void => {
    if (todo) {
      toast.success(`"${todo.details}" is now ${completed ? 'completed' : 'active'}.`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          checked={todo.completed}
          onChange={handleCheckboxChange}
          sx={{
            '&.Mui-checked': {
              color: '#2F80ED'
            },
            '& .MuiSvgIcon-root': {
              fontSize: 32,
            },
            p: '0 4px 0 0',
          }}
        />
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontWeight: '500',
            fontSize: '18px',
            flex: 1
          }}
        >
          {todo.details}
        </Typography>
        <IconButton
          onClick={handleButtonClick}
          sx={{
            '&:hover': {
              backgroundColor: '#EB5757'
            },
            '&:hover .MuiSvgIcon-root': {
              color: 'white'
            }
          }}
        >
          <DeleteOutlineIcon sx={{ color: '#BDBDBD' }} />
        </IconButton>
      </Box>
    </>
  );
};