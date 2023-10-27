import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';
import { AppContext } from '../../context/AppContext';

export const TodoForm: React.FC = () => {
  const [todoDetails, setTodoDetails] = React.useState<string>('');
  const { addTodo } = React.useContext(AppContext) as TodoAppContext;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoDetails(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleButtonClick();
    }
  };

  const handleButtonClick = (): void => {
    if (todoDetails) {
      addTodo(todoDetails);
      notify(todoDetails);
      setTodoDetails('');
    }
  };

  const notify = (message: string): void => {
    const details = message;
    toast.success(`New task added: "${details}".`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <>
      <Stack
        direction={'row'}
        alignItems={'stretch'}
        spacing={3}
      >
        <TextField
          value={todoDetails}
          variant="outlined"
          placeholder="add details"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          InputProps={{
            style: {
              borderRadius: '12px',
              fontFamily: 'Montserrat',
              fontWeight: '400',
            }
          }}
          sx={{
            flex: 8.5
          }}
        />
        <Button
          variant="contained"
          onClick={handleButtonClick}
          sx={{
            borderRadius: '12px',
            fontFamily: 'Montserrat',
            fontWeight: '600',
            textTransform: 'capitalize',
            boxShadow: '0px 2px 6px 0px #7FB1F366',
            backgroundColor: '#2F80ED',
            flex: 1.4
          }}
        >
          Add
        </Button>
      </Stack>
    </>
  );
};