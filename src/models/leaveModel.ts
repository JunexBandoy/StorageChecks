import * as Yup from 'yup';

export interface LeaveModel {
  id: number;
  employee_id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  type: string;
  date_file: string;
  date_started: string;
  credit: string;
  status: number;
}

export interface LeaveTypeMOdel {
  id: number;
  leave_type: string;
  leave_credits: string;
  status: string;
}

export const initialValues: LeaveModel = {
  id: 0,
  employee_id: 0,
  first_name: '',
  middle_name: '',
  last_name: '',
  type: '',
  date_file: '',
  date_started: '',
  credit: '',
  status: 0,
};

export const validationSchema = Yup.object().shape({
  // type: Yup.string().required('First name is required'),
  credit: Yup.string(),
  date_file: Yup.date()
    .required('Date file is required')
    .max(new Date(), 'Date file cannot be in the future'),
  date_started: Yup.date()
    .required('Date started is required')
    .max(new Date(), 'Date started cannot be in the future'),
});
