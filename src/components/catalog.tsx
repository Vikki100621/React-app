import { useRouter } from 'next/router';
import { useAppSelector } from '../hooks/redux';
import { AppState, CatalogProps } from '../interface/interface';
import ErrorBox from './error';

function Catalog({ resultsData }: CatalogProps) {
  const { isError } = useAppSelector((state) => state.pageSlice);
  const router = useRouter();

  const { search, page, limit } = router.query;

  let newPage: string;

  if (page?.length) {
    newPage = page[0];
  }
  const handleItemClick = (itemId: string) => {
    const newUrl = `/page/${newPage}/details/${itemId}?search=${search}&limit=${limit}`;
    router.push(newUrl);
  };

  if (isError) {
    throw new Error('Test error to check ErrorBoundary');
  }
  return resultsData.length ? (
    <div className="bottom__section">
      <h3>
        Recipes with{' '}
        <span data-testid="stored-keyword" className="query-param">
          {search}
        </span>
      </h3>
      <ul>
        {resultsData.map((item: AppState) => (
          <li
            data-testid="card"
            id={item.id}
            key={item.id}
            onClick={() => handleItemClick(item.id)}
          >
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <ErrorBox errorText="No result with the requested parameters" />
  );
}

export default Catalog;
