import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import { AllTodos } from './pages/AllTodos';
import { ActiveTodos } from './pages/ActiveTodos';
import { CompletedTodos } from './pages/CompletedTodos';
import './App.css';

const TabContent = styled(TabPanel)(({ theme }) => ({
  padding: '0',
}));

const TabListStyles = {
  "& .MuiTabs-flexContainer": {
    justifyContent: 'space-around'
  },
  '& .MuiButtonBase-root': {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#333333'
  },
  '& .MuiTabs-indicator': {
    height: '4px',
    borderRadius: '4px 4px 0 0',
    backgroundColor: '#2F80ED'
  }
};

export const App: React.FC = () => {
  const [positionTab, setPositionTab] = useState<string>('1');

  const handleTabChange = (event: React.SyntheticEvent, value: string): void => {
    setPositionTab(value);
  };

  return (
    <div className="App">
      {/* TITLE */}
      <Typography
        sx={{
          textAlign: 'center',
          fontFamily: 'Raleway',
          fontWeight: '700',
          fontSize: '36px',
          color: '#333333',
          padding: '26px',
          letterSpacing: '-1.62px'
        }}
      >
        #todo
      </Typography>

      {/* TABS */}
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={positionTab}>
          <Box sx={{ borderBottom: 1, borderColor: '#bdbdbd' }}>
            <TabList
              onChange={handleTabChange}
              sx={TabListStyles}
            >
              <Tab label='All' value='1' />
              <Tab label='Active' value='2' />
              <Tab label='Completed' value='3' />
            </TabList>
          </Box>
          <TabContent value='1'>
            <AllTodos />
          </TabContent>
          <TabContent value='2'>
            <ActiveTodos />
          </TabContent>
          <TabContent value='3'>
            <CompletedTodos />
          </TabContent>
        </TabContext>
      </Box>
    </div>
  );
};
