/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useTotalPagesArray from '../hooks/usePagination';

import Button from './UI/button';
import { incrementPage } from './utils/incrementPage';
import { discrementPage } from './utils/discrementPage';
import nextPage from '../assets/images/arrow__right.png';
import prevPage from '../assets/images/arrow__left.png';
import { PaginationProps } from '../interface/interface';

type ButtonsState = {
  currentPage: number;
  visibleButtons: number[];
};

export function Pagination({ totalPages, changePage }: PaginationProps) {
  const pagesArray = useTotalPagesArray(totalPages);
  const initialButtonsState =
    pagesArray.length === 2
      ? {
          currentPage: 1,
          visibleButtons: [1, 2],
        }
      : {
          currentPage: 1,
          visibleButtons: [1, 2, 3],
        };

  const [ButtonsState, setButtonState] =
    useState<ButtonsState>(initialButtonsState);

  useEffect(() => {
    setButtonState(initialButtonsState);
  }, [totalPages]);

  const handleNextPage = () => {
    if (ButtonsState.currentPage < totalPages) {
      const newPage = ButtonsState.currentPage + 1;
      if (newPage <= totalPages) {
        const updatedFirstButtons = incrementPage(ButtonsState.visibleButtons);
        changePage(newPage);
        setButtonState(() => ({
          currentPage: newPage,
          visibleButtons: updatedFirstButtons,
        }));
      }
    }
  };

  const handlePreviousPage = () => {
    if (ButtonsState.currentPage >= 1) {
      const newPage = ButtonsState.currentPage - 1;
      const updatedFirstButtons = discrementPage(ButtonsState.visibleButtons);
      setButtonState((prevSearchState) => ({
        ...prevSearchState,
        currentPage: newPage,
        visibleButtons: updatedFirstButtons,
      }));
      changePage(newPage);
    }
  };

  const handleFirstPage = () => {
    setButtonState(() => ({
      currentPage: 1,
      visibleButtons: [1, 2, 3],
    }));
    changePage(1);
  };

  const handleLastPage = () => {
    const lastVisiblePage = pagesArray[pagesArray.length - 1];
    setButtonState((prevSearchState) => ({
      ...prevSearchState,
      currentPage: lastVisiblePage,
      visibleButtons: [
        lastVisiblePage - 2,
        lastVisiblePage - 1,
        lastVisiblePage,
      ],
    }));
    changePage(lastVisiblePage);
  };

  return (
    <div className="buttons-block">
      {pagesArray.length > 1 ? (
        <>
          <Button
            classes="pagination__button first"
            title=""
            onClick={handleFirstPage}
          >
            <img src={prevPage} alt="First Page" />
            <img src={prevPage} alt="First Page" />
          </Button>
          <Button
            classes="pagination__button previous"
            title=""
            onClick={handlePreviousPage}
          >
            <img src={prevPage} alt="Previous Page" />
          </Button>
          {ButtonsState.visibleButtons.map((item) => (
            <Button
              classes={`pagination__button ${
                item === ButtonsState.currentPage ? 'active' : ''
              }`}
              key={item}
              onClick={() => {
                changePage(item);
                setButtonState((prevSearchState) => ({
                  ...prevSearchState,
                  currentPage: item,
                }));
              }}
              title={item.toString()}
            />
          ))}

          <Button
            data-testid="next-page"
            classes="pagination__button next"
            title=""
            onClick={handleNextPage}
          >
            <img src={nextPage} alt="Next Page" />
          </Button>
          <Button
            classes="pagination__button last"
            title=""
            onClick={handleLastPage}
          >
            <img src={nextPage} alt="Last Page" />
            <img src={nextPage} alt="Last Page" />
          </Button>
        </>
      ) : null}
    </div>
  );
}
