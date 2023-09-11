import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const TodoItem: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox
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
        Do coding challenges
      </Typography>
      <IconButton
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
  );
};