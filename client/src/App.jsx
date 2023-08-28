'use client';
import './App.css';
import 'flowbite';
import {Route, Routes} from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Main from './components/Main';
import RegisterModalPlane from './components/subcomponents/RegisterModalPlane';
import LoginModalPlane from './components/subcomponents/LoginModalPlane';
import Layout from './Layout';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App