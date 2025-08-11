import React from 'react';
import * as XLSX from 'xlsx';

export const Excel: React.FC = () => {
  // Function to generate and download the Excel file
  const generateExcelFile = () => {
    // Create some data for the Excel file
    const data = [
      ['Name', 'Age'],
      ['John Doe', 28],
      ['Jane Smith', 34],
    ];

    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert the data to a worksheet
    const ws = XLSX.utils.aoa_to_sheet(data);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Write the workbook to a file and trigger the download
    XLSX.writeFile(wb, 'generated-file.xlsx');
  };

  return (
    <div className="App">
      <h1>Generate Excel File</h1>
      {/* Button to trigger Excel file generation */}
      <button onClick={generateExcelFile}>Generate and Download XLSX</button>
    </div>
  );
};
