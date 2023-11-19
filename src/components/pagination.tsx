/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useTotalPagesArray from '../hooks/usePagination';

import Button from './UI/button';
import nextPage from '../assets/images/arrow__right.png';
import prevPage from '../assets/images/arrow__left.png';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { searchChangePage } from '../store/reducers/SearchSlice';
import { getPages } from './utils/getPages';

type ButtonsState = {
  currentPage: number;
  visibleButtons: number[];
  totalPages: number;
};

export function Pagination() {
  const { totalResults, limit, page } = useAppSelector(
    (state) => state.searchReducer
  );

  const pages = getPages(totalResults, limit);
  const pagesArray = useTotalPagesArray(pages);

  const dispatch = useAppDispatch();
  const [ButtonsState, setButtonState] = useState<ButtonsState>({
    currentPage: 1,
    visibleButtons: [1, 2, 3],
    totalPages: pages,
  });

  useEffect(() => {
    setButtonState({
      currentPage: 1,
      visibleButtons: [1, 2, 3],
      totalPages: pages,
    });
  }, [totalResults, limit]);

  const updateVisibleButtons = (newPage: number) => {
    const startPage = Math.max(1, newPage - 1);
    const endPage = Math.min(pages, startPage + 2);
    let newButtons = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
    if (newPage === pagesArray[pagesArray.length - 1]) {
      newButtons = pagesArray.slice(-3);
    }
    setButtonState({
      currentPage: newPage,
      visibleButtons: newButtons,
      totalPages: pages,
    });
  };
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const handleQueryChange = (param: string, value: number) => {
    queryParams.set(`${param}`, value.toString());
    navigate({ search: queryParams.toString() });
  };

  useEffect(() => {
    if (!queryParams.get('page') || page === 0) {
      handleQueryChange('page', 1);
    }
    queryParams.delete('recipe');
  }, []);

  const changePage = (newPage: number) => {
    queryParams.delete('recipe');
    queryParams.set('page', newPage.toString());
    navigate({ search: queryParams.toString() });
    dispatch(searchChangePage((newPage - 1) * limit));
    updateVisibleButtons(newPage);
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
      )}
    </div>
  );
}
