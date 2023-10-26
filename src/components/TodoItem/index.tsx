import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { AppContext } from '../../context/AppContext';

interface Props {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const { toggleTodoStatus, deleteOneTodo } = React.useContext(AppContext) as TodoAppContext;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    toggleTodoStatus(todo.id, event.target.checked);
  };

  const handleButtonClick = (): void => {
    deleteOneTodo(todo.id);
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