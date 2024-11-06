import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export const Main: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <div className=" mx-auto flex  relative">{children}</div>
    </>
  );
};
