import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import HomePage from './pages/home-page/home-page';
import Header from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
