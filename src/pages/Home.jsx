import { useEffect, useContext } from 'react';

import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import NotFoundItems from '../components/NotFoundItemsBlock';

const Home = () => {
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  const getPizzas = async () => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage,
      }),
    );
    window.scrollTo(0, 0);
  };

  const pizzas = items.map((el) => <PizzaBlock key={el.id} {...el} />);
  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

  useEffect(() => {
    getPizzas();
    /* eslint-disable */
  }, [categoryId, sort.sortProperty, currentPage, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => dispatch(setCategoryId(i))} />

        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>something's wrong🤔</h2>
          <p>failed to receive the goods. Please, try again later</p>
        </div>
      ) : searchValue !== '' && pizzas.length === 0 ? (
        <NotFoundItems />
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
      {/*  {searchValue !== '' && pizzas.length === 0 ? (
        <NotFoundItems />
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )} */}
      {categoryId === 0 ? (
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      ) : null}
    </div>
  );
};

export default Home;
