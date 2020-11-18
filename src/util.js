export const filterCategories = (arr) => {
  return [...new Set(arr.map((e) => e.category))];
};

export const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};
