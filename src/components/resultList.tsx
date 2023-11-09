import { AppState, ResultsListProps } from '../interface/interface';

function ResultsList(props: ResultsListProps) {
  const { results, handleItemClick } = props;

  return (
    <ul>
      {results.map((item: AppState) => (
        <li id={item.id} key={item.id} onClick={() => handleItemClick(item.id)}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} />
        </li>
      ))}
    </ul>
  );
}

export default ResultsList;
