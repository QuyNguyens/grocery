import { Product } from 'types/product';

interface ItemType {
  name: string;
  amount: number;
}

interface ItemFilter {
  title: string;
  items: ItemType[];
  id: number;
}

type AttributeMap = Map<string, number>;

export function generateItemFilters(products: Product[]): ItemFilter[] {
  const availabilityMap = {
    'In stock': 0,
    'Out of stock': 0,
  };

  const categoryMap: AttributeMap = new Map();
  const weightMap: AttributeMap = new Map();
  const colorMap: AttributeMap = new Map();

  products.forEach((product) => {
    if (product.inStock > 0) {
      availabilityMap['In stock'] += 1;
    } else {
      availabilityMap['Out of stock'] += 1;
    }

    if (product.categoryType) {
      categoryMap.set(product.categoryType, (categoryMap.get(product.categoryType) || 0) + 1);
    }

    const attributes = product.attributeValueIds || [];

    attributes.forEach((atr) => {
      if (/^\d+(\.\d+)?(mg|g|kg)$/i.test(atr)) {
        weightMap.set(atr, (weightMap.get(atr) || 0) + 1);
      } else {
        colorMap.set(atr, (colorMap.get(atr) || 0) + 1);
      }
    });
  });

  const toItemList = (map: Map<string, number>): ItemType[] =>
    Array.from(map.entries()).map(([name, amount]) => ({ name, amount }));

  const filters: ItemFilter[] = [
    {
      title: 'Availability',
      items: [
        { name: 'In stock', amount: availabilityMap['In stock'] },
        { name: 'Out of stock', amount: availabilityMap['Out of stock'] },
      ],
      id: 1,
    },
    {
      title: 'Category',
      items: toItemList(categoryMap),
      id: 2,
    },
  ];

  const colorItems = toItemList(colorMap);
  if (colorItems.length > 0) {
    filters.push({
      title: 'Color',
      items: colorItems,
      id: 3,
    });
  }

  filters.push({
    title: 'Price',
    items: [],
    id: 4,
  });

  const weightItems = toItemList(weightMap);
  if (weightItems.length > 0) {
    filters.push({
      title: 'Weight',
      items: weightItems,
      id: 5,
    });
  }

  return filters;
}
