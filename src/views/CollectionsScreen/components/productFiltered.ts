import { Product } from 'types/product'; // Đảm bảo import đúng

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
