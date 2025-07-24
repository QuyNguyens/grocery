import React from 'react';
import Items from '../OurStore/components/Items';
import { products } from 'constants/product';
import Catalog from 'components/molecules/catalog';

const Categories = () => {
  return (
    <div className="flex">
      <div className="flex-1 grid grid-cols-3 p-4">
        <Items title="Bakery" list={['Biscuits', 'Cookies', 'Wafers', 'Cake']} />
        <Items title="Meat & Eggs" list={['Poultry', 'Eggs', 'Meats', 'Chicken']} />
        <Items title="Snacks Item" list={['Crackers', 'Bars', 'Chips', 'Toasts']} />
        <Items title="Healthy Food" list={['Honey', 'Vegetables', 'Fruits', 'Juices']} />
        <Items title="Milk Items" list={['Coffee', 'Cream', 'Chocolate', 'Milk']} />
        <Items title="Sea Food" list={['Meats', 'Chicken', 'Eggs', 'Poultry']} />
      </div>
      <div className="flex-1">
        <Catalog title="Best Selling" products={products} />
      </div>
    </div>
  );
};

export default Categories;
