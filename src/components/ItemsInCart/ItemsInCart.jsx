import React from 'react';
import './ItemsInCart.scss';

const ItemsInCart = ({ quantity = 0 }) => {
  return quantity ? <div className="items-in-cart">{quantity}</div> : null;
};

export default ItemsInCart;
