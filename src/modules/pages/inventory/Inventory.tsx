import axios from 'axios';
import { useEffect, useState } from 'react';

import { CreateInventory } from './CreateInventory';

import { ActionButton } from '@components/Buttons/ActionButton';
import { Modal } from '@components/forms/Modal';
import { Titleheader } from '@components/MenuTitle';
import { inventory } from 'src/models/Inventory';

export const Inventory = () => {
  const [data, setData] = useState<inventory[]>([]);

  const [action, setAction] = useState<number | null>(null);
  const [showCreate, setShowCreate] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<inventory[]>(
        'http://localhost/storagechecksAPI/api/inventoryAPI.php'
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  return (
    <>
      <div>
        <Titleheader label="Inventory" />

        <div className=" overflow-x-auto shadow-md sm:rounded-lg p-4">
          <div className="pb-4">
            <div className="flex justify-end">
              <button
                className="p-2 bg-[#3C8DBC] border rounded-md text-white"
                onClick={() => {
                  setShowCreate(true);
                }}
              >
                Add inventory item
              </button>
            </div>
          </div>
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 p-4">
            <thead className="text-xs font-sans text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Unit Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Vlaue
                </th>
                <th scope="col" className="px-6 py-3">
                  Supplier
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>

                <th scope="col" className="px-6 py-3">
                  Received
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-xs">
              {data.map((value) => (
                <tr
                  key={value.inventory_id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-2">{value.name}</td>
                  <td className="px-6 py-2 ">{value.description}</td>
                  <td className="px-6 py-2">{value.category}</td>
                  <td className="px-6 py-2 text-[#3C8DBC]">{value.quantity}</td>
                  <td className="px-6 py-2">{value.unit_price}</td>
                  <td className="px-6 py-2">{value.total_value}</td>
                  <td className="px-6 py-2">{value.supplier}</td>
                  <td className="px-6 py-2">{value.location}</td>
                  <td className="px-6 py-2">{value.date_recieved}</td>
                  <td className="px-6 py-2 flex">
                    <ActionButton
                      onClick={() => {
                        setAction(action === value.id ? null : value.id);
                      }}
                    />
                    {action === value.id && (
                      <div className="z-10 cursor-pointer  absolute mt-[1.6rem] ml-[-3.5rem]  bg-white divide-y divide-gray-100 rounded-lg shadow w-[7rem] dark:bg-gray-700  ">
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200 "
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="green"
                                width="18"
                                height="18"
                                className="mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                                />
                              </svg>
                              Print
                            </a>
                          </li>
                          <li
                            className="flex"
                            onClick={() => {
                              // handleEditClick(value);
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
                              // DeleteData();
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

                  {/* <td className="px-6 py-2 flex">
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
                          <li>
                            <a className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="green"
                                width="18"
                                height="18"
                                className="mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                                />
                              </svg>
                              Print
                            </a>
                          </li>
                          <li
                            className="flex"
                            onClick={() => {
                              // handleEditClick(employee);
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
                  </td> */}
                </tr>
              ))}
              {showCreate && (
                <Modal show={true}>
                  <CreateInventory
                    onClick={() => {
                      setShowCreate(false);
                    }}
                    onClose={() => setShowCreate(false)}
                    // onUpdate={() => reloadTableData()}
                  />
                </Modal>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
