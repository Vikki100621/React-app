/* eslint-disable import/no-extraneous-dependencies */
import { Provider } from 'react-redux';
import { act, render } from '@testing-library/react';
import { DetailedPage, ResultsData } from 'interface/interface';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { setupStore } from '../../store/store';
import SearchPage from '../../pages/page/[[...page]]';
import { createMockRouter } from './createMockRouter';

const store = setupStore();

export const renderPage = async (
  data: ResultsData,
  details: DetailedPage | null,
  path: string
): Promise<void> => {
  await act(async () => {
    render(
      <RouterContext.Provider value={createMockRouter({ pathname: path })}>
        <Provider store={store}>
          <SearchPage allResults={data} detailesResult={details} />
        </Provider>
      </RouterContext.Provider>
    );
  });
};

// export const renderPageWithBrokenRout = async (): Promise<void> => {
//   await act(async () => {
//     render(
//       <Provider store={store}>
//         <SearchPage
//           apiResult={{
//             totalResults: 0,
//             results: [],
//           }}
//           apiResultDetails={null}
//         />
//       </Provider>
//     );
//   });
// };
