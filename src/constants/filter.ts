export interface ItemType {
  name: string;
  amount: number;
}

interface ItemFilter {
  title: string;
  items: ItemType[];
  id: number;
}

interface ColorItem {
  color: string;
  name: string;
}

export const ITEMS_FILTER: ItemFilter[] = [
  {
    title: 'Availability',
    items: [
      { name: 'In stock', amount: 32 },
      { name: 'Out of stock', amount: 2 },
    ],
    id: 1,
  },
  {
    title: 'Category',
    items: [
      { name: 'Bakery', amount: 6 },
      { name: 'Beverages', amount: 4 },
      { name: 'Candy & Chocolate', amount: 1 },
      { name: 'Cheese', amount: 1 },
      { name: 'Chicken Feed', amount: 1 },
      { name: 'Coffee & Tea Saucers', amount: 1 },
      { name: 'Coffee Cakes', amount: 1 },
      { name: 'Cookies', amount: 3 },
      { name: 'Cream Cheese', amount: 1 },
      { name: 'Food Items', amount: 27 },
    ],
    id: 2,
  },
  {
    title: 'Brand',
    items: [
      { name: '7 Days', amount: 1 },
      { name: 'Agama', amount: 1 },
      { name: 'Aruma', amount: 1 },
      { name: 'Bake & Go', amount: 1 },
      { name: 'Belvita', amount: 1 },
      { name: 'Betty,s Cake', amount: 1 },
      { name: 'Blue Diamond', amount: 1 },
      { name: 'Corny', amount: 1 },
      { name: 'Fanta', amount: 1 },
      { name: 'Fridays', amount: 1 },
    ],
    id: 3,
  },
  {
    title: 'Color',
    items: [],
    id: 4,
  },
  {
    title: 'Price',
    items: [],
    id: 5,
  },
  {
    title: 'Weight',
    items: [
      { name: '100gm', amount: 9 },
      { name: '250gm', amount: 12 },
      { name: '500gm', amount: 20 },
      { name: '1kg', amount: 14 },
      { name: '2kg', amount: 5 },
      { name: '3kg', amount: 2 },
    ],
    id: 6,
  },
];

export const COLORS_FILTER: ColorItem[] = [
  {
    color: 'bg-[#01d6ce]',
    name: 'blue',
  },
  {
    color: 'bg-[#7fc448]',
    name: 'green',
  },
  {
    color: 'bg-[#b37b5b]',
    name: 'brown',
  },
  {
    color: 'bg-[#ef7220]',
    name: 'orange',
  },
  {
    color: 'bg-[#f6657e]',
    name: 'pink',
  },
  {
    color: 'bg-[#fac436]',
    name: 'yellow',
  },
];

export const FILTER_BY: string[] = [
  'Featured',
  'Best selling',
  'Alphabetically, A-Z',
  'Alphabetically, Z-A',
  'Price, low to high',
  'Price, high to low',
  'Date, old to new',
  'Date, new to old',
];
