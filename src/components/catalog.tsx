import { AppState } from '../interface/interface';
import ErrorBox from './error';
import ResultsList from './resultList';

type CatalogProps = {
  isResult: boolean;
  isError: boolean;
  queryParam: string;
  results: AppState[];
};

function Catalog({ isResult, queryParam, results, isError }: CatalogProps) {
  if (isError) {
    throw new Error('Test error to check ErrorBoundary');
  }

  return !isResult ? (
    <ErrorBox errorText="Failed to fetch" />
  ) : results.length ? (
    <div className="bottom__section">
      <h3>
        <span className="query-param">{queryParam}</span> GIFS
      </h3>
      <ResultsList results={results} />
    </div>
  ) : (
    <ErrorBox errorText="No results" />
  );
}

export default Catalog;
