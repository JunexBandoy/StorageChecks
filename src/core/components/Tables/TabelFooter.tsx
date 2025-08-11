export const TableFooter = () => {
  return (
    <>
      <tr className="line-height-[25px] border border-black">
        <td colSpan={9} className="bg-[#D3D3D3] text-red-500">
          <p className="text-[8px] text-center  font-['Times_New_Roman']">
            (CONTINUE IN SEPARATE SHEET IF NECESSARY)
          </p>
        </td>
      </tr>

      <tr className=" font-['Times_New_Roman'] h-[30px]">
        <td
          colSpan={3}
          className="text-[10px] text-center font-['Times_New_Roman'] bg-[#D3D3D3] border-l-[1px] border-black"
        >
          <p>SIGNATURE</p>
        </td>
        <td
          colSpan={3}
          className="text-[10px] font-['Times_New_Roman'] border-b-[1px] border-l-[1px] border-black"
        >
          <p></p>
        </td>

        <td
          colSpan={1}
          className=" border-r-[1px] border-l-[1px] border-b-[1px] text-center border-black bg-[#D3D3D3]"
        >
          <p className="text-[8px]  font-['Times_New_Roman']  ">DATE</p>
        </td>
        <td colSpan={2} className="border-b-[1px] border-black ">
          <p className="text-center text-[10px]"></p>
        </td>
      </tr>
    </>
  );
};
