import React from 'react';
import { Link } from 'react-router-dom';
import igame from '../assets/empty-cart.png';
import '../scss/components/_cartEmpty.scss';
const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Your cart is empty <span>😕</span>
      </h2>

      <p>Go to the main page to order pizza</p>
      <div className="Empty_img">
        <img src={igame} alt="Empty cart" />
      </div>
      <Link to="/" className="button button--black">
        <span>Go back</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
