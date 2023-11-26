// import {
//   act,
//   cleanup,
//   fireEvent,
//   screen,
//   waitFor,
// } from '@testing-library/react';
// import { assert, vi } from 'vitest';
// import { redirect } from 'next/navigation';
// import { mockResultsApi } from '../mocks/handlers';

// import { renderPage } from '../mocks/testUtils/render';

// vi.mock('next/navigation', () => ({
//   redirect: vi.fn(),
// }));
// describe('Tests for the Cardcomponent', () => {
//   const redirectMock = redirect;
//   afterEach(() => {
//     cleanup();
//   });

//   test('renders relevant data for each card', async () => {
//     await renderPage(mockResultsApi, null, '/page/1?search=fish&limit=4');
//     await waitFor(() => {
//       const items = screen.getAllByTestId('card');
//       items.forEach((item, index) => {
//         const { title } = mockResultsApi.results[index];
//         assert.exists(item);
//         assert.include(item.textContent, title);
//       });
//     });
//   });

//   test('opens a detailed card component', async () => {
//     await renderPage(mockResultsApi, null, '/page/1?search=fish&limit=4');
//     await waitFor(() => {
//       const items = screen.getAllByTestId('card');
//       items.forEach(async (item) => {
//         await act(() => fireEvent.click(item));
//       });
//     });
//     await waitFor(() => {
//       expect(redirectMock('/page/1/details/1?search=fish&limit=10'));
//       // const detailedPage = screen.getByTestId('detailedPage');
//       // assert.exists(detailedPage);
//     });
//     // await waitFor(() => {
//     //   const detailedPage = screen.getByTestId('detailedPage');
//     //   assert.exists(detailedPage);
//     // });
//   });
//   //   test('triggers an additional API', async () => {
//   //     await renderPage(mockResultsApi, null, '/page/1?search=fish&limit=4');
//   //     await waitFor(() => {
//   //       const items = screen.getAllByTestId('card');
//   //       items.forEach(async (item) => {
//   //         assert.exists(item);
//   //         await act(() => fireEvent.click(item));
//   //       });
//   //     });

//   //     const apiRequests = server.listHandlers();
//   //     expect(apiRequests).toHaveLength(2);
//   //   });
//   // });
// });

// import { getRunningQueriesThunk } from '../../API/api';
// import { server } from '../mocks/browser';
// import { AppStore, wrapper } from '../../store/store';
// import {
//   getServerSideProps as originalGetServerSideProps,
//   SearchPage,
// } from '../../path/to/searchPage';

// jest.mock('../../API/api', () => ({
//   ...jest.requireActual('../../API/api'),
//   getRunningQueriesThunk: jest.fn(),
// }));

// jest.mock('../../path/to/searchPage', () => ({
//   ...jest.requireActual('../../path/to/searchPage'),
//   getServerSideProps: jest.fn(),
// }));

// describe('Tests for SearchPage component', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('getServerSideProps is called', async () => {
//     // Mock getServerSideProps implementation
//     (originalGetServerSideProps as jest.Mock).mockImplementation(async () => {
//       // Your mocked implementation here
//       return {
//         props: {
//           allResults: {},
//           detailesResult: null,
//         },
//       };
//     });

//     // Render your component or perform actions that trigger getServerSideProps
//     await renderPage();

//     // Assert that getServerSideProps was called
//     expect(originalGetServerSideProps).toHaveBeenCalled();
//   });
// });
