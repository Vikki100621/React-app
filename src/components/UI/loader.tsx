import { LoaderProps } from '../../interface/interface';

function Loader(props: LoaderProps) {
  const { queryParam } = props;
  return (
    <>
      <h3>
        Searching for <span className="query-param">{queryParam} GIFS</span>
      </h3>
      <div className="loader" />
    </>
  );
}

export default Loader;
