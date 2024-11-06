import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export const NavigationMenu: React.FC<IProps> = ({ children }) => {
  return <div className=" shadow-md    w-2/12    ">{children}</div>;
};
