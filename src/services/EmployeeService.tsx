import axios from 'axios';

import { EmployeeModel } from 'src/models/employee';

const API_URL = 'http://localhost/storagechecksAPI/api/employeeAPI.php';
const API_URL_DEPT = 'http://localhost/storagechecksAPI/api/DepartmentAPI.php';

export const EmployeeService = {
  create: async (employee: EmployeeModel) => {
    try {
      await axios.post(API_URL, employee);
      console.log('Employee created');
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  },

  update: async (employee: EmployeeModel) => {
    try {
      await axios.put(`${API_URL}?id=${employee.id}`, employee);
      console.log('Employee updated');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  },

  delete: async (id: number) => {
    try {
      await axios.delete(`${API_URL}?id=${id}`);
      console.log('Employee deleted');
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  },

  getAll: async () => {
    try {
      const response = await axios.get<EmployeeModel[]>(API_URL);
      return response.data;
    } catch (error) {
      console.error('There was an error fetching the data!', error);
      return [];
    }
  },
  getEmployee: async (division: string) => {
    try {
      const response = await axios.get<EmployeeModel[]>(
        `${API_URL_DEPT}?division=${division}`
      );
      return response.data;
    } catch (error) {
      console.error('There was an error fetching the data!', error);
      return [];
    }
  },

  getById: async (id: number) => {
    try {
      const response = await axios.get<EmployeeModel>(`${API_URL}?id=${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching employee by ID:', error);
      return null;
    }
  },
};
