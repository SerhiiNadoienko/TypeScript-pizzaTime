import { useState, useEffect } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Spinner from './components/Spinner';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://63ab08e4fdc006ba6053b2ca.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => setItems(data));
    console.log('response');
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
              {items.length !== 0 ? (
                items.map((item) => <PizzaBlock key={item.id} {...item} />)
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
