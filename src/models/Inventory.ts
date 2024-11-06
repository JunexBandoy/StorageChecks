import * as Yup from 'yup';

export interface inventory {
  id: number;
  inventory_id: number;
  name: string;
  description: string;
  category: string;
  quantity: string;
  unit_price: number;
  total_value: number;
  supplier: string;
  location: string;
  record_level: string;
  date_recieved: number;
  remarks: string;
}

export interface InventoryFormValues {
  inventory_id: string;
  name: string;
  description: string;
  category: string;
  quantity: number;
  unit_price: number;
  total_value: number;
  supplier: string;
  location: string;
  record_level: string;
  date_recieved: string;
  remarks: string;
}

export const initialValues: InventoryFormValues = {
  inventory_id: '',
  name: '',
  description: '',
  category: '',
  quantity: 0,
  unit_price: 0,
  total_value: 0,
  supplier: '',
  location: '',
  record_level: '',
  date_recieved: '',
  remarks: '',
};

export const validationSchema = Yup.object({
  inventory_id: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  quantity: Yup.number().required('Required').positive().integer(),
  unit_price: Yup.number().required('Required').positive(),
  total_value: Yup.number().required('Required').positive(),
  supplier: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  record_level: Yup.string().required('Required'),
  date_recieved: Yup.date().required('Required'),
  remarks: Yup.string().required('Required'),
});
