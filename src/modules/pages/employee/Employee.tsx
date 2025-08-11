import { useState, useEffect } from 'react';

import { CreateEmployee } from './CreateEmployee';
import { EditEmployee } from './EditEmployee';

import { DialogBox } from '@components/box/DeleteBox';
import { ActionButton } from '@components/Buttons/ActionButton';
import { Modal } from '@components/forms/Modal';
import { Titleheader } from '@components/MenuTitle';
import { EmployeeModel } from 'src/models/employee';
import { EmployeeService } from 'src/services/EmployeeService';

export const EmployeeList = () => {
  const [data, setData] = useState<EmployeeModel[]>([]);
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] =
    useState<EmployeeModel | null>(null);
  const [action, setAction] = useState<number | null>(null);
  const [showdelete, setShowDelete] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10; // Number of items per page

  const fetchEmployeeData = async () => {
    try {
      const employees = await EmployeeService.getAll();
      setData(employees);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const reloadTableData = () => {
    fetchEmployeeData(); // Reload employee data
  };

  const handleEditClick = (employee: EmployeeModel) => {
    setSelectedEmployee(employee);
    setShowEdit(true);
    setAction(null);
  };

  const DeleteData = () => {
    setShowDelete(true);
  };

  const handleDeleteClick = async (id: number) => {
    try {
      await EmployeeService.delete(id);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
    reloadTableData();
    setShowDelete(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="relative">
        <Titleheader label="Employee" />
        <div className="flex justify-end">
          <button
            className="p-2 bg-[#3C8DBC] border rounded-md text-white"
            onClick={() => {
              setShowCreate(true);
            }}
          >
            Create
          </button>
        </div>
        <div className=" overflow-x-auto shadow-md sm:rounded-lg p-4">
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 p-4">
            <thead className="text-xs font-sans text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  FullName
                </th>
                <th scope="col" className="px-6 py-3">
                  Attainment
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Item Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Date of Appointment
                </th>
                <th scope="col" className="px-6 py-3">
                  TIN
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Promotion
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-xs">
              {currentData.map((employee) => (
                <tr
                  key={employee.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap dark:text-white flex "
                  >
                    <div className="pr-4">
                      <img
                        className="w-6 h-6 rounded-full "
                        src="./Images/person.png"
                        alt="Bordered avatar"
                      />
                    </div>

                    {`${employee.first_name} ${employee.middle_name} ${employee.last_name}`}
                  </td>
                  <td className="px-6 py-2">{employee.educ_attainment}</td>
                  <td className="px-6 py-2 ">{employee.item_number}</td>
                  <td className="px-6 py-2">
                    {employee.date_original_appointment}
                  </td>
                  <td className="px-6 py-2 text-[#3C8DBC]">{employee.tin}</td>
                  <td className="px-6 py-2">
                    {employee.date_of_last_promotion}
                  </td>

                  <td className="px-6 py-2 flex">
                    <ActionButton
                      onClick={() => {
                        setAction(action === employee.id ? null : employee.id);
                      }}
                    />
                    {action === employee.id && (
                      <div className="z-10 cursor-pointer  absolute mt-[1.6rem] ml-[-3.5rem]  bg-white divide-y divide-gray-100 rounded-lg shadow w-[7rem] dark:bg-gray-700  ">
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200 "
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li
                            className="flex"
                            onClick={() => {
                              handleEditClick(employee);
                            }}
                          >
                            <a className=" px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="blue"
                                width="18"
                                height="18"
                                className="mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                              </svg>
                              Edit
                            </a>
                          </li>
                          <li
                            onClick={() => {
                              // handleDeleteClick(employee.id);
                              DeleteData();
                            }}
                          >
                            <a className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="red"
                                width="18"
                                height="18"
                                className="mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.108 48.108 0 0 0-7.5 0"
                                />
                              </svg>
                              Delete
                            </a>
                          </li>
                          {showdelete && (
                            <Modal show={true}>
                              {/* <div className="mx-auto">
                                <p
                                  className="text-red-500 float-right font-bold  "
                                  onClick={() => {
                                    setShowDelete(false);
                                    setAction(null);
                                  }}
                                >
                                  X
                                </p>
                                <br />
                                <label className="flex justify-center items-center ">
                                  Are you sure you want to Delete
                                  <span className="text-red-500 font-bold ml-2 mr-2">
                                    {employee.first_name} {employee.last_name}
                                  </span>
                                  ?
                                </label>
                               
                              </div> */}
                              <DialogBox
                                onClick={() => {
                                  setShowDelete(false);
                                  setAction(null);
                                }}
                                onDelete={() => {
                                  handleDeleteClick(employee.id);
                                }}
                                onCancel={() => {
                                  setShowDelete(false);
                                  setAction(null);
                                }}
                                label={`Are you sure you want to delete ${employee.first_name} ${employee.last_name} ?`}
                              />
                            </Modal>
                          )}
                          <li>
                            <a className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="red"
                                width="18"
                                height="18"
                                className="mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.108 48.108 0 0 0-7.5 0"
                                />
                              </svg>
                              View
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul className="flex justify-end -space-x-px text-sm pt-4">
              {/* Previous Button */}
              <li>
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                    currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  Previous
                </button>
              </li>

              {/* Page Numbers */}
              {Array.from({
                length: Math.ceil(data.length / itemsPerPage),
              }).map((_, index) => (
                <li key={index + 1}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`p-2  flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                      index + 1 === currentPage
                        ? 'bg-[#3C8DBC] text-white z-10'
                        : 'text-gray-700 bg-white'
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              {/* Next Button */}
              <li>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={
                    currentPage === Math.ceil(data.length / itemsPerPage)
                  }
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                    currentPage === Math.ceil(data.length / itemsPerPage)
                      ? 'cursor-not-allowed opacity-50'
                      : ''
                  }`}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {showCreate && (
        <Modal show={true}>
          <CreateEmployee
            onClick={() => {
              setShowCreate(false);
            }}
            onClose={() => setShowCreate(false)}
            onUpdate={() => reloadTableData()}
          />
        </Modal>
      )}
      {showEdit && selectedEmployee && (
        <EditEmployee
          employee={selectedEmployee}
          onClose={() => setShowEdit(false)}
          onUpdate={() => reloadTableData()}
        />
      )}
    </>
  );
};
