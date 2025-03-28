import { useEffect, useState } from 'react';

import { HandleClicker } from '@components/HandleClick';
import { ROUTES } from 'src/config/routes';

// import { string } from 'yup';

export const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(
    localStorage.getItem('activeMenu') || null
  );
  // const [isProductClicked, setIsProductClicked] = useState(false);

  // const [showTopNavSubMenu, setShowTopNavSubMenu] = useState(false);
  // const [showBoxSubMenu, setShowBoxSubMenu] = useState(false);
  // const [showFixedSubMenu, setShowFixedSubMenu] = useState(false);
  // const [showCollapsedSubMenu, setShowCollapsedSubMenu] = useState(false);

  const [showCustomer, setShowCustomer] = useState<boolean>(false);
  const [showpurchase, setShowPurchase] = useState<boolean>(false);
  const [showaccounting, setShowAccounting] = useState<boolean>();
  const [showtax, setShowTax] = useState<boolean>();
  const [showreport, setShowReport] = useState<boolean>();

  const setActiveSubMenuByRoute = (route: any) => {
    if (route === ROUTES.Dashboard) {
      setActiveMenu('dashboard');
    }
  };
  useEffect(() => {
    setActiveMenu(localStorage.getItem('activeMenu') || null);
    if (activeMenu !== localStorage.getItem('activeMenu')) {
      // setActiveSubMenu(localStorage.getItem('activeSubMenu') || false);
      console.log('1');
    }

    setActiveSubMenuByRoute(location.pathname);
  }, [location.pathname]);

  const handleDropdownClick = (menu: any) => {
    if (menu === 'customer') {
      setShowCustomer((prev) => {
        const newValue = !prev;
        localStorage.setItem('showCustomer', String(newValue));
        return newValue;
      });
    } else if (menu === 'purchase') {
      setShowPurchase((prev) => {
        const newValue = !prev;
        localStorage.setItem('showpurchase', String());
        return newValue;
      });
    } else if (menu === 'accounting') {
      setShowAccounting((prev) => {
        const newValue = !prev;
        localStorage.setItem('showaccounting', String(newValue));
        return newValue;
      });
    } else if (menu === 'tax') {
      setShowTax((prev) => {
        const newValue = !prev;
        localStorage.setItem('showtax', String(newValue));
        return newValue;
      });
    } else if (menu == 'reports') {
      setShowReport((prev) => {
        const newValue = !prev;
        localStorage.setItem('showreport', String(newValue));
        return newValue;
      });
    }
  };

  // useEffect(() => {
  //   if (showpurchase) {
  //     setShowCustomer(false);
  //   }
  //   if (showCustomer) {
  //     setShowPurchase(false);
  //   }
  // });

  const handleMenuClick = (menu: any) => {
    setActiveMenu(menu);
    localStorage.setItem('activeMenu', menu);
  };

  // const handleProductClick = () => {
  //   setIsProductClicked(!isProductClicked);

  //   // Reset submenu visibility
  //   setShowTopNavSubMenu(false);
  //   setShowBoxSubMenu(false);
  //   setShowFixedSubMenu(false);
  //   setShowCollapsedSubMenu(false);

  //   // Show submenus with delay after a click
  //   setTimeout(() => setShowTopNavSubMenu(true), 100); // Delay for 300ms
  //   setTimeout(() => setShowBoxSubMenu(true), 300); // Delay for 600ms
  //   setTimeout(() => setShowFixedSubMenu(true), 350); // Delay for 900ms
  //   setTimeout(() => setShowCollapsedSubMenu(true), 400); // Delay for 900ms
  // };

  return (
    <>
      <div className=" bg-[#222D32] text-white w-2/12  relative">
        <div className="flex items-center">
          <img
            className="w-16 h-16 p-2 rounded-full  float-right ml-2"
            src="./Images/image.png"
            alt="Bordered avatar"
          />
          <p className="  w-2 h-2 mr-2 rounded-full bg-[#58993C]"></p>
          <p className=" text-sm font-poppins">Junex Bandoy</p>
        </div>
        <div className="text-center m-2  text-white ">
          <input
            type="text "
            placeholder="Search"
            className=" p-2 w-full bg-[#374850] text-sm text-gray-900 border border-none  border-gray-300 rounded-sm h-10 outline-none focus:bg-white focus:border-none "
          />
        </div>
        <div className="bg-[#1A2226]">
          <p className="p-2 text-xs text-gray-500 font-poppins">
            MAIN NAVIGATION
          </p>
        </div>
        <div className="text-sm relative font-poppins ">
          <ul>
            <HandleClicker
              onClick={() => handleMenuClick('home')}
              to={`${ROUTES.Dashboard}`}
            >
              <li className="  p-2 cursor-pointer text-[#B3C7CE] hover:text-white hover:bg-[#1E282C] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width=" 16"
                  height=" 16"
                  fill="currentColor"
                  className="bi bi-columns-gap inline-block mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
                </svg>

                <a>Dashboard</a>
              </li>
            </HandleClicker>
            {/* <HandleClicker
              onClick={() => handleMenuClick('inventory')}
              to={`${ROUTES.EMPLOYEE}`}
            > */}
            <HandleClicker
              onClick={() => handleMenuClick('inventory')}
              to={`${ROUTES.INVENTORY}`}
            >
              <li
                onClick={() => handleDropdownClick('inventory')}
                className="p-2 cursor-pointer text-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width=" 16"
                  height=" 16"
                  fill="currentColor"
                  className="bi bi-file-earmark-break inline-block mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 4.5V9h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v7H2V2a2 2 0 0 1 2-2h5.5L14 4.5zM13 12h1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2h1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z" />
                </svg>

                <a className="font-poppins">Inventory</a>
              </li>
            </HandleClicker>
            {/* <ul
              className={`bg-[#2C3B41] text-xs font-poppins ${
                isProductClicked
                  ? 'max-h-40 transition-all duration-1000 ease-in-out'
                  : 'max-h-0 overflow-hidden'
              }`}
            >
              <li
                className={`mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800 ${
                  showTopNavSubMenu ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <HandleClicker
                  onClick={() => handleMenuClick('product')}
                  to={`${ROUTES.Product}`}
                >
                  <div className="flex items-center p-2">
                    <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                    <a>Product List</a>
                  </div>
                </HandleClicker>
              </li>

              <li
                className={`mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800 ${
                  showBoxSubMenu ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <HandleClicker
                  onClick={() => handleMenuClick('product')}
                  to={`${ROUTES.Product}`}
                >
                  <div className="flex items-center p-2">
                    <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                    <a>Add Product</a>
                  </div>
                </HandleClicker>
              </li>
              <li
                className={`mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800 ${
                  showFixedSubMenu ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <HandleClicker
                  onClick={() => handleMenuClick('product')}
                  to={`${ROUTES.Categories}`}
                >
                  <div className="flex items-center p-2">
                    <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                    <a>Categories</a>
                  </div>
                </HandleClicker>
              </li>
              <li
                className={`mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800 ${
                  showCollapsedSubMenu ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <HandleClicker
                  onClick={() => handleMenuClick('product')}
                  to={`${ROUTES.Product}`}
                >
                  <div className="flex items-center p-2">
                    <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                    <a>Variants</a>
                  </div>
                </HandleClicker>
              </li>
            </ul> */}
            {/* {showInvoce && (
              <div>
                <ul className=" bg-[#2C3B41] text-xs font-poppins">
                  <HandleClicker
                    onClick={() => handleMenuClick('product')}
                    to={`${ROUTES.Product}`}
                  >
                    <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                      <div className="flex items-center p-2">
                        <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                        <a>Admin</a>
                      </div>
                    </li>
                  </HandleClicker>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Planning</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Enforcement</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Registry & Permitting</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Conservation & Development</a>
                    </div>
                  </li>
                </ul>
              </div>
            )} */}
            <HandleClicker
              onClick={() => handleMenuClick('employee')}
              to={`${ROUTES.EMPLOYEE}`}
            >
              <li className=" p-2 cursor-pointer text-[#B3C7CE] hover:text-white hover:bg-[#1E282C] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width=" 16"
                  height=" 16"
                  fill="currentColor"
                  className="bi bi-border-all inline-block mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z" />
                </svg>
                <a>Employee</a>
              </li>
            </HandleClicker>

            <li
              onClick={() => {
                handleDropdownClick('customer');
              }}
              className="p-2 cursor-pointer text-gray-300 hover:text-white hover:bg-[#1E282C]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 16"
                height=" 16"
                fill="currentColor"
                className="bi bi-pie-chart-fill inline-block mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z" />
              </svg>
              <a>HelpDesk</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-caret-left-fill inline-block float-right mt-2"
                viewBox="0 0 320 512"
              >
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
              </svg>
            </li>
            {showCustomer && (
              <div>
                <ul className=" bg-[#2C3B41] text-xs font-poppins">
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Customer</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Customer</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Customer</a>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            <HandleClicker
              onClick={() => handleMenuClick('suppliers')}
              to={`${ROUTES.SUPPLIERS}`}
            >
              <li className="p-2 cursor-pointer text-gray-300 hover:text-white hover:bg-[#1E282C]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width=" 16"
                  height=" 16"
                  fill="currentColor"
                  className="bi bi-pencil-square inline-block mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
                <a>Leave</a>
              </li>
            </HandleClicker>
            <li
              onClick={() => {
                handleDropdownClick('purchase');
              }}
              className="p-2 cursor-pointer text-gray-300 hover:text-white hover:bg-[#1E282C]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 16"
                height=" 16"
                fill="currentColor"
                className="bi bi-laptop inline-block mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
              </svg>
              <a>Registration & Permits</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-caret-left-fill inline-block float-right mt-2"
                viewBox="0 0 320 512"
              >
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
              </svg>
            </li>
            {showpurchase && (
              <div>
                <ul className="bg-[#2C3B41] text-xs font-poppins">
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Purchase</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Purchase</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Purchase</a>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            <HandleClicker
              onClick={() => handleMenuClick('received')}
              to={`${ROUTES.RECEIVED}`}
            >
              <li className="p-2 cursor-pointer text-gray-300 hover:text-white hover:bg-[#1E282C]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width=" 16"
                  height=" 16"
                  fill="currentColor"
                  className="bi bi-mailbox inline-block mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
                  <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
                </svg>
                <a>Documents</a>
              </li>
            </HandleClicker>

            <li
              onClick={() => {
                handleDropdownClick('accounting');
              }}
              className="p-2 cursor-pointer text-gray-300 hover:text-white hover:bg-[#1E282C]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 16"
                height=" 16"
                fill="currentColor"
                className="bi bi-table inline-block mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
              </svg>
              <a>Users</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-caret-left-fill inline-block float-right mt-2"
                viewBox="0 0 320 512"
              >
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
              </svg>
            </li>
            {showaccounting && (
              <div>
                <ul className="bg-[#2C3B41] text-xs font-poppins">
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Accounting</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Accounting</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Accounting</a>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            <li className="p-2 cursor-pointer text-gray-300 hover:text-white hover:bg-[#1E282C]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 16"
                height=" 16"
                fill="currentColor"
                className="bi bi-table inline-block mr-2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 2h-2v2H9V2H7v2H3v8h2v-2h14v10h-8v2h10V4h-4V2zm2 6H5V6h14v2zm-6 8H7v-2h2v-2H7v2H5v2H3v2h2v2h2v2h2v-2H7v-2h6v-2z"
                  fill="currentColor"
                />
              </svg>
              <a>Payroll</a>
            </li>

            <li
              onClick={() => {
                handleDropdownClick('tax');
              }}
              className="p-2 cursor-pointer text-gray-300 hover:text-white hover:bg-[#1E282C]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 16"
                height=" 16"
                fill="currentColor"
                className="bi bi-table inline-block mr-2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 2h-2v2H9V2H7v2H3v8h2v-2h14v10h-8v2h10V4h-4V2zm2 6H5V6h14v2zm-6 8H7v-2h2v-2H7v2H5v2H3v2h2v2h2v2h2v-2H7v-2h6v-2z"
                  fill="currentColor"
                />
              </svg>
              <a>Tax</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-caret-left-fill inline-block float-right mt-2"
                viewBox="0 0 320 512"
              >
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
              </svg>
            </li>
            {showtax && (
              <div>
                <ul className="bg-[#2C3B41] text-xs font-poppins">
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Tax</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Tax</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Tax</a>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            <li
              onClick={() => {
                handleDropdownClick('reports');
              }}
              className="p-2 cursor-pointer text-gray-300 hover:text-white hover:bg-[#1E282C]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 16"
                height=" 16"
                fill="currentColor"
                className="bi bi-arrow-90deg-right inline-block mr-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
                />
              </svg>
              <a>Reports & Analytics</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-caret-left-fill inline-block float-right mt-2"
                viewBox="0 0 320 512"
              >
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
              </svg>
            </li>
            {showreport && (
              <div>
                <ul className="bg-[#2C3B41] text-xs font-poppins">
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Reports</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Reports</a>
                    </div>
                  </li>
                  <li className="mt-2 ml-10 cursor-pointer text-[#B3C7CE] hover:text-white flex items-center hover:bg-gray-800">
                    <div className="flex items-center p-2 ">
                      <p className="w-2 h-2 rounded-full ring-1 ring-gray-400  mr-2"></p>
                      <a>Reports</a>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            <li className="p-2 cursor-pointer text-gray-300 hover:text-white hover:bg-[#1E282C]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 16"
                height=" 16"
                fill="currentColor"
                className="bi bi-files inline-block mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
              </svg>
              <a>Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
