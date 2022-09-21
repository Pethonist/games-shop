import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BiCartAlt } from 'react-icons/bi';
import { calcTotalPrice } from '../../utils/utils';
import './CartBlock.css';
import CartMenu from './../CartMenu/CartMenu';
import ItemsInCart from '../ItemsInCart/ItemsInCart';

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  const items = useSelector((state) => state.cart.itemsInCart);

  const totalPrice = calcTotalPrice(items);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} &#8372;</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};

export default CartBlock;
