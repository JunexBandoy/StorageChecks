import { createHashRouter } from 'react-router-dom';

import App from './App';
import { Dashboard } from './modules/pages/dashboard/Dashboard';
import { EmployeeList } from './modules/pages/employee/Employee';
import { Home } from './modules/pages/home/Home';
import { Categories } from './modules/pages/inventory/product/Categories';
import { Leave } from './modules/pages/Leave/Leave';
import { Product } from './modules/pages/product/Product';
import { ReceivedOrders } from './modules/pages/receivedorders/ReceivedOrders';
import { Reports } from './modules/pages/reports/Reports';
import { Tax } from './modules/pages/tax/tax';

export const Router = createHashRouter([
  // const inventories = {
  //   path: 'inventory'
  //   element: <i
  // }
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'product', element: <Product /> },
      { path: 'category', element: <Categories /> },
      { path: 'Employee', element: <EmployeeList /> },
      { path: 'received', element: <ReceivedOrders /> },
      { path: 'reports', element: <Reports /> },
      { path: 'suppliers', element: <Leave /> },
      { path: 'tax', element: <Tax /> },
    ],
  },
]);
