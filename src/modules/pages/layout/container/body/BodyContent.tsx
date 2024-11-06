interface Iprops {
  children: React.ReactNode;
}

export const Bodycontent: React.FC<Iprops> = ({ children }) => {
  return (
    <>
      <div className="w-10/12 ">{children}</div>
    </>
  );
};
