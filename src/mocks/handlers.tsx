import { http, HttpResponse } from 'msw';

const api = '5732271fa4144cc39aba70d0ac3a56ff';

export const mockResults = [
  { id: '1', title: 'Recipe 1', image: 'image1.jpg' },
  { id: '2', title: 'Recipe 2', image: 'image2.jpg' },
  { id: '3', title: 'Recipe 3', image: 'image3.jpg' },
  { id: '4', title: 'Recipe 4', image: 'image4.jpg' },
];

export const mockResultsApi = {
  results: [
    { id: '1', title: 'Recipe 1', image: 'image1.jpg' },
    { id: '2', title: 'Recipe 2', image: 'image2.jpg' },
    { id: '3', title: 'Recipe 3', image: 'image3.jpg' },
    { id: '4', title: 'Recipe 3', image: 'image3.jpg' },
  ],
};

export const mockResultsApiMoreLength = {
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
  id: '1',
  title: 'Mock Recipe',
  readyInMinutes: 10,
  image: 'mock-image-url.jpg',
};

export const handlers = [
  http.get(
    `https://api.spoonacular.com/recipes/1/information/?apiKey=${api}`,
    async () => {
      return HttpResponse.json(mockApiResponse);
    }
  ),
  http.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api}&query=salt&number=4&offset=0`,
    async () => {
      return HttpResponse.json(mockResultsApi);
    }
  ),
  http.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api}&query=salt&number=10&offset=0`,
    async () => {
      return HttpResponse.json(mockResultsApiMoreLength);
    }
  ),
];
