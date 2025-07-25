import Vegetable from '../../public/images/vegetable.png';
import Fruit from '../../public/images/pine-apple.webp';
import Meat from '../../public/images/meat.png';
import Milk from '../../public/images/meal.png';
import Juice from '../../public/images/juice.png';
import Bakery from '../../public/images/bakery.png';
import { Product } from 'components/molecules/productItem';

export interface CartItem {
  image: string;
  type: string;
  name: string;
  price: number;
  discount: number;
  weight: number;
  quantity: number;
}

export const products: Product[] = [
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/23_02.jpg?v=1719656318&width=360',
    title:
      "The Divers There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. History Sed ut perspiciatis unde omnis...",
    description: 'Egg Kinder Milk Chocolate Surprise with toy 20g',
    rating: 4,
    name: 'Beverages',
    sku: '452SD551fFS56A',
    price: 20,
    discount: 0,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/22_02.jpg?v=1719656309&width=360',
    title:
      "The Divers There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. History Sed ut perspiciatis unde omnis...",
    description: 'Papaya (Each) (Approx. 500 g - 3500 g)',
    rating: 4,
    name: 'Fruits',
    sku: '452SD551fFS56A',
    price: 20,
    discount: 20,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/21_02.jpg?v=1719656298&width=360',
    title:
      "The Divers There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. History Sed ut perspiciatis unde omnis...",
    description: 'Coconut Kalash 5 pcs (Pack) (Approx 1600 g - 2000 g)',
    rating: 3,
    name: 'Ice Cream',
    sku: '452SD551fFS56A',
    price: 47,
    discount: 0,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/09_02.jpg?v=1719656169&width=360',
    title:
      "The Divers There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. History Sed ut perspiciatis unde omnis...",
    description: 'Indian Garlic 200 g(Approx 750 g - 6000 g)',
    rating: 3,
    name: 'Cream',
    sku: '452SD551fFS56A',
    price: 20,
    discount: 25,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/02_02.jpg?v=1719656110&width=360',
    title:
      "The Divers There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. History Sed ut perspiciatis unde omnis...",
    description: 'Cake world chocolate Toast Bake & Go',
    rating: 4,
    name: 'Vegetables',
    sku: '452SD551fFS56A',
    price: 45,
    discount: 29,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/32_02.jpg?v=1719656409&width=360',
    title:
      "The Divers There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. History Sed ut perspiciatis unde omnis...",
    description: 'Egg Kinder Milk Chocolate Surprise with toy 20g',
    rating: 4,
    name: 'Honey',
    sku: '452SD551fFS56A',
    price: 20,
    discount: 15,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/28_02.jpg?v=1719656377&width=360',
    title:
      "The Divers There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. History Sed ut perspiciatis unde omnis...",
    description: 'Monterra Jumbo California Walnuts in Shell 1 kg',
    rating: 4,
    name: 'Potatos',
    sku: '452SD551fFS56A',
    price: 32,
    discount: 19,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/26_02.jpg?v=1719656352&width=360',
    title:
      "The Divers There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. History Sed ut perspiciatis unde omnis...",
    description: 'Jacobs Monarch Instant Coffee, 47.5g (Pack Of 2)',
    rating: 3,
    name: 'Palak',
    sku: '452SD551fFS56A',
    price: 35,
    discount: 20,
  },
  {
    image: 'https://demo-grocy-01.myshopify.com/cdn/shop/files/24_02.jpg?v=1719656334&width=360',
    title:
      "The Divers There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. History Sed ut perspiciatis unde omnis...",
    description: 'Meishi Authentic Hoisin Cantonese Hoisin Sauce',
    rating: 4,
    name: 'Chips',
    sku: '452SD551fFS56A',
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
