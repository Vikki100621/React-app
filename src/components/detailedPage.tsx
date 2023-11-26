// import { useRouter } from 'next/router';
// import ErrorBox from './error';

import { PageIdProps } from '../interface/interface';
import { useFetchRecipeQuery } from '../API/api';

function PageId(props: PageIdProps) {
  const { handleGoBack, id } = props;
  const { data } = useFetchRecipeQuery(id);
  return (
    <div className="right-content">
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
    </div>
  );
}

export default PageId;
