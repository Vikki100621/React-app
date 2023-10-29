import Axios from 'axios';

class ApiService {
  static async search(query?: string) {
    try {
      const API_KEY = '3AdH6Vmo09VTmVBWLrdhWa2REmCJlzHW';
      const response = await Axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: API_KEY,
          q: query,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }
}
export default ApiService;
