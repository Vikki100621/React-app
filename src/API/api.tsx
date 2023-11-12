import Axios from 'axios';

const API_KEY = '5732271fa4144cc39aba70d0ac3a56ff';
export const getDataFromApi = async (
  query: string,
  limit: number,
  page: number
) => {
  try {
    const response = await Axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          apiKey: API_KEY,
          query,
          number: limit,
          offset: page,
        },
      }
    );
    const requestURL = response.config;
    console.log('Request URL:', requestURL);
    return response.data;
  } catch (e) {
    return undefined;
  }
};

export const getReciepFromApi = async (id: number) => {
  try {
    const url = `https://api.spoonacular.com/recipes/${id}/information/?apiKey=5732271fa4144cc39aba70d0ac3a56ff`;

    console.log('Request URL:', url);

    const response = await Axios.get(
      `https://api.spoonacular.com/recipes/${id}/information/?apiKey=5732271fa4144cc39aba70d0ac3a56ff`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );
    return response.data;
  } catch (e) {
    return undefined;
  }
};
