export const filterCategories = (arr) => {
  return [...new Set(arr.map((e) => e.category))];
};

export const formatPrice = (price) => {
  return price.toFixed(2);
};
