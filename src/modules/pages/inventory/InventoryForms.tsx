import axios from 'axios';
import { Formik, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { Form } from 'react-router-dom';

import {
  InventoryFormValues,
  initialValues,
  validationSchema,
} from 'src/models/Inventory';

export const InventoryForm: React.FC = () => {
  const [formValues, setFormValues] =
    useState<InventoryFormValues>(initialValues);

  const onSubmit = async (values: InventoryFormValues) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/inventory',
        values
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
    <div>
      <h1>Add Inventory Item</h1>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="inventory_id">Inventory ID</label>
            <Field name="inventory_id" type="text" />
            <ErrorMessage name="inventory_id" component="div" />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field name="description" type="text" />
            <ErrorMessage name="description" component="div" />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <Field name="category" type="text" />
            <ErrorMessage name="category" component="div" />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <Field name="quantity" type="number" />
            <ErrorMessage name="quantity" component="div" />
          </div>
          <div>
            <label htmlFor="unit_price">Unit Price</label>
            <Field name="unit_price" type="number" />
            <ErrorMessage name="unit_price" component="div" />
          </div>
          <div>
            <label htmlFor="total_value">Total Value</label>
            <Field name="total_value" type="number" />
            <ErrorMessage name="total_value" component="div" />
          </div>
          <div>
            <label htmlFor="supplier">Supplier</label>
            <Field name="supplier" type="text" />
            <ErrorMessage name="supplier" component="div" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <Field name="location" type="text" />
            <ErrorMessage name="location" component="div" />
          </div>
          <div>
            <label htmlFor="record_level">Record Level</label>
            <Field name="record_level" type="text" />
            <ErrorMessage name="record_level" component="div" />
          </div>
          <div>
            <label htmlFor="date_recieved">Date Received</label>
            <Field name="date_recieved" type="date" />
            <ErrorMessage name="date_recieved" component="div" />
          </div>
          <div>
            <label htmlFor="remarks">Remarks</label>
            <Field name="remarks" type="text" />
            <ErrorMessage name="remarks" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
