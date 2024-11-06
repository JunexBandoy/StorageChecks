import axios from 'axios';

import { LeaveModel } from 'src/models/leaveModel';

const API_URL = 'http://localhost/storagechecksAPI/api/leaveAPI.php';

export const LeaveService = {
  create: async (leave: LeaveModel) => {
    try {
      await axios.post(API_URL, leave);
    } catch (error) {
      console.error('Failed to Create Data');
    }
  },
  getAll: async () => {
    try {
      const response = await axios.get<LeaveModel[]>(API_URL);
      return response.data;
    } catch (error) {
      console.error('There was an error fetching the data!', error);
      return [];
    }
  },

  getByID: async (id: number) => {
    try {
      const response = await axios.get<LeaveModel[]>(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(' There was an Error Fetching Data');
    }
  },

  update: async (leave: LeaveModel) => {
    try {
      await axios.put(`${API_URL}/${leave.id}`, leave);
      console.log('Employee updated');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  },
};
