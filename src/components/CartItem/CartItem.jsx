import React from 'react';
import './CartItem.css';

const CartItem = ({ price, title, id }) => {
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} &#8372;</span>
      </div>
    </div>
  );
};

export default CartItem;
