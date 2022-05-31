import React from 'react';
import './App.css';
import Home from './components/homePage/Home';
import Login from './components/authorization/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/register/Register';
import ResetPw from './components/resetPassword/ResetPw';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset' element={<ResetPw />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
