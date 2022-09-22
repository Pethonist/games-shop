import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GameItem } from '../../components';
import './HomePage.scss';

const HomePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3004/games')
      .then((response) => setGames(response.data))
      .catch((error) => {
        console.warn(error);
        alert('Не удалось загрузить игры');
      });
  }, []);

  return (
    <div className="home-page">
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};

export default HomePage;
