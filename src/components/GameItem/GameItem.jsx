import React from 'react';
import GameBuy from '../GameBuy/GameBuy';
import GameCover from '../GameCover/GameCover';
import GameGenre from '../GameGenre/GameGenre';
import './GameItem.css';

const GameItem = ({ game }) => {
  return (
    <div className="game-item">
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <GameGenre key={genre} genre={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

export default GameItem;
