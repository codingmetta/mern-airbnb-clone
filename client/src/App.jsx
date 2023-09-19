'use client';
import 'flowbite';

import {Route, Routes} from 'react-router-dom';
import Layout from './pages/Home/index.jsx';
import Popular from './pages/Home/Popular';
import Wow from './pages/Home/Wow.jsx';
import HostGuide from './pages/HostGuide/index.jsx';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>

      <Route path="/"            element={<Layout />}>
        <Route index                element={<Popular />} />
        <Route path="wow"           element={<Wow />} />
        <Route path="tiny-houses"   element={<Wow />} />
        <Route path="pools"         element={<Wow />} />
        <Route path="rooms"         element={<Wow />} />
        <Route path="beach-access"  element={<Wow />} />
        <Route path="houseboats"    element={<Wow />} />
        <Route path="lake"          element={<Wow />} />
        <Route path="luxe"          element={<Wow />} />
        <Route path="view"          element={<Wow />} />
        <Route path="countryside"   element={<Wow />} />
        <Route path="farms"         element={<Wow />} />
        <Route path="wooden-cab"    element={<Wow />} />
        <Route path="design"        element={<Wow />} />
        <Route path="mansions"      element={<Wow />} />
        <Route path="wine-regions"  element={<Wow />} />
      </Route>

      <Route path="/host/homes"    element={<HostGuide />}/>

    </Routes>
  );
}

export default App