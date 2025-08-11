import axios from 'axios';
import React, { useState } from 'react';

import { DialogBox } from '@components/box/DeleteBox';
import { Modal } from '@components/forms/Modal';

export const LogoutButton: React.FC = () => {
  const [promt, setPromt] = useState<boolean>(false);

  const handlepromt = () => {
    setPromt(true);
  };

  const handleLogout = async () => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      alert('No token found. Please log in.');
      window.location.href = '/';
      return;
    }

    // Check expiry
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (Date.now() > payload.exp * 1800) {
      alert('Token expired. Please log in again.');
      localStorage.removeItem('jwt');
      window.location.href = '/';
      return;
    }

    try {
      await axios.post(
        'http://localhost/storagechecksAPI/api/UsersAPI.php?action=logout',
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.error('Logout error:', err);
      alert('Logout failed. Please try again.');
    } finally {
      localStorage.removeItem('jwt');
      window.location.href = '/';
    }
  };

  return (
    <div>
      {promt && (
        <Modal show={true}>
          <DialogBox
            onClick={() => {
              handleLogout();
            }}
            onCancel={() => {
              setPromt(false);
            }}
            onDelete={() => {
              handleLogout();
            }}
            label={`Are you sure you want to logout?`}
          />
        </Modal>
      )}
      <button
        onClick={() => {
          handlepromt();
        }}
        className=" border  text-white px-2 py-2 rounded "
      >
        <div className="flex items-center justify-center gap-2">
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          {' '}
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />{' '}
        </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 16"
            strokeWidth="1.5"
            stroke="currentColor"
            width="14"
            height="14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
          </svg>

          <p className="font-sans text-xs">Logout</p>
        </div>
      </button>
    </div>
  );
};
