import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const TodoForm: React.FC = () => {
  return (
    <>
      <Stack
        direction={'row'}
        alignItems={'stretch'}
        spacing={3}
        // my={'20px'}
      >
        <TextField
          variant="outlined"
          placeholder="add details"
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