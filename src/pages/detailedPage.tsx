import { Outlet } from 'react-router-dom';
import { PageIdProps } from '../interface/interface';

function PageId(props: PageIdProps) {
  const { handleGoBack, result } = props;
  return (
    <>
      <div className="detailed-page special">
        <button type="submit" onClick={() => handleGoBack()}>
          ❌
        </button>
        <h2>{result.title}</h2>
        <span>Ready in {result.readyInMinutes}</span>
        <img src={result.image} alt={result.title} />
      </div>
      <Outlet />
    </>
  );
}
export default PageId;
