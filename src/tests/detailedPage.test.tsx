// import {
//   act,
//   cleanup,
//   fireEvent,
//   screen,
//   waitFor,
// } from '@testing-library/react';

// import { mockApiResponse } from '../mocks/handlers';
// import { renderPage } from '../mocks/testUtils/render';

// describe('detailed page', () => {
//   afterEach(() => {
//     cleanup();
//   });

//   test('fetches data and displays loader', async () => {
//     await renderPage();

//     await waitFor(() => {
//       const items = screen.getAllByTestId('card');
//       items.forEach(async (item) => {
//         expect(item).toBeInTheDocument();
//         await act(() => fireEvent.click(items[0]));
//       });
//       const loaderElement = screen.getByTestId('loader');
//       expect(loaderElement).toBeInTheDocument();
//     });
//   });

//   test('card component correctly displays the detailed card data', async () => {
//     await renderPage();
//     await waitFor(async () => {
//       const items = screen.getAllByTestId('card');
//       items.forEach(async (item) => {
//         const idAttribute = item.getAttribute('id');
//         if (idAttribute === '1') {
//           await act(() => fireEvent.click(item));
//         }
//       });
//     });
//     await waitFor(() => {
//       const detailedPage = screen.getByTestId('detailedPage');
//       expect(detailedPage).toBeInTheDocument();
//       expect(detailedPage).toHaveTextContent(mockApiResponse.title);
//       expect(detailedPage.querySelector('img')).toHaveAttribute(
//         'src',
//         mockApiResponse.image
//       );
//     });
//   });

//   test('clicking the close button hides the component', async () => {
//     await renderPage();
//     await waitFor(async () => {
//       const items = screen.getAllByTestId('card');
//       items.forEach(async (item) => {
//         const idAttribute = item.getAttribute('id');
//         if (idAttribute === '1') {
//           await act(() => fireEvent.click(item));
//         }
//       });
//     });
//     await waitFor(async () => {
//       const detailedPage = screen.getByTestId('detailedPage');
//       expect(detailedPage).toBeInTheDocument();
//       const modalComponent = screen.queryByTestId('modal-component');
//       expect(modalComponent).toBeInTheDocument();
//       const closeButton = screen.getByTestId('close');
//       expect(closeButton).toBeInTheDocument();
//       await act(() => fireEvent.click(closeButton));
//     });
//     const modalComponent = screen.queryByTestId('modal-component');
//     expect(modalComponent).not.toBeInTheDocument();
//   });
// });
