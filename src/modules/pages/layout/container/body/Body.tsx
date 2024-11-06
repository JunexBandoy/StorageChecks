interface Iprops {
  children: React.ReactNode;
}

export const Body: React.FC<Iprops> = ({ children }) => {
  return (
    <>
      <div className="">{children}</div>
    </>
  );
};
