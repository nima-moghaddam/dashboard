import Main from './component/Main/index';
import Navbar from './component/Navbar/index';
import Sidebar from './component/Sidebar/index';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
