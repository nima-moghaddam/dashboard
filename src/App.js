import Main from './component/Main/index';
import Navbar from './component/Navbar/index';
import Sidebar from './component/Sidebar/index';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';


function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', width: '100%', minHeight: '100%' }}>
        <Sidebar />
        <Box sx={{width: '100%'}} component={'main'}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Box>
      </Box>
      
    </>
  );
}

export default App;
