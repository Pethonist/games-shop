import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
