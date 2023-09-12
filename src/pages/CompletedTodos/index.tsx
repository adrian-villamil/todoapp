import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import buttonClasses from '@mui/material/Button/buttonClasses';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TodoItem } from '../../components/TodoItem';
import { AppContext } from '../../context/AppContext';
import { SxProps } from '@mui/system';

const DeleteButtonStyles: SxProps = {
  width: 124,
  height: 40,
  backgroundColor: '#EB5757',
  fontFamily: 'Montserrat',
  fontWeight: '600',
  fontSize: 12,
  textTransform: 'lowercase',
  '&:hover': {
    backgroundColor: '#e23535'
  },
  [`& .${buttonClasses.startIcon} > *:nth-of-type(1)`]: {
    fontSize: 'inherit',
  }
};

export const CompletedTodos: React.FC = () => {
  const { getCompletedTodos, deleteCompletedTodos } = React.useContext(AppContext) as TodoAppContext;

  const handleButtonClick = (): void => {
    deleteCompletedTodos();
  };

  return (
    <Stack spacing={2} my={'10px'}>
      <Stack spacing={2}>
        {getCompletedTodos().map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </Stack>
      <Stack direction={'row'} justifyContent={'flex-end'}>
        <Button
          variant='contained'
          onClick={handleButtonClick}
          startIcon={<DeleteOutlineIcon />}
          sx={DeleteButtonStyles}
        >
          delete all
        </Button>
      </Stack>
    </Stack>
  );
};