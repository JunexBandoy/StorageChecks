export const P3tableRow = () => {
  return (
    <>
      <tr className="border-b-[1px] border-black font-['Times_New_Roman']  h-[20px]">
        <td
          colSpan={2}
          className="text-[8px] font-['Times_New_Roman'] text-center   border-r-[1px] border-black "
        ></td>

        <td
          colSpan={2}
          className="text-[8px] font-['Times_New_Roman'] border-r-[1px] border-b-[1px] border-black"
        >
          <div className="flex ">
            <div className="flex-1  border-r-[1px] border-black">
              <p className="text-center"></p>
            </div>
            <div className="flex-1 ">
              <p className="text-center"></p>
            </div>
          </div>
        </td>
        <td
          colSpan={1}
          className="text-[8px] font-['Times_New_Roman'] border-r-[1px] border-black"
        >
          {' '}
        </td>

        <td colSpan={4} className="border-b-[1px] border-black">
          <p className="text-center text-[8px]"></p>
        </td>
      </tr>
    </>
  );
};
