export const TableRow = () => {
  return (
    <>
      <tr className="border-b-[1px] border-black h-[20px]">
        <td colSpan={1} className=" text-black border-l-[1px] border-black ">
          <p className="text-[8px]   font-['Times_New_Roman'] "></p>
          <div className="grid grid-cols-2">
            <div className="text-[8px] font-['Times_New_Roman'] text-center border-black">
              <p></p>
            </div>
            <div className="text-[8px] font-['Times_New_Roman'] text-center border-l-[1px] border-black">
              <p></p>
            </div>
          </div>
        </td>
        <td colSpan={2} className=" text-black border-l-[1px] border-black">
          <p className="text-[8px] text-center  font-['Times_New_Roman'] "></p>
          <p className="text-[8px] text-center  font-['Times_New_Roman'] "></p>
        </td>
        <td colSpan={2} className=" text-black border-l-[1px] border-black">
          <p className="text-[8px] text-center  font-['Times_New_Roman']"></p>
        </td>
        <td colSpan={1} className=" text-black border-l-[1px] border-black">
          <p className="text-[8px] text-center  font-['Times_New_Roman']"></p>
        </td>
        <td colSpan={1} className=" text-black border-l-[1px] border-black">
          <p className="text-[6px] text-center  font-['Times_New_Roman'] font-light"></p>
        </td>
        <td colSpan={1} className=" text-black border-l-[1px] border-black">
          <p className="text-[8px] text-center font-light font-['Times_New_Roman']"></p>
        </td>
        <td colSpan={1} className=" text-black border-l-[1px] border-black">
          <p className="text-[8px] text-center  font-['Times_New_Roman']"></p>
        </td>
      </tr>
    </>
  );
};
