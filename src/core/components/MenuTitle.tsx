interface Props {
  label: string;
}

export const Titleheader: React.FC<Props> = ({ label }) => {
  return (
    <>
      <div className=" p-4 m-2   text-[#222D32] border-b-2 border-[#8b969c] font-serif text-2xl">
        {label}
      </div>
    </>
  );
};
