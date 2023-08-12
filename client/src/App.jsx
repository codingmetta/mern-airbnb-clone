'use client';
import './App.css';
import 'flowbite';
import {Route, Routes} from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route index element={<LoginPage />} />
    </Routes>
  );
}

export default App