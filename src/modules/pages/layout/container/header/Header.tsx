interface Iprops {
  children: React.ReactNode;
}

export const Header: React.FC<Iprops> = ({ children }) => {
  return (
    <>
      <div className="mx-auto  ">{children}</div>
    </>
  );
};
