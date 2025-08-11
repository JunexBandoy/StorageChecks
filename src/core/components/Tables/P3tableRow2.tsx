export const P3tableRow = () => {
  return (
    <>
      <tr className=" font-['Times_New_Roman']  border-b-[1px] h-[20px] border border-black">
        <td
          colSpan={2}
          className="text-[8px] font-['Times_New_Roman'] text-center   border-r-[1px] border-black "
        ></td>

        <td
          colSpan={2}
          className="text-[8px] font-['Times_New_Roman'] border-r-[1px] border-b-[1px] border-black"
        >
          <div className="flex border-t-[1px] border-black">
            <div className="flex-1  border-r-[1px] border-black"></div>
            <div className="flex-1 "></div>
          </div>
        </td>
        <td
          colSpan={1}
          className="text-[8px] font-['Times_New_Roman'] border-r-[1px] border-black"
        ></td>
        <td
          colSpan={1}
          className="text-[8px] font-['Times_New_Roman'] border-r-[1px] border-black"
        ></td>

        <td colSpan={3} className="">
          <p className="text-center text-[8px]"></p>
        </td>
      </tr>
    </>
  );
};
