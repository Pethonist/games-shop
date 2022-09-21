import React from 'react';
import { BiCartAlt } from 'react-icons/bi';
import './CartBlock.css';

const CartBlock = () => {
  return (
    <div className="cart-block">
      <BiCartAlt size={25} className="cart-block__icon" />
      <span className="cart-block__total-price">2121 &#8372;</span>
    </div>
  );
};

export default CartBlock;
