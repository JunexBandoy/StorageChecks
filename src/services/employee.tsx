import axios from 'axios';
import { ErrorMessage, Field, Formik } from 'formik';
import { useEffect, useState } from 'react';

import { Modal } from '@components/forms/Modal';
import { Loading } from '@components/Loading';
import { EmployeeModel, validationSchema } from 'src/models/employee';

const API_URL = 'http://localhost/storagechecksAPI/api/employeeAPI.php';

export const Employee = () => {
  const [data, setData] = useState<EmployeeModel[]>([]);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] =
    useState<EmployeeModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  create: async (employee: EmployeeModel) => {
    try {
      await axios.post(API_URL, employee);
      console.log('Employee created');
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  const handleSubmit = async (values: EmployeeModel) => {
    try {
      if (selectedEmployee) {
        await update(values);
      } else {
        // await create(values);
      }
      // Reload the table data after submission
      await get();
      setShowEdit(false);
      setSelectedEmployee(null);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const update = async (employee: EmployeeModel) => {
    try {
      await axios.put(`${API_URL}?id=${employee.id}`, employee);
      console.log('Employee updated');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const deleteEmployee = async (id: number) => {
    try {
      await axios.delete(`${API_URL}?id=${id}`);
      console.log('Employee deleted');
      // Reload the table data after deletion
      await get();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const get = async () => {
    try {
      const response = await axios.get<EmployeeModel[]>(API_URL);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getById = async (id: number): Promise<void> => {
    try {
      const response = await axios.get<EmployeeModel>(`${API_URL}?id=${id}`);
      setSelectedEmployee(response.data);
      setShowEdit(true);
    } catch (error) {
      console.error('Error fetching employee by ID:', error);
    }
  };

  // Fetch all employees on component mount
  useEffect(() => {
    get();
  }, []);
  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <div>
        <div className="flex justify-center">
          <table className="table-auto text-center border-collapse border border-gray-400">
            <thead className="text-sm">
              <tr>
                <th className="border border-gray-400">Full Name</th>
                <th className="border border-gray-400">Suffix</th>
                <th className="border border-gray-400">Date of Birth</th>
                <th className="border border-gray-400">Age</th>
                <th className="border border-gray-400">Attainment</th>
                <th className="border border-gray-400">Item Number</th>
                <th className="border border-gray-400">Civil Service</th>
                <th className="border border-gray-400">TIN</th>
                <th className="border border-gray-400">Date of Appointment</th>
                <th className="border border-gray-400">Length of Service</th>
                <th className="border border-gray-400">Last Promotion</th>
                <th className="border border-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {data.length > 0 ? (
                data.map((value) => (
                  <tr key={value.id}>
                    <td className="border border-gray-400">
                      {`${value.first_name} ${value.middle_name || ''} ${
                        value.last_name
                      }`}
                    </td>
                    <td className="border border-gray-400">{value.suffix}</td>
                    <td className="border border-gray-400">
                      {value.date_of_birth}
                    </td>
                    <td className="border border-gray-400">{value.age}</td>
                    <td className="border border-gray-400">
                      {value.educ_attainment}
                    </td>
                    <td className="border border-gray-400">
                      {value.item_number}
                    </td>
                    <td className="border border-gray-400">
                      {value.civil_service}
                    </td>
                    <td className="border border-gray-400">{value.tin}</td>
                    <td className="border border-gray-400">
                      {value.date_original_appointment}
                    </td>
                    <td className="border border-gray-400">
                      {value.length_of_service}
                    </td>
                    <td className="border border-gray-400">
                      {value.date_of_last_promotion}
                    </td>
                    <td className="border border-gray-400">
                      <button
                        className="bg-green-500 border rounded-sm p-2"
                        onClick={() => getById(value.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 border rounded-sm p-2"
                        onClick={() => {
                          if (
                            window.confirm(
                              'Are you sure you want to delete data?'
                            )
                          ) {
                            deleteEmployee(value.id);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border border-gray-400" colSpan={12}>
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showEdit && selectedEmployee && (
        <Modal show={showEdit}>
          <Formik
            initialValues={selectedEmployee}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <form
                onSubmit={formikProps.handleSubmit}
                className="w-full h-full"
              >
                <div className="items-center w-full h-full">
                  <div>
                    <div className="flex justify-end p-4 m-4 text-xl bold text-red-500 ">
                      <button
                        onClick={() => {
                          setShowEdit(false);
                        }}
                      >
                        X
                      </button>
                    </div>
                    <Field
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      className="w-[40%]"
                    />
                    <ErrorMessage name="first_name" component="div" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="middle_name"
                      placeholder="Middle Name"
                      className="w-[20%]"
                    />
                    <ErrorMessage name="middle_name" component="div" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      className="w-[40%]"
                    />
                    <ErrorMessage name="last_name" component="div" />
                  </div>
                  <div>
                    <Field type="text" name="suffix" placeholder="Suffix" />
                    <ErrorMessage name="suffix" component="div" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="date_of_birth"
                      placeholder="Date of Birth"
                      className="w-[70%]"
                    />
                    <ErrorMessage name="date_of_birth" component="div" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="age"
                      placeholder="Age"
                      className="w-[70%]"
                    />
                    <ErrorMessage name="age" component="div" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="educ_attainment"
                      placeholder="Educational Attainment"
                      className="w-[70%]"
                    />
                    <ErrorMessage name="educ_attainment" component="div" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="item_number"
                      placeholder="Item Number"
                      className="w-[70%]"
                    />
                    <ErrorMessage name="item_number" component="div" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="civil_service"
                      placeholder="Civil Service"
                      className="w-[70%]"
                    />
                    <ErrorMessage name="civil_service" component="div" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="tin"
                      placeholder="TIN"
                      className="w-[70%]"
                    />
                    <ErrorMessage name="tin" component="div" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="date_original_appointment"
                      placeholder="Date of Original Appointment"
                      className="w-[70%]"
                    />
                    <ErrorMessage
                      name="date_original_appointment"
                      component="div"
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="length_of_service"
                      placeholder="Length of Service"
                      className="w-[70%]"
                    />
                    <ErrorMessage name="length_of_service" component="div" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="date_of_last_promotion"
                      placeholder="Date of Last Promotion"
                      className="w-[70%]"
                    />
                    <ErrorMessage
                      name="date_of_last_promotion"
                      component="div"
                    />
                  </div>
                </div>
                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        </Modal>
      )}
    </>
  );
};
