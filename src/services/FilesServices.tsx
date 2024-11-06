import axios from 'axios';

import { filesModel } from 'src/models/filesModel';

export const API_URL = 'http://localhost/storagechecksAPI/api/filesAPI.php';

export const FilesServices = {
  getAll: async () => {
    try {
      const response = await axios.get<filesModel[]>(API_URL);
      return response.data;
    } catch (error) {
      console.error('There was an error fetching the data!', error);
      return [];
    }
  },
};
