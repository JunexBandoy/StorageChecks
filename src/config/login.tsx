import React, { useState } from 'react';

interface LoginProps {
  onLoginSuccess: () => void; // Callback to notify when login is successful
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Added loading state

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    try {
      const response = await fetch(
        'http://localhost/storagechecksAPI/api/UsersAPI.php?action=login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('jwt', token); // Store JWT in localStorage
        onLoginSuccess(); // Notify parent component that login is successful
        alert('Login Successful!');
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:bg-blue-300"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? 'Logging in...' : 'Login'} {/* Show loading text */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
