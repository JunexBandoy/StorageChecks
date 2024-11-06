import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { inventory } from 'src/models/Inventory';

export const Inventory = () => {
  const [data, setData] = useState<inventory[]>([]);

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
    <div className="flex justify-center  ">
      <table className="table-auto text-center border-collapse border border-gray-400">
        <thead className="text-sm">
          <tr>
            <th className="border border-gray-400">Id</th>
            <th className="border border-gray-400">INV Id</th>
            <th className="border border-gray-400">Name</th>
            <th className="border border-gray-400">Description</th>
            <th className="border border-gray-400">Category</th>
            <th className="border border-gray-400">Quantity</th>
            <th className="border border-gray-400">Unit Price</th>
            <th className="border border-gray-400">Total Value</th>
            <th className="border border-gray-400">Supplier</th>
            <th className="border border-gray-400">Location</th>
            <th className="border border-gray-400">Record Level</th>
            <th className="border border-gray-400">Received</th>
            <th className="border border-gray-400">Remarks</th>
            <th className="border border-gray-400">Action</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {data.length > 0 ? (
            data.map((value, index) => (
              <tr key={index}>
                <td className="border border-gray-400">{value.id}</td>
                <td className="border border-gray-400">{value.inventory_id}</td>
                <td className="border border-gray-400">{value.name}</td>
                <td className="border border-gray-400">{value.description}</td>
                <td className="border border-gray-400">{value.category}</td>
                <td className="border border-gray-400">{value.quantity}</td>
                <td className="border border-gray-400">{value.unit_price}</td>
                <td className="border border-gray-400">{value.total_value}</td>
                <td className="border border-gray-400">{value.supplier}</td>
                <td className="border border-gray-400">{value.location}</td>
                <td className="border border-gray-400">{value.record_level}</td>
                <td className="border border-gray-400">
                  {value.date_recieved}
                </td>
                <td className="border border-gray-400">{value.remarks}</td>
                <td className="border border-gray-400">
                  <button className="bg-green-500 border rounded-sm p-2">
                    Edit
                  </button>
                  <button className="bg-red-500 border rounded-sm p-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border border-gray-400">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
