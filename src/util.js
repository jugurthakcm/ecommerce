export const filterCategories = (arr) => {
  return [...new Set(arr.map((e) => e.category))];
};
