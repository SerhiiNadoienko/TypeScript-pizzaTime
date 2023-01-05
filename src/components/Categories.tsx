import React from 'react';

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
};

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Hot', 'Closed'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            onClick={() => onClickCategory(i)}
            key={categoryName}
            className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
