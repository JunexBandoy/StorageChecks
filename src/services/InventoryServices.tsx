import axios from 'axios';

import { inventoryModel } from 'src/models/Inventory';

const API_URL = 'http://localhost/storagechecksAPI/api/inventoryAPI.php';

export const InventoryServices = {
  create: async (inventory: inventoryModel) => {
    try {
      await axios.post(API_URL, inventory);
      console.log('Inventory created');
    } catch (error) {
      console.error('Error creating Inventory:', error);
    }
  },

  getAll: async () => {
    try {
      const response = await axios.get<inventoryModel[]>(API_URL);
      return response.data;
    } catch (error) {
      console.error('There was an error fetching the data!', error);
      return [];
    }
  },

  geyById: async (id: number) => {
    try {
      const response = await axios.get<inventoryModel[]>(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('There was an error fetching data!', error);
      return [];
    }
  },
};
