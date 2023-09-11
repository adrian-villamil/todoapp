import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import buttonClasses from '@mui/material/Button/buttonClasses';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TodoItem } from '../../components/TodoItem';

const DeleteButtonStyles = {
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
  return (
    <Stack spacing={2} my={'10px'}>
      <Stack spacing={2}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </Stack>
      <Stack direction={'row'} justifyContent={'flex-end'}>
        <Button
          variant='contained'
          startIcon={<DeleteOutlineIcon />}
          sx={DeleteButtonStyles}
        >
          delete all
        </Button>
      </Stack>
    </Stack>
  );
};