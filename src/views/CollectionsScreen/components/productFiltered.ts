import { Product } from 'types/product'; // Đảm bảo import đúng
import { PriceType } from './ItemFilter/components/PriceFilter';
import { CalculateDiscount } from 'utils/calculateDiscount';
import { FILTER_BY } from 'constants/filter';

export function getFilteredProducts(products: Product[], selectedNames: string[]): Product[] {
  const stockStatusFilters = selectedNames.filter(
    (name) => name === 'In stock' || name === 'Out of stock',
  );

  const attributeFilters = selectedNames.filter(
    (name) => name.includes('mg') || name.includes('kg'),
  );

  const categoryTypeFilters = selectedNames.filter(
    (name) =>
      !(stockStatusFilters as string[]).includes(name) &&
      !(attributeFilters as string[]).includes(name),
  );

  const isMatchStockStatus = (product: Product) => {
    const isInStockSelected = selectedNames.includes('In stock');
    const isOutStockSelected = selectedNames.includes('Out of stock');

    if (!isInStockSelected && !isOutStockSelected) return true;
    if (isInStockSelected && isOutStockSelected) return true;
    if (isInStockSelected) return product.inStock > 0;
    if (isOutStockSelected) return product.inStock === 0;

    return true;
  };

  const isMatchCategoryType = (product: Product) =>
    selectedNames.includes(product.categoryType || '');

  const isMatchAttribute = (product: Product) =>
    product.attributeValueIds?.some((attr) => selectedNames.includes(attr));

  if (stockStatusFilters.length > 0) {
    return products.filter(isMatchStockStatus);
  }

  if (attributeFilters.length > 0) {
    return products.filter(isMatchAttribute);
  }

  if (categoryTypeFilters.length > 0) {
    return products.filter(isMatchCategoryType);
  }

  return products;
}

export function filterByPrice(products: Product[], priceType: PriceType): Product[] {
  return products.filter((product) => {
    const price = CalculateDiscount(product.basePrice, product?.discount?.value || 0);

    if (priceType.highestPrice < priceType.lowestPrice || priceType.lowestPrice === 0) return true;
    if (price < priceType.lowestPrice) return false;
    if (price > priceType.highestPrice) return false;
    return true;
  });
}

export function filterBySelect(products: Product[], option: string): Product[] {
  const sortedProducts = [...products];

  switch (option) {
    case FILTER_BY.aToZ:
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));

    case FILTER_BY.zToA:
      return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));

    case FILTER_BY.lowToHigh:
      return sortedProducts.sort((a, b) => (a.basePrice ?? 0) - (b.basePrice ?? 0));

    case FILTER_BY.highToLow:
      return sortedProducts.sort((a, b) => (b.basePrice ?? 0) - (a.basePrice ?? 0));

    case FILTER_BY.oldToNew:
      return sortedProducts.sort(
        (a, b) => new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime(),
      );

    case FILTER_BY.newToOld:
      return sortedProducts.sort(
        (a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime(),
      );

    default:
      return products;
  }
}
