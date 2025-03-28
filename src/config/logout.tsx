import React, { useEffect } from 'react';

const LogoutButton: React.FC = () => {
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('jwt_token');
      console.log('Token from localStorage:', token);

      if (!token) {
        console.log('No token found');
        alert('No token found, please log in again.');
        window.location.href = '/login';
        return;
      }

      // Decode JWT and check expiry
      const tokenData = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
      const expiryDate = tokenData.exp * 60; // Convert exp to milliseconds
      const currentTime = Date.now();

      console.log('Token data:', tokenData);
      console.log('Expiry date:', expiryDate);
      console.log('Current time:', currentTime);

      // Check if the token has expired
      if (expiryDate < currentTime) {
        console.log('Token expired', { tokenData, expiryDate, currentTime });
        alert('Your session has expired. Please log in again.');
        localStorage.removeItem('jwt_token');
        window.location.href = '/login';
        return;
      }

      // Send POST request to the logout endpoint
      console.log('Sending logout request...'); // Debugging line
      const response = await fetch(
        'http://localhost/storagechecksAPI/api/UsersAPI.php?action=logout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        }
      );

      console.log('Logout response:', response); // Debugging line

      if (response.ok) {
        // Logout successful, remove the token from localStorage
        localStorage.removeItem('jwt_token');
        alert('You have been logged out successfully');
        window.location.href = '/login';
      } else {
        const error = await response.json();
        console.error('Logout failed:', error);
        alert(`Logout failed: ${error.Message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error during logout:', error); // Debugging line
      alert('An error occurred during logout.');
    }
    useEffect(() => {
      localStorage.clear();
    }, []);
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
