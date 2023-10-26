import Axios from 'axios';
import { AppState } from '../interface/interface';

class ApiService {
  static async search() {
    try {
      const API_KEY = '3AdH6Vmo09VTmVBWLrdhWa2REmCJlzHW';
      const response = await Axios.get(`https://api.giphy.com/v1/gifs/trending`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  static async getApiResult() {
    const query = localStorage.getItem('searchQuery') as string;
    const apiResults = await this.search();
    const filteredResults = apiResults.data.filter((item: AppState) =>
      item.slug.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    return filteredResults;
  }
}
export default ApiService;
