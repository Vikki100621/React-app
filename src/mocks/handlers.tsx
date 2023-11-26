import { http, HttpResponse } from 'msw';

type ApiResponse = {
  totalResults: number;
  results: { id: string; title: string; image: string }[];
};

export const mockResultsApi: ApiResponse = {
  totalResults: 34,
  results: [
    { id: '1', title: 'Recipe 1', image: 'image1.jpg' },
    { id: '2', title: 'Recipe 2', image: 'image2.jpg' },
    { id: '3', title: 'Recipe 3', image: 'image3.jpg' },
    { id: '4', title: 'Recipe 3', image: 'image3.jpg' },
  ],
};

export const mockResultsApiEmptyArr = {
  totalResults: 0,
  results: [],
};

export const mockResultsApiMoreLength: ApiResponse = {
  totalResults: 34,
  results: [
    { id: '1', title: 'Recipe 1', image: 'image1.jpg' },
    { id: '2', title: 'Recipe 2', image: 'image2.jpg' },
    { id: '3', title: 'Recipe 3', image: 'image3.jpg' },
    { id: '4', title: 'Recipe 3', image: 'image3.jpg' },
    { id: '5', title: 'Recipe 3', image: 'image3.jpg' },
    { id: '6', title: 'Recipe 3', image: 'image3.jpg' },
    { id: '7', title: 'Recipe 3', image: 'image3.jpg' },
    { id: '8', title: 'Recipe 3', image: 'image3.jpg' },
    { id: '9', title: 'Recipe 3', image: 'image3.jpg' },
    { id: '10', title: 'Recipe 3', image: 'image3.jpg' },
  ],
};

export const mockApiResponse = {
  id: 1,
  title: 'Mock Recipe',
  readyInMinutes: 10,
  image: 'mock-image-url.jpg',
};
export const handlers = [
  http.get(`https://api.spoonacular.com/recipes/1/information`, async () => {
    return HttpResponse.json(mockApiResponse);
  }),
  http.get(
    'https://api.spoonacular.com/recipes/complexSearch',
    ({ request }) => {
      const url = new URL(request.url);
      if (url.searchParams.get('number') === '4') {
        return HttpResponse.json(mockResultsApi);
      }
      if (url.searchParams.get('number') === '10') {
        return HttpResponse.json(mockResultsApiMoreLength);
      }
      return HttpResponse.json({});
    }
  ),
];
