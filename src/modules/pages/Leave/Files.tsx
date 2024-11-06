import React, { useEffect, useState } from 'react';

import { filesModel } from 'src/models/filesModel';
import { FilesServices } from 'src/services/FilesServices';

const uploads = 'http://localhost/StoragechecksAPI/uploads';

export const Files = () => {
  const [files, setFiles] = useState<filesModel[]>([]);

  const loadFiles = async () => {
    try {
      const response = await FilesServices.getAll();
      setFiles(response);
    } catch (error) {
      console.error('Failed to load files');
    }
  };

  useEffect(() => {
    loadFiles();
  }, []);

  const renderFileContent = (file: filesModel) => {
    const fileExtension = file.files.split('.').pop()?.toLowerCase();
    const fileUrl = `${uploads}/${file.files}`;

    if (['jpg', 'jpeg', 'png'].includes(fileExtension || '')) {
      return (
        <img
          src={fileUrl}
          alt={`Image ${file.files}`}
          className="w-32 h-auto"
        />
      );
    } else if (fileExtension === 'pdf') {
      return (
        <iframe
          src={fileUrl}
          title={`PDF ${file.files}`}
          width="100px"
          height="100px"
          className="border-none"
        ></iframe>
      );
    }
    return <p>Unsupported file type</p>;
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 flex justify-end">X</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              File
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {files.map((file, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {renderFileContent(file)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
