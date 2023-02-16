import Main from './component/Main/index';
import Navbar from './component/Navbar/index';
import Sidebar from './component/Sidebar/index';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';


function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
