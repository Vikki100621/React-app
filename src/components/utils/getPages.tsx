export const getPages = (totalResults: number, limit: number) => {
  return Math.ceil(totalResults / limit);
};
