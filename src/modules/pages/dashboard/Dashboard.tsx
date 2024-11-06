import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { Barcharts } from '@components/BarCharts';
import { LineCharts } from '@components/LinCharts';
import { Titleheader } from '@components/MenuTitle';
import ProgressBarExample from '@components/Progressbar';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend
);

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export const Dashboard = () => {
  return (
    <>
      <Titleheader label="Dashboard" />
      <div className="text-sm  overflow-hidden bg-white ">
        <div className="p-2 m-2 text-center   w-full">
          <ul>
            <li className="inline-block  ">
              <div className="h-36 w-60 bg-gradient-to-r from-[#B800D8] to-[#5B3CB0] p2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-cart-check-fill inline-block text-white m-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />{' '}
                </svg>
                <p className="text-white">Sales</p>
                <p className="text-white">73,000.00</p>
              </div>
            </li>
            <li className="inline-block p-2">
              <div className="h-36 w-60 bg-gradient-to-r from-[#3C8DBC] to-[#164561] p2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-cart-check-fill inline-block text-white m-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                  />{' '}
                </svg>
                <p className="text-white">Revenue</p>
                <p className="text-white">50,000.00</p>
              </div>
            </li>
            <li className="inline-block p-2">
              <div className="h-36 w-60 bg-gradient-to-r from-[#02D5D1] to-[#3a8e8c] p2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-cart-check-fill inline-block text-white m-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z" />{' '}
                </svg>
                <p className="text-white">Annual</p>
                <p className="text-white">3,000.000.00</p>
              </div>
            </li>
            <li className="inline-block p-2">
              <div className="h-36 w-60 bg-gradient-to-r from-[#E3498B] to-[#C3509A] p2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-cart-check-fill inline-block text-white m-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 4.5V9h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v7H2V2a2 2 0 0 1 2-2h5.5L14 4.5zM13 12h1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2h1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z" />{' '}
                </svg>
                <p className="text-white">Tax</p>
                <p className="text-white">43,000.00</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="md:w-5/6 positive ">
            <div className="flex items-center border border-gray-300   ">
              <div className=" m-2 md:w-1/2  ">
                <LineCharts />
              </div>
              <div className=" m-2 md:w-1/2">
                <Barcharts />
              </div>
            </div>
            <table className=" font-serif p-2 m-2  bg-white border border-gray-300 w-[98%]  shadow-lg">
              <thead>
                <tr className="bg-[#3C8DBC]">
                  <th className="px-6 py-3 border-b-2 border-gray-300  text-left text-xs font-semibold text-white uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300  text-left text-xs font-semibold text-white  uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300  text-left text-xs font-semibold text-white  uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300  text-left text-xs font-semibold text-white  uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300  text-left text-xs font-semibold text-white  uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300  text-left text-xs font-semibold text-white  uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300  text-left text-xs font-semibold text-white  uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6  py-2 border-b border-gray-300">
                    <input
                      type="checkbox"
                      id="checkboxExample"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-[#1A2226] rounded"
                    />
                  </td>
                  <td className="px-6   border-b border-gray-300">
                    <img
                      className="w-6 h-6 rounded-full  "
                      src="./Images/image.png"
                      alt="Bordered avatar"
                    />
                  </td>

                  <td className="px-6  py-2 border-b border-gray-300">
                    John Doe
                  </td>
                  <td className="px-6  py-2 border-b border-gray-300">
                    Software Engineer
                  </td>
                  <td className="px-6  py-2 border-b border-gray-300">
                    <ProgressBarExample />
                  </td>
                  <td className="px-6  py-2 border-b border-gray-300">
                    Active
                  </td>
                  <td className="px-6  py-2 border-b border-gray-300">
                    Action
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6  py-2 border-b border-gray-300">
                    <input
                      type="checkbox"
                      id="checkboxExample"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-[#1A2226]  rounded"
                    />
                  </td>
                  <td className="px-6  py-2 border-b border-gray-300">
                    <img
                      className="w-6 h-6  rounded-full  "
                      src="./Images/mark.png"
                      alt="Bordered avatar"
                    />
                  </td>

                  <td className="px-6  py-2 border-b border-gray-300">
                    Jane Smith
                  </td>

                  <td className="px-6  py-2 border-b border-gray-300">
                    Project Manager
                  </td>
                  <td className="px-6  py-2 border-b border-gray-300">
                    <ProgressBarExample />
                  </td>
                  <td className="px-6  py-2 border-b border-gray-300">
                    Inactive
                  </td>
                  <td className="px-6  py-2 border-b border-gray-300">
                    Action
                  </td>
                </tr>
                <tr>
                  <td className="px-6  py-2 border-b border-gray-300">
                    <input
                      type="checkbox"
                      id="checkboxExample"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-[#1A2226] rounded"
                    />
                  </td>
                  <td className="px-6  py-2 border-b border-gray-300">
                    <img
                      className="w-6 h-6  rounded-full  "
                      src="./Images/elon.png"
                      alt="Bordered avatar"
                    />
                  </td>

                  <td className="px-6  py-2 border-b border-gray-300">
                    Alice Johnson
                  </td>

                  <td className="px-6  py-2 border-b border-gray-300">
                    UI/UX Designer
                  </td>
                  <td className="px-6  py-2 border-b border-gray-300">
                    <ProgressBarExample />
                  </td>
                  <td className="px-6  py-2 border-b border-gray-300">
                    Active
                  </td>
                  <td className="px-6  py-2 border-b border-gray-300">
                    Action
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="md:w-1/6  ">
            <div className="w-[95%] h-full m-2 border ">
              <div className="p-2 m-2 bg-gradient-to-r from-[#FCA53A] to-[#F68D4E]">
                <p className="text-sm text-white ">Revenue</p>
                <p className="font-italic  text-lg text-white">
                  IDR 7.8582.0000
                </p>
                <p>
                  <span className="text-green-300">30%</span>{' '}
                  <span className="text-[#fff] text-xs">vs lastweek</span>
                </p>
              </div>
              <div className="p-2 m-2 bg-gradient-to-r from-[#4DB8EC] to-[#5DA1E0]">
                <p className="text-sm text-white ">Sales</p>
                <p className="font-italic  text-lg text-white">$ 784.00.00</p>
                <p>
                  <span className="text-green-300">21%</span>{' '}
                  <span className="text-[#fff] text-xs">vs lastweek</span>
                </p>
              </div>
              <div className="p-2 m-2 bg-gradient-to-r from-[#5539A7] to-[#894FE2]">
                <p className="text-sm text-white ">Purchase</p>
                <p className="font-italic  text-lg text-white">PCS 4,582.00</p>
                <p>
                  <span className="text-green-300">71%</span>{' '}
                  <span className="text-[#fff] text-xs">vs lastweek</span>
                </p>
              </div>
              <div>
                <img className=" rounded-full  " src="./Images/inventory.png" />
                <p className="text-xs p-2 font-serif">
                  Digital systems reduce human error and save time, leading to
                  increased productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
