// import { useFetchAllRecipesQuery } from '../API/api';
// import { useAppSelector } from '../hooks/redux';
// import { AppState, ResultsListProps } from '../interface/interface';

// function ResultsList(props: ResultsListProps) {
//   const { results, handleItemClick } = props;

//   return (
//     <ul>
//       {results.map((item: AppState) => (
//         <li
//           data-testid="card"
//           id={item.id}
//           key={item.id}
//           onClick={() => handleItemClick(item.id)}
//         >
//           <h3>{item.title}</h3>
//           <img src={item.image} alt={item.title} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ResultsList;

// function ResultsList(props: ResultsListProps) {
//   const { handleItemClick } = props;
//   const { page, queryParam, limit } = useAppSelector(
//     (state) => state.searchReducer
//   );
//   console.log(page, queryParam, limit);
//   const { data: resultsData } = useFetchAllRecipesQuery({
//     query: '',
//     limit,
//     page,
//   });
//   console.log(resultsData);
//   return (
//     <ul>
//       {resultsData.results.map((item: AppState) => (
//         <li
//           data-testid="card"
//           id={item.id}
//           key={item.id}
//           onClick={() => handleItemClick(item.id)}
//         >
//           <h3>{item.title}</h3>
//           <img src={item.image} alt={item.title} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ResultsList;
