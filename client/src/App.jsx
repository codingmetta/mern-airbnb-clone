'use client';
import './App.css';
import 'flowbite';
import {Route, Routes} from 'react-router-dom';


import Main from './components/Main';
import Wow from './pages/Wow.jsx';
import Layout from './Layout';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/wow" element={<Wow />} />
      </Route>
    </Routes>
  );
}

export default App