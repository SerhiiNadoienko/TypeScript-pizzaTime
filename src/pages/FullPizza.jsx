import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './FullPizza.scss';
import { Link } from 'react-router-dom';
import MySpinner from '../components/Spinner/Spinner';
const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://63ab08e4fdc006ba6053b2ca.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('smth went wrong');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <MySpinner />;
  }

  return (
    <div className="container">
      <div className="FullPizza">
        <div className="FullPizza-image">
          <img src={pizza.imageUrl} alt="pizza" />
        </div>
        <div className="FullPizza-info">
          <h2>{pizza.title}</h2>
          <h3>{pizza.price} $</h3>
          <div className="FullPizza-info-wrapper">
            <p>{pizza.description}</p>
          </div>
          <Link to="/">
            <div className="FullPizza_back">
              <h4>Go back</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullPizza;
