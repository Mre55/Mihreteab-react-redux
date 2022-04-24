import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";

const App = () => (
  <div className='flex justify-center'>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detailview/:currentData" element={<DetailPage />} />
    </Routes>
  </div>
)

export default App;
