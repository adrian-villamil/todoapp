import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { AllTodos } from './pages/AllTodos';
import { ActiveTodos } from './pages/ActiveTodos';
import { CompletedTodos } from './pages/CompletedTodos';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { SxProps } from '@mui/system';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

const tabListStyles: SxProps = {
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
      {/* HEADER */}
      <TodoHeader />

      {/* MAIN */}
      <Box sx={{ width: '100%', typography: 'body1', flex: 1 }}>
        <TabContext value={positionTab}>
          <Box sx={{ borderBottom: 1, borderColor: '#bdbdbd' }}>
            <TabList
              onChange={handleTabChange}
              sx={tabListStyles}
            >
              <Tab label='All' value='1' />
              <Tab label='Active' value='2' />
              <Tab label='Completed' value='3' />
            </TabList>
          </Box>
          <TabPanel value='1' sx={{ p: 0 }}>
            <AllTodos />
          </TabPanel>
          <TabPanel value='2' sx={{ p: 0 }}>
            <ActiveTodos />
          </TabPanel>
          <TabPanel value='3' sx={{ p: 0 }}>
            <CompletedTodos />
          </TabPanel>
        </TabContext>
      </Box>

      {/* FOOTER */}
      <TodoFooter />

      {/* TOAST NOTIFICATIONS */}
      <ToastContainer />
    </div>
  );
};
