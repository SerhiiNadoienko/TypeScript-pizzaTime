import { Link } from 'react-router-dom';
import igame from '../assets/empty-cart.png';
const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Your cart is empty <icon>😕</icon>
      </h2>

      <p>Go to the main page to order pizza</p>
      <img src={igame} alt="Empty cart" />
      <Link to="/" class="button button--black">
        <span>Go back</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
