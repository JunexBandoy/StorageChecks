/* eslint-disable react/no-unescaped-entities */
interface Props {
  onClick: () => void;
}

export const Page1: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      <div className="mx-auto pb-[50px] text-black w-full  p-12">
        <button className="text-blue-500 cursor-pointer pt-[50px] text-[12px]">
          Print Page 1
        </button>
        <button className="float-right text-xl text-red-500" onClick={onClick}>
          X
        </button>

        <div className="mx-auto pb-[50px] text-black">
          <table className="w-[1024px] mx-auto table-fixed border-collapse border border-black overflow-hidden p-12">
            <colgroup>
              <col className="w-[62px]" />
              <col className="w-[65px]" />
              <col className="w-[63px]" />
              <col className="w-[14px]" />
              <col className="w-[25px]" />
              <col className="w-[18px]" />
              <col className="w-[20px]" />
              <col className="w-[15px]" />
              <col className="w-[18px]" />
            </colgroup>
            <tbody>
              <tr>
                <td colSpan={9} className="td_bbottom_none">
                  <div className="colfull text-[8px]">
                    <p>CS Form No. 212</p>
                    <p className="italic">Revised 2017</p>
                    <p className="text-center text-2xl  font-bold font-['Times_New_Roman']">
                      PERSONAL DATA SHEET
                    </p>
                  </div>
                  <div className="colfull uppercase mt-[10px] text-[8px] font-['Times_New_Roman']">
                    <p className="font-bold ">
                      WARNING: Any misrepresentation made in the Personal Data
                      Sheet and the Work Experience Sheet shall cause the filing
                      of administrative/criminal case/s against the person
                      concerned.
                    </p>
                    <p className="font-bold ">
                      READ THE ATTACHED GUIDE TO FILING OUT THE PERSONAL DATA
                      SHEET (PDS) BEFORE ACCOMPLISHING THE PDS FORM.
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={5} className="uppercase">
                  <p className="text-[8px] font-light">
                    Print legibly. Tick appropriate boxes
                    <span>
                      (
                      <input
                        type="checkbox"
                        checked
                        className="w-[8px] h-2 relative  m-0 p-0"
                      />
                      )
                    </span>
                    and use separate sheet if necessary. Indicate N/A if not
                    applicable.
                    <span className="font-bold text-[10px]">
                      DO NOT ABBREVIATE
                    </span>
                    .
                  </p>
                </td>
                <td className="bg-[#D3D3D3] text-[8px] border-l-[1px] border-t-[1px] border-black">
                  <p>1. CS ID </p>
                </td>
                <td colSpan={3}>
                  <p className="text-[6px]   border-t-[1px] border-black  ">
                    (Do not fill up For CSC use only)
                  </p>
                </td>
              </tr>
              <tr className="line-height-[25px]">
                <td colSpan={9} className="bg-[#808080] text-white">
                  <p className="text-[14px] indent-5 font-['Times_New_Roman']">
                    I. PERSONAL INFORMATION
                  </p>
                </td>
              </tr>
              <tr className="line-height-[25px]">
                <td className="td_bbottom_none text-[10px] bg-[#D3D3D3] font-['Times_New_Roman']">
                  <p>2. &nbsp; SURNAME</p>
                </td>
                <td
                  colSpan={8}
                  className="indent10 text-[10px] border-b-[1px] border-l-[1px] border-black font-['Times_New_Roman']"
                >
                  <p>{''}</p>
                </td>
              </tr>
              <tr className="line-height-[25px]">
                <td className="td_bbottom_none text-[10px] bg-[#D3D3D3]">
                  <p className="indent-4 font-['Times_New_Roman']">
                    FIRST NAME
                  </p>
                </td>
                <td
                  colSpan={5}
                  className="indent10 text-[10px] border-b-[1px] border-l-[1px] border-black font-['Times_New_Roman']"
                >
                  <p>{''}</p>
                </td>
                <td
                  colSpan={3}
                  className="text-[10px] bg-[#D3D3D3] font-['Times_New_Roman'] border-l-[1px] border-black border-b-[1px]"
                >
                  <p>
                    NAME EXTENSION <span></span>
                  </p>
                </td>
              </tr>
              <tr className="line-height-[25px]">
                <td className="td_btop_none text-[10px] bg-[#D3D3D3] font-['Times_New_Roman'] border-b border-black">
                  <p className="indent-4">MIDDLE NAME</p>
                </td>
                <td
                  colSpan={8}
                  className="indent10 text-[10px] border-b-[1px] border-l-[1px] border-black font-['Times_New_Roman']"
                >
                  <p>{''}</p>
                </td>
              </tr>
              <tr className="line-height-[25px]">
                <td className="bg-[#D3D3D3] ">
                  <p className="text-[10px]  ">3. DATE OF BIRTH</p>
                  <p className="text-[8px] border-b-[1px] border-black font-['Times_New_Roman'] pl-4">
                    (MM/DD/YY)
                  </p>
                </td>
                <td className=" text-[10px] border-b-[1px] border-l-[1px] border-black font-['Times_New_Roman']">
                  <p>{''}</p>
                </td>
                <td
                  colSpan={2}
                  className="bg-[#D3D3D3] text-[10px] border-l-[1px] border-r-[1px] border-black border-b[1px]  font-['Times_New_Roman'] "
                >
                  <p>16. CITIZENSHIP</p>
                </td>

                <td colSpan={5} className="border-black  ">
                  <div className=" grid grid-cols-3 gap-4 col-span-4 font-['Times_New_Roman']">
                    <div className="flex items-center">
                      <label
                        htmlFor="filipino"
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id="filipino"
                          className="w-[10px] h-[10px]"
                        />
                        <span className="text-[10px]">Filipino</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="dual"
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id="dual"
                          className="w-[10px] h-[10px]"
                        />
                        <span className="text-[10px]">Dual Citizenship</span>
                      </label>
                    </div>
                    <div className="flex items-center"></div>
                  </div>
                  <div className=" grid grid-cols-3 gap-4 font-['Times_New_Roman']  border-black border-b-[1px]">
                    <div className="flex items-center"></div>
                    <div className="flex items-center">
                      <label
                        htmlFor="birth"
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id="birth"
                          className="w-[10px] h-[10px]"
                        />
                        <span className="text-[10px]">by birth</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="naturalization"
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id="naturalization"
                          className="w-[10px] h-[10px]"
                        />
                        <span className="text-[10px]">by naturalization</span>
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="line-height-[25px] font-['Times_New_Roman']">
                <td className="bg-[#D3D3D3] border-b-[1px] border-black ">
                  <p className="text-[10px] ">4. PLACE OF BIRTH</p>
                </td>
                <td className=" text-[10px] border-b-[1px] border-black border-l-[1px] font-['Times_New_Roman']">
                  <p>{''}</p>
                </td>
                <td
                  colSpan={2}
                  className="bg-[#D3D3D3] text-[10px]  font-['Times_New_Roman'] border-black border-l-[1px] border-r-[1px] "
                >
                  <p className="text-[8px] font-['Times_New_Roman'] text-center">
                    IF HOLDER OF DUAL CITIZENSHIP
                  </p>
                </td>

                <td colSpan={5}>
                  <p className="text-[10px] font-['Times_New_Roman'] text-center border-b-[1px] border-black ">
                    PLEASE INDICATE COUNTRY
                  </p>
                </td>
              </tr>
              <tr className="line-height-[25px]">
                <td className="bg-[#D3D3D3] border-b-[1px] border-black font-['Times_New_Roman']">
                  <p className="text-[10px] bg-[#D3D3D3]">5. SEX</p>
                </td>
                <td className=" text-[10px] border-b-[1px] border-l-[1px] border-black font-['Times_New_Roman']">
                  <div className=" grid grid-cols-3 gap-4 col-span-4 font-['Times_New_Roman']">
                    <div className="flex items-center">
                      <label
                        htmlFor="filipino"
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id="filipino"
                          className="w-[10px] h-[10px] border-black border-l-[1px] border-r-[1px]"
                        />
                        <span className="text-[10px]">Male</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="dual"
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id="dual"
                          className="w-[10px] h-[10px]"
                        />
                        <span className="text-[10px]">Female</span>
                      </label>
                    </div>
                  </div>
                </td>
                <td
                  colSpan={2}
                  className="bg-[#D3D3D3] text-[10px] border-b-[1px] border-black black border-l-[1px] border-r-[1px] font-['Times_New_Roman']  "
                >
                  <p className="text-[8px] font-['Times_New_Roman'] text-center">
                    PLEASE INDICATE THE DETAILS
                  </p>
                </td>

                <td colSpan={5}>
                  <p className="text-[10px] font-['Times_New_Roman'] border-b-[1px] border-black">
                    N/A
                  </p>
                </td>
              </tr>
              <tr>
                <td className="bg-[#D3D3D3] border-black border-b-[1px] font-['Times_New_Roman']">
                  <p className="text-[10px] font-family-['Times_New_Roman']   ">
                    6.&nbsp;CIVIL STATUS
                  </p>
                </td>
                <td className="border-b-[1px] border-r-[1px] border-l-[1px] border-black">
                  <div className=" grid grid-cols-3 gap-4 col-span-4 font-['Times_New_Roman']">
                    <div className="flex items-center">
                      <label
                        htmlFor="filipino"
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id="filipino"
                          className="w-[10px] h-[10px]"
                        />
                        <span className="text-[8px]">Single</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="dual"
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id="dual"
                          className="w-[10px] h-[10px]"
                        />
                        <span className="text-[8px]">Married</span>
                      </label>
                    </div>
                  </div>
                  <div className=" grid grid-cols-3 gap-4 col-span-4 font-['Times_New_Roman']">
                    <div className="flex items-center">
                      <label
                        htmlFor="filipino"
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id="filipino"
                          className="w-[10px] h-[10px]"
                        />
                        <span className="text-[8px]">Widowed</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="dual"
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id="dual"
                          className="w-[10px] h-[10px]"
                        />
                        <span className="text-[8px]">Separated</span>
                      </label>
                    </div>
                  </div>
                  <div className=" grid grid-cols-3 gap-4 col-span-4 font-['Times_New_Roman']">
                    <div className="flex items-center">
                      <label
                        htmlFor="filipino"
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id="filipino"
                          className="w-[10px] h-[10px]"
                        />
                        <span className="text-[8px]">Other</span>
                      </label>
                    </div>
                  </div>
                </td>
                <td className="bg-[#D3D3D3] border-black border-l-[1px] border-r-[1px]">
                  <p className="font-['Times_New_Roman'] text-[10px] ">
                    17. RESIDENTIAL ADDRESS
                  </p>
                </td>
                <td colSpan={6}>
                  <div className="grid grid-cols-2   font-['Times_New_Roman'] border-b-[1px] border-black">
                    <p className="text-[6px] flex  mx-auto">{''}</p>
                    <p className="text-[6px] flex  mx-auto">{''}</p>
                  </div>
                  <div className="grid grid-cols-2   font-['Times_New_Roman']">
                    <p className="text-[6px] flex  mx-auto">
                      HOUSE/BLOCK/LOT NO.
                    </p>
                    <p className="text-[6px] flex  mx-auto">STREET</p>
                  </div>
                  <div className="grid grid-cols-2   font-['Times_New_Roman'] border-b-[1px] border-black">
                    <p className="text-[6px] flex  mx-auto">{''}</p>
                    <p className="text-[6px] flex  mx-auto">{''}</p>
                  </div>
                  <div className="grid grid-cols-2   font-['Times_New_Roman']">
                    <p className="text-[6px] flex  mx-auto">
                      SUBDIVISION/VILLAGE.
                    </p>
                    <p className="text-[6px] flex  mx-auto">BARANGAY</p>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td className="text-[10px] font-['Times_New_Roman'] bg-[#D3D3D3] border-b-[1px] border-black">
                  <p>7. &nbsp; HEIGHT (m)</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-b-[1px] border-r-[1px] border-black border-l-[1px]">
                  <p>{''}</p>
                </td>
                <td className=" bg-[#D3D3D3] border-black "></td>
                <td colSpan={6} className="border-black border-l-[1px]">
                  <div className="grid grid-cols-2   font-['Times_New_Roman'] border-b-[1px] border-black">
                    <p className="text-[6px] flex  mx-auto">{''}</p>
                    <p className="text-[6px] flex  mx-auto">{''}</p>
                  </div>
                  <div className="grid grid-cols-2   font-['Times_New_Roman'] border-b-[1px] border-black">
                    <p className="text-[6px] flex  mx-auto">
                      CITY/MUNCIPALITY.
                    </p>
                    <p className="text-[6px] flex  mx-auto">PROVINCE</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[10px] font-['Times_New_Roman'] bg-[#D3D3D3] border-b-[1px] border-black">
                  <p>8. &nbsp; WEIGHT (KG)</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-b-[1px] border-black  border-l-[1px] border-r-[1px]">
                  <p>{''}</p>
                </td>
                <td className=" bg-[#D3D3D3]">
                  <p className="text-[10px] font-['Times_New_Roman'] text-center border-b-[1px] border-black border-r-[1px]">
                    ZIP CODE
                  </p>
                </td>
                <td colSpan={6}>
                  <p className="text-[10px] text-center font-['Times_New_Roman'] border-b-[1px] border-black ">
                    {''}
                  </p>
                </td>
              </tr>
              <tr className="border-k">
                <td className="text-[10px] font-['Times_New_Roman']  border-b-[1px] border-black bg-[#D3D3D3]">
                  <p>9. &nbsp; BLOOD TYPE</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-b-[1px] border-l-[1px] border-black">
                  <p>{''} </p>
                </td>
                <td className=" bg-[#D3D3D3] border-l-[1px] border-black">
                  <p className="text-[10px] font-['Times_New_Roman'] text-center">
                    18. &nbsp; PERMANENT ADDRESS
                  </p>
                </td>
                <td colSpan={6} className="border-black border-l-[1px]">
                  <div className="grid grid-cols-2   font-['Times_New_Roman'] border-b-[1px] border-black">
                    <p className="text-[6px] flex  mx-auto">{''}</p>
                    <p className="text-[6px] flex  mx-auto">{''}</p>
                  </div>
                  <div className="grid grid-cols-2   font-['Times_New_Roman'] border-b-[1px] border-black">
                    <p className="text-[6px] flex  mx-auto">
                      HOUSE/BLOCK/LOT NO.
                    </p>
                    <p className="text-[6px] flex  mx-auto">STREET</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[10px] font-['Times_New_Roman'] bg-[#D3D3D3] border-b-[1px] border-black">
                  <p>10. &nbsp; GSIS ID NO.</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-b-[1px] border-r-[1px] border-l-[1px] border-black">
                  <p>{''}</p>
                </td>
                <td className=" bg-[#D3D3D3] border-black border-r-[1px]"></td>
                <td colSpan={6}>
                  <div className="grid grid-cols-2   font-['Times_New_Roman'] border-b-[1px] border-black">
                    <p className="text-[6px] flex  mx-auto">{''}</p>
                    <p className="text-[6px] flex  mx-auto">{''}</p>
                  </div>
                  <div className="grid grid-cols-2   font-['Times_New_Roman']">
                    <p className="text-[6px] flex  mx-auto">
                      SUBDIVISION/VILLAGE.
                    </p>
                    <p className="text-[6px] flex  mx-auto">BARANGAY</p>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black">
                <td className="text-[10px] font-['Times_New_Roman'] bg-[#D3D3D3] ">
                  <p>11. &nbsp; PAGIBIG NO.</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-black border-l-[1px] border-r-[1px]">
                  <p>{''}</p>
                </td>
                <td className=" bg-[#D3D3D3] border-black border-r-[1px]"></td>
                <td colSpan={6}>
                  <div className="grid grid-cols-2   font-['Times_New_Roman'] ">
                    <p className="text-[6px] flex  mx-auto">{''}</p>
                    <p className="text-[6px] flex  mx-auto">{''}</p>
                  </div>
                  <div className="grid grid-cols-2   font-['Times_New_Roman'] ">
                    <p className="text-[6px] flex  mx-auto">
                      CITY/MUNCIPALITY.
                    </p>
                    <p className="text-[6px] flex  mx-auto">PROVINCE</p>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black">
                <td className="text-[10px] font-['Times_New_Roman'] bg-[#D3D3D3] ">
                  <p>12. &nbsp; PHILHEALTH NO.</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px]  border-black border-r-[1px]">
                  <p>{''}</p>
                </td>
                <td className="bg-[#D3D3D3] border-black border-l-[1px] border-r-[1px]">
                  <p className="text-[10px] text-center font-['Times_New_Roman'] ">
                    ZIP CODE
                  </p>
                </td>
                <td colSpan={6}>
                  <p className="text-[10px] text-center font-['Times_New_Roman']  border-black ">
                    {''}
                  </p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman'] bg-[#D3D3D3] ">
                  <p>13. &nbsp; SSS NO.</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px]  border-black border-r-[1px]">
                  <p>{''}</p>
                </td>
                <td className=" bg-[#D3D3D3] border-black border-l-[1px] border-r-[1px]">
                  <p className="text-[10px]  font-['Times_New_Roman'] ">
                    19. &nbsp; TELEPHONE
                  </p>
                </td>
                <td colSpan={6}>
                  <p className="text-center text-[10px]">{''}</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman'] bg-[#D3D3D3] ">
                  <p>14. &nbsp; TIN NO.</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px]  border-black border-r-[1px]">
                  <p>{''}</p>
                </td>
                <td className=" bg-[#D3D3D3] border-black  border-r-[1px]">
                  <p className="text-[10px]  font-['Times_New_Roman'] ">
                    20. &nbsp; MOBILE NO.
                  </p>
                </td>
                <td colSpan={6}>
                  <p className="text-center text-[10px]">{''}</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman'] bg-[#D3D3D3] ">
                  <p>15. &nbsp; AGENCY EMPLOYEE NO.</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px]  border-black border-r-[1px]">
                  <p>{''}</p>
                </td>
                <td className=" bg-[#D3D3D3] border-black border-r-[1px]">
                  <p className="text-[10px]  font-['Times_New_Roman'] ">
                    21. &nbsp; EMAIL ADDRESS (IF ANY)
                  </p>
                </td>
                <td colSpan={6}>
                  <p className="text-center text-[10px]">{''}</p>
                </td>
              </tr>
              <tr className="line-height-[25px]">
                <td colSpan={9} className="bg-[#808080] text-white">
                  <p className="text-[14px] indent-5 font-['Times_New_Roman']">
                    II. FAMILY BACKGROUND
                  </p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman'] bg-[#D3D3D3] ">
                  <p>22. &nbsp; SPOUSES SURNAME.</p>
                </td>
                <td
                  className="text-[10px] font-['Times_New_Roman'] border-black border-l-[1px]"
                  colSpan={2}
                >
                  <p>{''}</p>
                </td>
                <td
                  colSpan={4}
                  className=" bg-[#D3D3D3]  border-r-[1px] border-l-[1px] border-black "
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] ">
                    23. &nbsp; NAME OF CHILDREN (WRITE FULLNAME LIST)
                  </p>
                </td>
                <td colSpan={2}>
                  <p className="text-center text-[8px]">DATE OF BIRTH</p>
                </td>
              </tr>
              <tr className=" font-['Times_New_Roman']">
                <td className="text-[10px] text-center font-['Times_New_Roman'] bg-[#D3D3D3] ">
                  <p>FIRSTNAME</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-b-[1px] border-black  border-l-[1px]">
                  <p>{''}</p>
                </td>
                <td className="text-[8px] font-['Times_New_Roman'] bg-[#D3D3D3] border-r-[1px] border-l-[1px] border-b-[1px] border-black">
                  <p>NAME EXTENSION (JR, SR)</p>
                </td>
                <td
                  colSpan={4}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] pl-4 ">
                    {''}
                  </p>
                </td>
                <td colSpan={2} className="border-b-[1px] border-black">
                  <p className="text-center text-[10px]">{''}</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman'] text-center bg-[#D3D3D3] ">
                  <p>MIDDLE NAME</p>
                </td>
                <td
                  className="text-[10px] font-['Times_New_Roman'] border-black  border-l-[1px]"
                  colSpan={2}
                >
                  <p>{''}</p>
                </td>
                <td
                  colSpan={4}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] ml-4">
                    {''}
                  </p>
                </td>
                <td colSpan={2} className="border-b-[1px] border-black">
                  <p className="text-center text-[8px]">{''}</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman'] text-center bg-[#D3D3D3] ">
                  <p>OCCUPATION</p>
                </td>
                <td
                  className="text-[10px] font-['Times_New_Roman'] border-black  border-l-[1px]"
                  colSpan={2}
                >
                  <p>{''}</p>
                </td>
                <td
                  colSpan={4}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] ml-4"></p>
                </td>
                <td colSpan={2} className="border-b-[1px] border-black">
                  <p className="text-center text-[8px]"></p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[6px] font-['Times_New_Roman'] text-center bg-[#D3D3D3] ">
                  <p>EMPLOYER/BUSINESS NAME</p>
                </td>
                <td
                  className="text-[10px] font-['Times_New_Roman'] border-black  border-l-[1px]"
                  colSpan={2}
                >
                  <p>{''}</p>
                </td>
                <td
                  colSpan={4}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] ml-4"></p>
                </td>
                <td colSpan={2} className="border-b-[1px] border-black">
                  <p className="text-center text-[8px]"></p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman'] text-center bg-[#D3D3D3] ">
                  <p>BUSINESS ADDRESS</p>
                </td>
                <td
                  className="text-[10px] font-['Times_New_Roman'] border-black  border-l-[1px]"
                  colSpan={2}
                >
                  <p>{''}</p>
                </td>
                <td
                  colSpan={4}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] ml-4"></p>
                </td>
                <td colSpan={2} className="border-b-[1px] border-black">
                  <p className="text-center text-[8px]"></p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman'] text-center bg-[#D3D3D3] ">
                  <p>TELEPHONE</p>
                </td>
                <td
                  className="text-[10px] font-['Times_New_Roman'] border-black  border-l-[1px]"
                  colSpan={2}
                >
                  <p>{''}</p>
                </td>
                <td
                  colSpan={4}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] ml-4"></p>
                </td>
                <td colSpan={2} className="border-b-[1px] border-black">
                  <p className="text-center text-[8px]"></p>
                </td>
              </tr>
              <tr className=" font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman'] bg-[#D3D3D3] ">
                  <p>24. &nbsp; FATHER'S SURNAME.</p>
                </td>
                <td
                  className="text-[10px] font-['Times_New_Roman'] border-r-[1px] border-b-[1px] border-black border-l-[1px]"
                  colSpan={2}
                >
                  <p>{''}</p>
                </td>
                <td
                  colSpan={4}
                  className="   border-r-[1px] border-l-[1px] border-black border-b-[1px]"
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] ">{''}</p>
                </td>
                <td colSpan={2} className="border-b-[1px] border-black">
                  <p className="text-center text-[8px]"></p>
                </td>
              </tr>
              <tr className=" font-['Times_New_Roman']">
                <td className="text-[10px] text-center font-['Times_New_Roman'] bg-[#D3D3D3] ">
                  <p>FIRSTNAME</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-b-[1px] border-black border-l-[1px]">
                  <p>{''}</p>
                </td>
                <td className="text-[8px] font-['Times_New_Roman'] bg-[#D3D3D3] border-r-[1px] border-l-[1px] border-b-[1px] border-black">
                  <p>NAME EXTENSION (JR, SR)</p>
                </td>
                <td
                  colSpan={4}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] pl-4 ">
                    {''}
                  </p>
                </td>
                <td colSpan={2} className="border-b-[1px] border-black">
                  <p className="text-center text-[10px]">{''}</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman'] text-center bg-[#D3D3D3] ">
                  <p>MIDDLE NAME</p>
                </td>
                <td
                  className="text-[10px] font-['Times_New_Roman'] border-black border-l-[1px]"
                  colSpan={2}
                >
                  <p>{''}</p>
                </td>
                <td
                  colSpan={4}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] ml-4">
                    {''}
                  </p>
                </td>
                <td colSpan={2} className="border-b-[1px] border-black">
                  <p className="text-center text-[8px]">{''}</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman']  bg-[#D3D3D3] ">
                  <p>25. &nbsp;MOTHER'S MAIDEN NAME</p>
                </td>
                <td
                  className="text-[10px] font-['Times_New_Roman'] border-black  border-l-[1px]"
                  colSpan={2}
                >
                  <p>{''}</p>
                </td>
                <td
                  colSpan={4}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] ml-4"></p>
                </td>
                <td colSpan={2} className="border-b-[1px] border-black">
                  <p className="text-center text-[8px]"></p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman'] text-center bg-[#D3D3D3] ">
                  <p>FIRST NAME</p>
                </td>
                <td
                  className="text-[10px] font-['Times_New_Roman'] border-black  border-l-[1px]"
                  colSpan={2}
                >
                  <p>{''}</p>
                </td>
                <td
                  colSpan={4}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] ml-4"></p>
                </td>
                <td colSpan={2} className="border-b-[1px] border-black">
                  <p className="text-center text-[8px]"></p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman']">
                <td className="text-[10px] font-['Times_New_Roman'] text-center bg-[#D3D3D3] ">
                  <p>MIDDLE NAME</p>
                </td>
                <td
                  className="text-[10px] font-['Times_New_Roman'] border-black border-l-[1px]"
                  colSpan={2}
                >
                  <p>{''}</p>
                </td>
                <td
                  colSpan={6}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black bg-[#D3D3D3]"
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] text-center ">
                    (CONTINUE IN SEPARATE SHEET IF NECESSARY)
                  </p>
                </td>
              </tr>
              <tr className="line-height-[25px] ">
                <td colSpan={9} className="bg-[#808080] text-white">
                  <p className="text-[14px] indent-5 font-['Times_New_Roman']">
                    II. EDUCATIONAL BACKGROUND
                  </p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] bg-[#D3D3D3]">
                <td className="text-[10px] font-['Times_New_Roman'] text-center  bg-[#D3D3D3] ">
                  <p>LEVEL</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px] border-black">
                  <p className="text-center">NAME OF SCHOOL</p>
                  <p className="text-center">(WRITE IN FULL)</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px] border-black">
                  <p className="text-center">BASIC EDUCATION/DEGREE/COURSE</p>
                  <p className="text-center">(WRITE IN FULL)</p>
                </td>
                <td
                  colSpan={3}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p className="text-[8px]  font-['Times_New_Roman'] text-center border-b-[1px] border-black">
                    PERIOD ATTENDANCE
                  </p>
                  <div className="grid grid-cols-2">
                    <td className="text-[8px] font-['Times_New_Roman']  text-center  border-black">
                      <p>FROM</p>
                    </td>
                    <td className="text-[8px] font-['Times_New_Roman']  text-center border-l-[1px] border-black">
                      <p>TO</p>
                    </td>
                  </div>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">
                    HIGHEST LEVEL/ UNITS EARNED
                  </p>
                  <p className="text-center text-[6px]">(IF GRADUATED)</p>
                </td>
                <td
                  colSpan={1}
                  className="border-b-[1px] border-l-[1px] border-black"
                >
                  <p className="text-center text-[6px]">YEAR GRADUATED</p>
                </td>
                <td
                  colSpan={1}
                  className="border-b-[1px] border-l-[1px] border-black"
                >
                  <p className="text-center text-[6px]">
                    SCHOLARSHIP/ACADEMIC HONORS RECIEVED
                  </p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] ">
                <td className="text-[10px] font-['Times_New_Roman'] text-center  bg-[#D3D3D3] ">
                  <p>ELEMENTARY</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px] border-black">
                  <p className="text-center">{''}</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px] border-black">
                  <p className="text-center">PRIMARY</p>
                </td>
                <td
                  colSpan={3}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <div className="grid grid-cols-2">
                    <td className="text-[8px] font-['Times_New_Roman']  text-center  border-black">
                      <p>{''}</p>
                    </td>
                    <td className="text-[8px] font-['Times_New_Roman']  text-center border-l-[1px] border-black">
                      <p>{''}</p>
                    </td>
                  </div>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={1}
                  className="border-b-[1px] border-l-[1px] border-black"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={1}
                  className="border-b-[1px] border-l-[1px] border-black"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] ">
                <td className="text-[10px] font-['Times_New_Roman'] text-center  bg-[#D3D3D3] ">
                  <p>SECONDARY</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px] border-black">
                  <p className="text-center">{''}</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px] border-black">
                  <p className="text-center">SECONDARY</p>
                </td>
                <td
                  colSpan={3}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <div className="grid grid-cols-2">
                    <td className="text-[8px] font-['Times_New_Roman']  text-center  border-black">
                      <p>{''}</p>
                    </td>
                    <td className="text-[8px] font-['Times_New_Roman']  text-center border-l-[1px] border-black">
                      <p>{''}</p>
                    </td>
                  </div>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={1}
                  className="border-b-[1px] border-l-[1px] border-black"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={1}
                  className="border-b-[1px] border-l-[1px] border-black"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] ">
                <td className="text-[10px] font-['Times_New_Roman'] text-center  bg-[#D3D3D3] ">
                  <p>VOCATIONAL</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px] border-black">
                  <p className="text-center">{''}</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px] border-black">
                  <p className="text-center">{''}</p>
                </td>
                <td
                  colSpan={3}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <div className="grid grid-cols-2">
                    <td className="text-[8px] font-['Times_New_Roman']  text-center  border-black">
                      <p>{''}</p>
                    </td>
                    <td className="text-[8px] font-['Times_New_Roman']  text-center border-l-[1px] border-black">
                      <p>{''}</p>
                    </td>
                  </div>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={1}
                  className="border-b-[1px] border-l-[1px] border-black"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={1}
                  className="border-b-[1px] border-l-[1px] border-black"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] ">
                <td className="text-[10px] font-['Times_New_Roman'] text-center  bg-[#D3D3D3] ">
                  <p>COLLEGE</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px] border-black">
                  <p className="text-center">{''}</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px] border-black">
                  <p className="text-center">COLLEGE</p>
                </td>
                <td
                  colSpan={3}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <div className="grid grid-cols-2">
                    <td className="text-[8px] font-['Times_New_Roman']  text-center  border-black">
                      <p>{''}</p>
                    </td>
                    <td className="text-[8px] font-['Times_New_Roman']  text-center border-l-[1px] border-black">
                      <p>{''}</p>
                    </td>
                  </div>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={1}
                  className="border-b-[1px] border-l-[1px] border-black"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={1}
                  className="border-b-[1px] border-l-[1px] border-black"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] ">
                <td className="text-[10px] font-['Times_New_Roman'] text-center  bg-[#D3D3D3] ">
                  <p>GRADUATE STUDIES</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px] border-black">
                  <p className="text-center">{''}</p>
                </td>
                <td className="text-[10px] font-['Times_New_Roman'] border-l-[1px] border-black">
                  <p className="text-center">GRADUATE STUDIES</p>
                </td>
                <td
                  colSpan={3}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <div className="grid grid-cols-2">
                    <td className="text-[8px] font-['Times_New_Roman']  text-center  border-black">
                      <p>{''}</p>
                    </td>
                    <td className="text-[8px] font-['Times_New_Roman']  text-center border-l-[1px] border-black">
                      <p>{''}</p>
                    </td>
                  </div>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={1}
                  className="border-b-[1px] border-l-[1px] border-black"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={1}
                  className="border-b-[1px] border-l-[1px] border-black"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black ">
                <td colSpan={9} className="bg-[#D3D3D3] text-center text-black">
                  <p className="text-[8px]  font-['Times_New_Roman']">
                    (CONTINUE IN SEPARATE SHEET IF NECESSARY)
                  </p>
                </td>
              </tr>

              <tr className=" font-['Times_New_Roman']">
                <td className="text-[10px] text-center font-['Times_New_Roman'] bg-[#D3D3D3] ">
                  <p>SIGNATURE</p>
                </td>
                <td
                  colSpan={2}
                  className="text-[10px] font-['Times_New_Roman'] border-b-[1px] border-l-[1px] border-black"
                >
                  <p></p>
                </td>

                <td
                  colSpan={2}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] text-center border-black bg-[#D3D3D3]"
                >
                  <p className="text-[8px]  font-['Times_New_Roman']  ">DATE</p>
                </td>
                <td colSpan={4} className="border-b-[1px] border-black ">
                  <p className="text-center text-[10px]"></p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex">
            <div className="w-1/2">
              <div className="flex flex-col items-center justify-start gap-4">
                <svg
                  id="barcode"
                  width="519px"
                  height="31.338px"
                  x="0px"
                  y="0px"
                  viewBox="0 0 519 31.338"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  style={{ transform: 'translate(0,0)' }}
                >
                  <rect x="0" y="0" style={{ fill: 'transparent' }}></rect>
                  <g transform="translate(10, 10)" style={{ fill: 'black' }}>
                    <rect x="0" y="0" width="3.6" height="11.338"></rect>
                    <rect x="5.4" y="0" width="1.8" height="11.338"></rect>
                    <rect x="10.8" y="0" width="5.4" height="11.338"></rect>
                    <rect x="19.8" y="0" width="1.8" height="11.338"></rect>
                    <rect x="23.4" y="0" width="1.8" height="11.338"></rect>
                    <rect x="28.8" y="0" width="3.6" height="11.338"></rect>
                    <rect x="39.6" y="0" width="1.8" height="11.338"></rect>
                    <rect x="43.2" y="0" width="7.2" height="11.338"></rect>
                    <rect x="52.2" y="0" width="5.4" height="11.338"></rect>
                    <rect x="59.4" y="0" width="1.8" height="11.338"></rect>
                    <rect x="64.8" y="0" width="1.8" height="11.338"></rect>
                    <rect x="73.8" y="0" width="3.6" height="11.338"></rect>
                    <rect x="79.2" y="0" width="3.6" height="11.338"></rect>
                    <rect x="86.4" y="0" width="5.4" height="11.338"></rect>
                    <rect x="93.6" y="0" width="1.8" height="11.338"></rect>
                    <rect x="99" y="0" width="1.8" height="11.338"></rect>
                    <rect x="104.4" y="0" width="5.4" height="11.338"></rect>
                    <rect x="113.4" y="0" width="3.6" height="11.338"></rect>
                    <rect x="118.8" y="0" width="1.8" height="11.338"></rect>
                    <rect x="122.4" y="0" width="3.6" height="11.338"></rect>
                    <rect x="133.2" y="0" width="1.8" height="11.338"></rect>
                    <rect x="138.6" y="0" width="3.6" height="11.338"></rect>
                    <rect x="144" y="0" width="5.4" height="11.338"></rect>
                    <rect x="153" y="0" width="1.8" height="11.338"></rect>
                    <rect x="158.4" y="0" width="1.8" height="11.338"></rect>
                    <rect x="163.8" y="0" width="1.8" height="11.338"></rect>
                    <rect x="167.4" y="0" width="3.6" height="11.338"></rect>
                    <rect x="178.2" y="0" width="1.8" height="11.338"></rect>
                    <rect x="181.8" y="0" width="3.6" height="11.338"></rect>
                    <rect x="192.6" y="0" width="1.8" height="11.338"></rect>
                    <rect x="198" y="0" width="3.6" height="11.338"></rect>
                    <rect x="203.4" y="0" width="5.4" height="11.338"></rect>
                    <rect x="212.4" y="0" width="1.8" height="11.338"></rect>
                    <rect x="217.8" y="0" width="3.6" height="11.338"></rect>
                    <rect x="225" y="0" width="1.8" height="11.338"></rect>
                    <rect x="228.6" y="0" width="5.4" height="11.338"></rect>
                    <rect x="237.6" y="0" width="1.8" height="11.338"></rect>
                    <rect x="246.6" y="0" width="1.8" height="11.338"></rect>
                    <rect x="252" y="0" width="3.6" height="11.338"></rect>
                    <rect x="257.4" y="0" width="1.8" height="11.338"></rect>
                    <rect x="262.8" y="0" width="5.4" height="11.338"></rect>
                    <rect x="270" y="0" width="3.6" height="11.338"></rect>
                    <rect x="277.2" y="0" width="1.8" height="11.338"></rect>
                    <rect x="280.8" y="0" width="5.4" height="11.338"></rect>
                    <rect x="288" y="0" width="7.2" height="11.338"></rect>
                    <rect x="297" y="0" width="3.6" height="11.338"></rect>
                    <rect x="302.4" y="0" width="3.6" height="11.338"></rect>
                    <rect x="309.6" y="0" width="3.6" height="11.338"></rect>
                    <rect x="316.8" y="0" width="3.6" height="11.338"></rect>
                    <rect x="322.2" y="0" width="3.6" height="11.338"></rect>
                    <rect x="329.4" y="0" width="3.6" height="11.338"></rect>
                    <rect x="336.6" y="0" width="3.6" height="11.338"></rect>
                    <rect x="345.6" y="0" width="1.8" height="11.338"></rect>
                    <rect x="349.2" y="0" width="1.8" height="11.338"></rect>
                    <rect x="356.4" y="0" width="3.6" height="11.338"></rect>
                    <rect x="363.6" y="0" width="3.6" height="11.338"></rect>
                    <rect x="370.8" y="0" width="3.6" height="11.338"></rect>
                    <rect x="376.2" y="0" width="1.8" height="11.338"></rect>
                    <rect x="379.8" y="0" width="7.2" height="11.338"></rect>
                    <rect x="388.8" y="0" width="5.4" height="11.338"></rect>
                    <rect x="396" y="0" width="1.8" height="11.338"></rect>
                    <rect x="405" y="0" width="1.8" height="11.338"></rect>
                    <rect x="410.4" y="0" width="3.6" height="11.338"></rect>
                    <rect x="415.8" y="0" width="5.4" height="11.338"></rect>
                    <rect x="423" y="0" width="3.6" height="11.338"></rect>
                    <rect x="428.4" y="0" width="5.4" height="11.338"></rect>
                    <rect x="435.6" y="0" width="1.8" height="11.338"></rect>
                    <rect x="444.6" y="0" width="1.8" height="11.338"></rect>
                    <rect x="450" y="0" width="3.6" height="11.338"></rect>
                    <rect x="455.4" y="0" width="1.8" height="11.338"></rect>
                    <rect x="460.8" y="0" width="3.6" height="11.338"></rect>
                    <rect x="466.2" y="0" width="5.4" height="11.338"></rect>
                    <rect x="475.2" y="0" width="3.6" height="11.338"></rect>
                    <rect x="484.2" y="0" width="5.4" height="11.338"></rect>
                    <rect x="491.4" y="0" width="1.8" height="11.338"></rect>
                    <rect x="495" y="0" width="3.6" height="11.338"></rect>
                  </g>
                </svg>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <p className="text-right italic text-[8px]">
                CS FORM 212 (Revised 2017), Page 1 of 4
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
