import { useState } from 'react';
import useTotalPagesArray from '../hooks/usePagination';
import { PaginationProps } from '../interface/interface';
import Button from './UI/button';

export function Pagination({ totalPages, page, changePage }: PaginationProps) {
  const pagesArray = useTotalPagesArray(totalPages);
  const buttonsPerPage = 3;
  const [visiblePage, setVisiblePage] = useState(1);

  const handleNextPage = () => {
    if (visiblePage < totalPages - buttonsPerPage + 1) {
      setVisiblePage(visiblePage + 1);
    }
    changePage(visiblePage);
  };

  const handlePreviousPage = () => {
    if (visiblePage > 1) {
      setVisiblePage(visiblePage - 1);
    }
    changePage(visiblePage);
  };

  const indexOfLastButton = visiblePage + buttonsPerPage - 1;
  const indexOfFirstButton = visiblePage - 1;
  const buttonsToDisplay = pagesArray.slice(
    indexOfFirstButton,
    indexOfLastButton
  );

  return (
    <div className="buttons-block">
      {buttonsToDisplay.map((item) => (
        <Button
          classes="pag"
          onClick={() => changePage(item)}
          style={{ background: item === page ? 'white' : 'blue' }}
          key={item}
          title={item.toString()}
        />
      ))}
      <Button classes="pag" title="Назад" onClick={handlePreviousPage} />
      <Button classes="pag" title="Вперед" onClick={handleNextPage} />
    </div>
  );
}
