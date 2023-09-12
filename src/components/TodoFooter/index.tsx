import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { SxProps } from '@mui/system';

const typographyStyles: SxProps = {
  color: '#A9A9A9',
  textAlign: 'center',
  fontFamily: 'Montserrat',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal'
};

const linkStyles: SxProps = {
  color: '#A9A9A9',
  fontFamily: 'Montserrat',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
  textDecoration: 'underline #A9A9A9',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#757575'
  }
};

export const TodoFooter: React.FC = () => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'center'}
      py={2.5}
    >
      <Typography
        sx={typographyStyles}
      >
        created by <Link href='https://github.com/adrian-villamil' sx={linkStyles}>adrian-villamil</Link> - devChallenges.io
      </Typography>
    </Stack>
  );
};