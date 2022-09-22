import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiCartAlt } from 'react-icons/bi';
import { calcTotalPrice } from '../../utils/utils';
import { CartMenu, ItemsInCart } from '../';
import './CartBlock.scss';

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const navigate = useNavigate();

  const items = useSelector((state) => state.cart.itemsInCart);

  const totalPrice = calcTotalPrice(items);

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate('/order');
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice ? <span className="cart-block__total-price">{totalPrice} &#8372;</span> : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};

export default CartBlock;
