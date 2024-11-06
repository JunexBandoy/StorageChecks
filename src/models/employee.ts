import * as Yup from 'yup';

export interface EmployeeModel {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  date_of_birth: string;
  age: string;
  educ_attainment: string;
  item_number: string;
  civil_service: string;
  tin: string;
  date_original_appointment: string;
  length_of_service: string;
  date_of_last_promotion: string;
  division: string;
  section: string;
  status: number;
}

export const initialValues: EmployeeModel = {
  id: 0,
  first_name: '',
  middle_name: '',
  last_name: '',
  suffix: '',
  date_of_birth: '',
  age: '',
  educ_attainment: '',
  item_number: '',
  civil_service: '',
  tin: '',
  date_original_appointment: '',
  length_of_service: '',
  date_of_last_promotion: '',
  division: '',
  section: '',
  status: 0,
};

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  middle_name: Yup.string(),
  last_name: Yup.string().required('Last name is required'),
  suffix: Yup.string(),
  date_of_birth: Yup.date()
    .required('Date of birth is required')
    .max(new Date(), 'Date of birth cannot be in the future'),
  age: Yup.number()
    .required('Age is required')
    .min(0, 'Age cannot be negative'),
  educ_attainment: Yup.string().required('Educational attainment is required'),
  item_number: Yup.string().required('Item number is required'),
  civil_service: Yup.string().required('Civil service is required'),
  tin: Yup.string().required('TIN is required'),
  date_original_appointment: Yup.date().required(
    'Date of original appointment is required'
  ),
  length_of_service: Yup.number()
    .required('Length of service is required')
    .min(0, 'Length of service cannot be negative'),
  date_of_last_promotion: Yup.date().required(
    'Date of last promotion is required'
  ),
  status: Yup.number()
    .required('Status is required')
    .oneOf([0, 1], 'Status must be either 0 or 1'),
});
