import React, { useState, useEffect } from 'react';

const DateTimeDisplay: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex ">
      <div className="w-full">
        <div className="md-w/12">
          <img className="  " src="./Images/time.png" alt="Bordered avatar" />
        </div>
        <div className="md-w/12">
          <h1 className="text-3xl font-thin text-gray-800">
            {currentDateTime.toLocaleDateString()}
          </h1>
          <h2 className="text-2xl text-gray-600 font-thin">
            {currentDateTime.toLocaleTimeString()}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
