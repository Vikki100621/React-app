import { AppState, ResultsListProps } from '../interface/interface';

function ResultsList(props: ResultsListProps) {
  const { results } = props;
  return (
    <ul>
      {results.map((item: AppState) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} />
        </li>
      ))}
    </ul>
  );
}

export default ResultsList;
