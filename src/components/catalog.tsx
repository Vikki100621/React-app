import { CatalogProps } from '../interface/interface';
import ErrorBox from './error';
import ResultsList from './resultList';

function Catalog({
  isResult,
  queryParam,
  results,
  isError,
  handleItemClick,
}: CatalogProps) {
  if (isError) {
    throw new Error('Test error to check ErrorBoundary');
  }

  return !isResult ? (
    <ErrorBox errorText="Failed to fetch" />
  ) : results.length ? (
    <div className="bottom__section">
      <h3>
        Recipes with <span className="query-param">{queryParam}</span>
      </h3>
      <ResultsList handleItemClick={handleItemClick} results={results} />
    </div>
  ) : (
    <ErrorBox errorText="No results" />
  );
}

export default Catalog;
