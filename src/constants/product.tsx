import Vegetable from '../../public/images/vegetable.png';
import Fruit from '../../public/images/pine-apple.webp';
import Meat from '../../public/images/meat.png';
import Milk from '../../public/images/meal.png';
import Juice from '../../public/images/juice.png';
import Bakery from '../../public/images/bakery.png';

export interface CartItem {
  image: string;
  type: string;
  name: string;
  price: number;
  discount: number;
  weight: number;
  quantity: number;
}

interface CatalogItem {
  image: string;
  name: string;
}

export const catalogItems: CatalogItem[] = [
  {
    image: Vegetable.src,
    name: 'Vegetables',
  },
  {
    image: Fruit.src,
    name: 'Fruits',
  },
  {
    image: Meat.src,
    name: 'Meats',
  },
  {
    image: Milk.src,
    name: 'Milk',
  },
  {
    image: Juice.src,
    name: 'Juices',
  },
  {
    image: Bakery.src,
    name: 'Bakery',
  },
];

export const CART_ITEMS: CartItem[] = [
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/23_02.jpg?v=1719656318&width=360',
    type: 'Agama',
    name: 'Zoo Med Large Sun-Dried Red Shrimp Agama',
    price: 80,
    discount: 20,
    weight: 1,
    quantity: 2,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/22_02.jpg?v=1719656309&width=360',
    type: 'Fruits',
    name: 'Papaya (Each) (Approx. 500 g - 3500 g)',
    price: 16,
    discount: 0,
    weight: 0,
    quantity: 1,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/21_02.jpg?v=1719656298&width=360',
    type: 'Vegetable',
    name: 'Amaranthus 1 Bunch (Approx 160 g - 1500 g)',
    price: 30,
    discount: 0,
    weight: 1,
    quantity: 2,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/09_02.jpg?v=1719656169&width=360',
    type: 'Vegetable',
    name: 'Potato per kg (Approx. 950 g - 1000 g)',
    price: 50,
    discount: 10,
    weight: 1,
    quantity: 1,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/23_02.jpg?v=1719656318&width=360',
    type: 'Agama',
    name: 'Zoo Med Large Sun-Dried Red Shrimp Agama',
    price: 80,
    discount: 20,
    weight: 1,
    quantity: 2,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/22_02.jpg?v=1719656309&width=360',
    type: 'Fruits',
    name: 'Papaya (Each) (Approx. 500 g - 3500 g)',
    price: 16,
    discount: 0,
    weight: 0,
    quantity: 1,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/21_02.jpg?v=1719656298&width=360',
    type: 'Vegetable',
    name: 'Amaranthus 1 Bunch (Approx 160 g - 1500 g)',
    price: 30,
    discount: 0,
    weight: 1,
    quantity: 2,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/09_02.jpg?v=1719656169&width=360',
    type: 'Vegetable',
    name: 'Potato per kg (Approx. 950 g - 1000 g)',
    price: 50,
    discount: 10,
    weight: 1,
    quantity: 1,
  },
];

export const PRODUCT_KEY = {
  categories: 'categories',
  topDeal: 'top-deal',
  special: 'special',
  bestSelling: 'best-selling',
  ourStore: 'our-store',
  collections: 'collections',
};

export const CATEGORY_HOME = {
  milkItems: 'Milk Items',
  vegetables: 'Vegetables',
  bakery: 'Bakery',
};
