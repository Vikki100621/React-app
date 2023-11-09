import { useMemo } from 'react';

const useTotalPagesArray = (totalPages: number) => {
  const getPagesCount = useMemo(() => {
    const pagesArray = [];
    for (let i = 0; i < totalPages; i += 1) {
      pagesArray.push(i + 1);
    }
    return pagesArray;
  }, [totalPages]);

  return getPagesCount;
};
export default useTotalPagesArray;
