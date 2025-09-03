import { useState } from 'react';
import Starter from './pages/Starter';
import UserChoice from './pages/userChoice'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faB } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

library.add(faB,faMusic);

function App() {
  const [count, setCount] = useState(0)

  return (
        <BrowserRouter>
        <Routes>
          <Route index element={<Starter />} />
          <Route path ="/choice" element={<UserChoice />} />
        </Routes>
        </BrowserRouter>
  )
}


export default App
