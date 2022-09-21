import React from 'react';
import classNames from 'classnames';
import './Button.css';

const Button = ({ onClick, type, children, size = 's' }) => {
  const btnClass = classNames({
    btn: true,
    'btn--primary': type === 'primary',
    'btn--secondary': type === 'secondary',
    'btn--small': type === 'small',
    'btn--medium': type === 'medium',
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
