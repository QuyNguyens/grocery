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
      { name: 'Biscuits', amount: 1 },
    ],
    id: 2,
  },
  {
    title: 'Color',
    items: [],
    id: 3,
  },
  {
    title: 'Price',
    items: [],
    id: 4,
  },
  {
    title: 'Weight',
    items: [
      { name: '', amount: 1 },
    ],
    id: 5,
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
