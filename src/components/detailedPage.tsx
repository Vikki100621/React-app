import ErrorBox from './error';

import { PageIdProps } from '../interface/interface';

function PageId(props: PageIdProps) {
  const { handleGoBack, data } = props;

  return (
    <div className="right-content">
      {data ? (
        <div data-testid="detailedPage" className="detailed-page special">
          <button
            data-testid="close"
            type="submit"
            onClick={() => handleGoBack()}
          >
            ❌
          </button>
          <h2>{data.title}</h2>
          <span>Ready in {data.readyInMinutes}</span>
          <img src={data.image} alt={data.title} />
        </div>
      ) : (
        <ErrorBox errorText="Oh no, something went wrong..." />
      )}
    </div>
  );
}

export default PageId;
