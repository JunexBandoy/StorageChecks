import React from 'react';

const ProgressBarExample = () => {
  const progress = 60; // Example progress value (in percent)

  return (
    <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
      <div
        className="bg-blue-500 text-xs leading-none  text-center text-white"
        style={{ width: `${progress}%` }}
      >
        {`${progress}%`}
      </div>
    </div>
  );
};

export default ProgressBarExample;
