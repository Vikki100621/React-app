/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { TotalResults } from 'interface/interface';
import { useRouter } from 'next/router';
import useTotalPagesArray from '../hooks/usePagination';
import nextPage from '../assets/images/arrow__right.png';
import prevPage from '../assets/images/arrow__left.png';
import { getPages } from './utils/getPages';
import Button from './UI/button';

type ButtonsState = {
  currentPage: number;
  visibleButtons: number[];
  totalPages: number;
};

export function Pagination({ totalResults }: TotalResults) {
  const router = useRouter();
  const { search, limit, page } = router.query;
  const pages = getPages(totalResults, Number(limit));
  const pagesArray = useTotalPagesArray(pages);

  const [ButtonsState, setButtonState] = useState<ButtonsState>({
    currentPage: 1,
    visibleButtons: [1, 2, 3],
    totalPages: pages,
  });

  useEffect(() => {
    if (Number(page) === pagesArray[pagesArray.length - 1]) {
      setButtonState({
        currentPage: Number(page),
        visibleButtons: [Number(page) - 2, Number(page) - 1, Number(page)],
        totalPages: pages,
      });
    } else if (Number(page) === 1) {
      setButtonState({
        currentPage: 1,
        visibleButtons: [1, 2, 3],
        totalPages: pages,
      });
    } else if (Number(page) >= 2) {
      setButtonState({
        currentPage: Number(page),
        visibleButtons: [Number(page) - 1, Number(page), Number(page) + 1],
        totalPages: pages,
      });
    }
  }, [totalResults, limit, page]);

  const changePage = (newPage: number) => {
    const newUrl = `/page/${newPage}?search=${search}&limit=${limit}`;
    router.push(newUrl);
  };

  const handleNextPage = () => {
    if (ButtonsState.currentPage < pages) {
      const newPage = ButtonsState.currentPage + 1;
      changePage(newPage);
    }
  };

  const handlePreviousPage = () => {
    if (ButtonsState.currentPage > 1) {
      const newPage = ButtonsState.currentPage - 1;
      changePage(newPage);
    }
  };

  const handleFirstPage = () => {
    changePage(1);
  };

  const handleLastPage = () => {
    changePage(pagesArray[pagesArray.length - 2]);
  };

  return (
    <div className="buttons-block">
      {pagesArray.length > 1 && (
        <>
          <Button
            classes="pagination__button first"
            title=""
            onClick={handleFirstPage}
          >
            <Image src={prevPage} alt="First Page" />
            <Image src={prevPage} alt="First Page" />
          </Button>
          <Button
            classes="pagination__button previous"
            title=""
            onClick={handlePreviousPage}
          >
            <Image src={prevPage} alt="Previous Page" />
          </Button>
          {ButtonsState.visibleButtons.map((item) => (
            <Button
              classes={`pagination__button ${
                item === ButtonsState.currentPage ? 'active' : ''
              }`}
              key={item}
              onClick={() => changePage(item)}
              title={item.toString()}
            />
          ))}
          <Button
            classes="pagination__button next"
            testDataId="next-page"
            title=""
            onClick={handleNextPage}
          >
            <Image src={nextPage} alt="Next Page" />
          </Button>
          <Button
            classes="pagination__button last"
            title=""
            onClick={handleLastPage}
          >
            <Image src={nextPage} alt="Last Page" />
            <Image src={nextPage} alt="Last Page" />
          </Button>
        </>
      )}
    </div>
  );
}
