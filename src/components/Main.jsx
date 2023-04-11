import React from 'react';
import Create from './crud/Create';
import Gallery from './Gallery';  
import Dashboard from './Dashboard'; 
import Home from './Home' 
import Info from './crud/Info'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './crud/Update';

const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="create" element={<Create />} />
            <Route path="update" element={<Update />} /> 
            <Route path='info' element={<Info />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Main;

