import { Formik, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';

import { EmployeeModel } from 'src/models/employee';
import {
  initialValues,
  LeaveModel,
  LeaveTypeMOdel,
  validationSchema,
} from 'src/models/leaveModel';
import { EmployeeService } from 'src/services/EmployeeService';
import { LeaveService } from 'src/services/LeaveService';
import { LeaveTypeService } from 'src/services/LeaveTypeService';

interface LeaveCreateProps {
  division: string;
  onClick: () => void;
  onClose: (values: LeaveModel) => void;
}

export const LeaveCreate = ({ division, onClick }: LeaveCreateProps) => {
  const [data, setData] = useState<EmployeeModel[]>([]);
  const [leaveTypes, setLeaveTypes] = useState<LeaveTypeMOdel[]>([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(
    null
  );

  const handleSubmit = async (values: LeaveModel) => {
    try {
      if (selectedEmployeeId) {
        values.employee_id = parseInt(selectedEmployeeId, 10);
        await LeaveService.create(values);
        // if (onClose) onClose(values); // Notify parent component about the submission
      } else {
        console.error('Employee ID is required');
      }
    } catch (error) {
      console.error('Failed to Create Data', error);
    }
  };

  const loadData = async () => {
    try {
      const employees = await EmployeeService.getEmployee(division);
      setData(employees);
    } catch (error) {
      console.error('Error Fetching Data', error);
    }
  };

  const loadLeaveTypes = async () => {
    try {
      const leaveTypes = await LeaveTypeService.getType();
      setLeaveTypes(leaveTypes);
    } catch (error) {
      console.error('Failed to Load Leave Types', error);
    }
  };

  useEffect(() => {
    loadLeaveTypes();
  }, []);

  useEffect(() => {
    if (division) {
      loadData();
    }
  }, [division]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    setSelectedEmployeeId(selectedId);
  };

  const handleLeaveTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFieldValue: (field: string, value: any) => void
  ) => {
    const selectedType = event.target.value;
    setFieldValue('type', selectedType);

    // Find the credit for the selected leave type
    const selectedLeaveType = leaveTypes.find(
      (type) => type.leave_type === selectedType
    );
    if (selectedLeaveType) {
      const creditValue = `${selectedLeaveType.leave_credits} Days of Leave for this type`;
      setFieldValue('credit', creditValue);
    } else {
      setFieldValue('credit', 0); // Default value if no type is selected
    }
  };

  return (
    <>
      <div>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Create New Leave Application
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
              onClick={onClick}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="employee"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Employee
                  </label>
                  <select
                    onChange={handleSelectChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Select employee"
                  >
                    <option value="">Select Employee</option>
                    {data.map((employee) => (
                      <option key={employee.id} value={employee.id}>
                        {`${employee.first_name} ${employee.middle_name} ${employee.last_name}`}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Leave Type
                  </label>
                  <Field
                    as="select"
                    name="type"
                    onChange={(event: any) =>
                      handleLeaveTypeChange(event, setFieldValue)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option value="">Select Leave Type</option>
                    {leaveTypes.map((leaveType) => (
                      <option key={leaveType.id} value={leaveType.leave_type}>
                        {leaveType.leave_type}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="type" component="div" />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="credit"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Credits
                  </label>
                  <Field
                    type="credit"
                    name="credit"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    readOnly
                  />
                  <ErrorMessage name="credit" component="div" />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="date_file"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date Start
                  </label>
                  <Field
                    type="date"
                    name="date_file"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                  <ErrorMessage name="date_file" component="div" />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="date_started"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date End
                  </label>
                  <Field
                    type="date"
                    name="date_started"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                  <ErrorMessage name="date_started" component="div" />
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add New Leave
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};