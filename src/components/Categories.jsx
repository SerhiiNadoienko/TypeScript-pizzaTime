import { useState } from 'react';

const Categories = () => {
  const [active, setActive] = useState(0);

  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Hot', 'Closed'];

  const onClickCategory = (i) => {
    setActive(i);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((el, i) => (
          <li onClick={() => onClickCategory(i)} key={el} className={active === i ? 'active' : ''}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
