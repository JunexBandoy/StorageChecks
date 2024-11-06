import axios from 'axios';

import { LeaveTypeMOdel } from 'src/models/leaveModel';

const API_URL = 'http://localhost/storagechecksAPI/api/LeaveTypeAPI.php';

export const LeaveTypeService = {
  getType: async () => {
    try {
      const response = await axios.get<LeaveTypeMOdel[]>(API_URL);
      return response.data;
    } catch (error) {
      console.error('There was an error fetching the data!', error);
      return [];
    }
  },
};
