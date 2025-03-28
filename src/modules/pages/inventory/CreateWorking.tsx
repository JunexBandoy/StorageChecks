import axios from 'axios';
import { useState } from 'react';

import { initialValues, InventoryFormValues } from 'src/models/Inventory';

export const createworking = () => {
  const [formValues, setFormValues] =
    useState<InventoryFormValues>(initialValues);
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost/storagechecksAPI/api/inventoryAPI.php',
        formValues,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      alert('Inventory Item Created');
      setFormValues(initialValues); // Reset form values
    } catch (error) {
      console.error('There was an error creating the inventory item!', error);
      alert('Error creating inventory item');
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="inventory_id">Inventory ID</label>
            <input
              name="inventory_id"
              type="text"
              value={formValues.inventory_id}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              name="description"
              type="text"
              value={formValues.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <input
              name="category"
              type="text"
              value={formValues.category}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              name="quantity"
              type="number"
              value={formValues.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="unit_price">Unit Price</label>
            <input
              name="unit_price"
              type="number"
              value={formValues.unit_price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="total_value">Total Value</label>
            <input
              name="total_value"
              type="number"
              value={formValues.total_value}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="supplier">Supplier</label>
            <input
              name="supplier"
              type="text"
              value={formValues.supplier}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              name="location"
              type="text"
              value={formValues.location}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="record_level">Record Level</label>
            <input
              name="record_level"
              type="text"
              value={formValues.record_level}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="date_recieved">Date Received</label>
            <input
              name="date_recieved"
              type="date"
              value={formValues.date_recieved}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="remarks">Remarks</label>
            <input
              name="remarks"
              type="text"
              value={formValues.remarks}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
