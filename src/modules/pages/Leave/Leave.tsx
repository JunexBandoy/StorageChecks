import { useEffect, useState } from 'react';

// import { Files } from './Files';
import { LeaveCreate } from './LeaveCreate';
import { LeaveEdit } from './LeaveEdit';
import ExportToPdf from './LeavePDF';

import { ActionButton } from '@components/Buttons/ActionButton';
import { Modal } from '@components/forms/Modal';
import { ModalDocs } from '@components/forms/ModalDocs';
import { Titleheader } from '@components/MenuTitle';
import { LeaveModel } from 'src/models/leaveModel';
import { LeaveService } from 'src/services/LeaveService';

export const Leave = () => {
  const [data, setData] = useState<LeaveModel[]>([]);
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [showedit, setShowEdit] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDivision, setSelectedDivision] = useState<string>(''); // Ensure it's properly initialized
  // const [selectedleave, setSelectedLeave] = useState<LeaveModel[]>([]);
  const [opendocs, setOpenDocs] = useState<boolean>(false);
  const [action, setAction] = useState<number | null>(null);
  const [onleave, setOnLeave] = useState<LeaveModel | null>(null);
  const [view, SetView] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10; // Number of items per page

  const toggleData = () => {
    setIsOpen((prevState) => !prevState);
  };

  const viewFiles = () => {
    SetView(true);
  };

  const handleprint = () => {
    setOpenDocs(true);
    setAction(null);
  };

  const loadData = async () => {
    try {
      const leave = await LeaveService.getAll();
      setData(leave);
    } catch (error) {
      console.error('Failed to Load Data');
    }
  };

  const HandleEdit = (leave: LeaveModel) => {
    setShowEdit(true);
    setOnLeave(leave);
    setAction(null);
  };

  useEffect(() => {
    view;
    viewFiles();
    loadData();
    handleprint;
  }, []);

  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="relative">
        <Titleheader label="Leave" />
        <div className="flex justify-end p-4 font-sans">
          <div className="relative pb-2">
            <button
              className="p-2 bg-[#3C8DBC] border rounded-md text-white"
              onClick={toggleData}
            >
              File a leave
            </button>
          </div>
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="w-[98%]  h-full mt-10 absolute z-20 text-white backdrop-blur-sm bg-white bg-opacity-10"
            >
              <div className="flex justify-end p-2">
                <button
                  className="p-2 bg-[#3C8DBC]  border rounded-md w-[320px]"
                  onClick={() => {
                    setSelectedDivision('Admin');
                    setShowCreate(true);
                    setIsOpen(false);
                  }}
                >
                  Admin
                </button>
              </div>
              <div className="flex justify-end p-2">
                <button
                  className="p-2 bg-[#3C8DBC]  border rounded-md w-[320px]"
                  onClick={() => {
                    setSelectedDivision('Planning');
                    setShowCreate(true);
                    setIsOpen(false);
                  }}
                >
                  Planning
                </button>
              </div>
              <div className="flex justify-end p-2">
                <button
                  className="p-2 bg-[#3C8DBC]  border rounded-md w-[320px]"
                  onClick={() => {
                    setSelectedDivision('Enforcement');
                    setShowCreate(true);
                    setIsOpen(false);
                  }}
                >
                  Enforcement
                </button>
              </div>
              <div className="flex justify-end p-2">
                <button
                  className="p-2 bg-[#3C8DBC]  border rounded-md w-[320px]"
                  onClick={() => {
                    setSelectedDivision('Registration and Permitting Section');
                    setShowCreate(true);
                    setIsOpen(false);
                  }}
                >
                  Registration & Permitting Section
                </button>
              </div>
              <div className="flex justify-end p-2">
                <button
                  className="p-2 bg-[#3C8DBC]  border rounded-md w-[320px]"
                  onClick={() => {
                    setSelectedDivision('Conservation and Development Section');
                    setShowCreate(true);
                    setIsOpen(false);
                  }}
                >
                  Conservation and Development Section
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="relative  shadow-md sm:rounded-lg p-4">
          <table className="w-full  relative text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* Table headers */}
                <th scope="col" className="px-6 py-3">
                  FullName
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Credits
                </th>
                <th scope="col" className="px-6 py-3">
                  Date Effective
                </th>
                <th scope="col" className="px-6 py-3">
                  Date End
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="relative">
              {currentData.map((onleave) => (
                <tr
                  key={onleave.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4 text-xs text-gray-900 whitespace-nowrap dark:text-white">
                    {`${onleave.first_name} ${onleave.middle_name} ${onleave.last_name}`}
                  </td>
                  <td className="px-6 py-4 text-xs">{onleave.type}</td>
                  <td className="px-6 py-4 text-xs">{onleave.credit}</td>
                  <td className="px-6 py-4 text-xs">{onleave.date_file}</td>
                  <td className="px-6 py-4 text-xs">{onleave.date_started}</td>
                  <td className="px-6 py-4 flex">
                    {/* Action buttons */}

                    <ActionButton
                      onClick={() => {
                        setAction(action === onleave.id ? null : onleave.id);
                      }}
                    />
                    {action === onleave.id && (
                      <div className="z-20  absolute mt-[1.6rem] bg-white divide-y divide-gray-100 rounded-lg shadow w-[7rem] dark:bg-gray-700 ">
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li
                            onClick={() => {
                              handleprint();
                            }}
                          >
                            <a className="flex px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
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
                              HandleEdit(onleave);
                            }}
                          >
                            <a className=" px-4 py-2 w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex">
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
                          <li>
                            <a className="flex px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
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
                          <li
                            onClick={() => {
                              viewFiles();
                            }}
                          >
                            <a className="flex px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
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

          {/* Pagination controls */}

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
        {showCreate && (
          <Modal show={true}>
            <LeaveCreate
              division={selectedDivision}
              onClick={() => {
                setShowCreate(false);
              }}
              onClose={() => {
                setShowCreate(false);
              }}
            />
          </Modal>
        )}
        {showedit && onleave && (
          <Modal show={true}>
            <LeaveEdit
              onClick={() => {
                setShowEdit(false);
              }}
              onClose={() => setShowEdit(false)}
              leavedetails={onleave}
            />
          </Modal>
        )}
        {opendocs && (
          <ModalDocs show={true}>
            <ExportToPdf
              onClosePDF={() => {
                setOpenDocs(false);
              }}
            />
          </ModalDocs>
        )}
      </div>
      {/* {view && (
        <Modal show={true}>
          <Files />
        </Modal>
      )} */}
    </>
  );
};
