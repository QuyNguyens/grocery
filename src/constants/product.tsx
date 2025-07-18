import { Product } from 'views/NavBarItems/components/Special/components/ProductItem';
import Vegetable from '../../public/images/vegetable.png';
import Fruit from '../../public/images/pine-apple.webp';
import Meat from '../../public/images/meat.png';
import Milk from '../../public/images/meal.png';
import Juice from '../../public/images/juice.png';
import Bakery from '../../public/images/bakery.png';

export const products: Product[] = [
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/23_02.jpg?v=1719656318&width=360',
    description: 'Egg Kinder Milk Chocolate Surprise with toy 20g',
    rating: 4,
    name: 'Beverages',
    price: 20,
    discount: 0,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/22_02.jpg?v=1719656309&width=360',
    description: 'Papaya (Each) (Approx. 500 g - 3500 g)',
    rating: 4,
    name: 'Fruits',
    price: 20,
    discount: 20,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/21_02.jpg?v=1719656298&width=360',
    description: 'Coconut Kalash 5 pcs (Pack) (Approx 1600 g - 2000 g)',
    rating: 3,
    name: 'Ice Cream',
    price: 47,
    discount: 0,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/09_02.jpg?v=1719656169&width=360',
    description: 'Indian Garlic 200 g(Approx 750 g - 6000 g)',
    rating: 3,
    name: 'Cream',
    price: 20,
    discount: 25,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/02_02.jpg?v=1719656110&width=360',
    description: 'Cake world chocolate Toast Bake & Go',
    rating: 4,
    name: 'Vegetables',
    price: 45,
    discount: 29,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/32_02.jpg?v=1719656409&width=360',
    description: 'Egg Kinder Milk Chocolate Surprise with toy 20g',
    rating: 4,
    name: 'Honey',
    price: 20,
    discount: 15,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/28_02.jpg?v=1719656377&width=360',
    description: 'Monterra Jumbo California Walnuts in Shell 1 kg',
    rating: 4,
    name: 'Potatos',
    price: 32,
    discount: 19,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/26_02.jpg?v=1719656352&width=360',
    description: 'Jacobs Monarch Instant Coffee, 47.5g (Pack Of 2)',
    rating: 3,
    name: 'Palak',
    price: 35,
    discount: 20,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/24_02.jpg?v=1719656334&width=360',
    description: 'Meishi Authentic Hoisin Cantonese Hoisin Sauce',
    rating: 4,
    name: 'Chips',
    price: 35,
    discount: 14,
  },
];

export const catalogItems: any[] = [
  {
    image: Vegetable.src,
    name: 'Vegetable',
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
