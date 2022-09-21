import React from 'react';
import Button from '../Button/Button';
import './GameBuy.css';

const GameBuy = ({ game }) => {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} &#8372;</span>
      <Button onClick={() => null} type="primary">
        В корзину
      </Button>
    </div>
  );
};

export default GameBuy;
