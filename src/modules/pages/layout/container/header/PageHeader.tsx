interface Iprops {
  children: React.ReactNode;
}

export const PageHeader: React.FC<Iprops> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
