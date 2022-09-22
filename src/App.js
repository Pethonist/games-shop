import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import { Header } from './components';
import { GamePage, HomePage, OrderPage } from './pages';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app/:title" element={<GamePage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
