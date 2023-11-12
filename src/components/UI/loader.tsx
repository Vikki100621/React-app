import { LoaderProps } from '../../interface/interface';

function Loader(props: LoaderProps) {
  const { queryParam } = props;
  return (
    <>
      <h3 data-testid="loader">
        Searching for <span className="query-param">{queryParam} recipes</span>
      </h3>
      <div className="loader" />
    </>
  );
}

export default Loader;
