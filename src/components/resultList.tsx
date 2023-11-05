import { Link, useParams } from 'react-router-dom';
import { AppState, ResultsListProps } from '../interface/interface';
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

function ResultsList(props: ResultsListProps) {
  const { page } = useParams();
  const { results } = props;

  return (
    <ul>
      {results.map((item: AppState) => (
        <Link to={`/${page}/${item.id}`}>
          <li id={item.id} key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default ResultsList;
