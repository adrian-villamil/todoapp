import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/system';

const typographyStyles: SxProps = {
  textAlign: 'center',
  fontFamily: 'Raleway',
  fontWeight: '700',
  fontSize: '36px',
  color: '#333333',
  padding: '26px',
  letterSpacing: '-1.62px'
};

export const TodoHeader: React.FC = () => {
  return (
    <Typography
      sx={typographyStyles}
    >
      #todo
    </Typography>
  );
};