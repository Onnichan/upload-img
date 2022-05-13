import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Login} from './pages/Login';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
