/* eslint-disable react/no-unescaped-entities */

import { TableRow } from '@components/Tables/TableRow';

interface CLosePDS {
  onClick: () => void;
}

export const Page2: React.FC<CLosePDS> = ({ onClick }) => {
  const rows = Array.from({ length: 28 }, (_, i) => i + 1);
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
          <table className="w-[1024px] mx-auto  border-collapse border border-black overflow-hidden p-12">
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
              <tr className="line-height-[25px] border border-black">
                <td colSpan={9} className="bg-[#808080] text-white">
                  <p className="text-[10px]  font-['Times_New_Roman']">
                    IV. CIVIL SERVICE ELIGIBILITY
                  </p>
                </td>
              </tr>

              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] bg-[#D3D3D3]">
                {/* First column (larger) */}
                {/* <td
                  colSpan={3}
                  className="text-[8px] font-['Times_New_Roman'] text-center bg-[#D3D3D3] "
                >
                  <td colSpan={2} className="border-r-[1px] border-black">
                    <p>
                      27 .CAREER SERVICE/ RA 1080 (BOARD/ BAR) UNDER SPECIAL
                      LAWS/ CES/ CSEE BARANGAY ELIGIBILITY / DRIVER'S LICENSE
                    </p>
                  </td>
                  <td className="text-[8px] font-['Times_New_Roman'] text-center bg-[#D3D3D3] ">
                    <p className="text-center">RATING</p>
                    <p className="text-center">(IF AVAILABLE)</p>
                  </td>
                </td> */}
                <td
                  colSpan={2}
                  className="text-[8px] font-['Times_New_Roman'] text-center   border-r-[1px] border-black"
                >
                  <p>
                    27 .CAREER SERVICE/ RA 1080 (BOARD/ BAR) UNDER SPECIAL LAWS/
                    CES/ CSEE BARANGAY ELIGIBILITY / DRIVER'S LICENSE
                  </p>
                </td>

                <td className="text-[8px] font-['Times_New_Roman'] border-r-[1px] border-black">
                  <p className="text-center">RATING</p>
                  <p className="text-center">(IF AVAILABLE)</p>
                </td>
                <td className="text-[8px] font-['Times_New_Roman'] border-r-[1px] border-black">
                  <p className="text-center">DATE OF</p>
                  <p className="text-center">EXAMINATION/</p>
                  <p className="text-center">CONFERMENT</p>
                </td>

                <td colSpan={3} className="border-b-[1px] border-black">
                  <p className="text-center text-[8px]">
                    PLACE OF EXAMINATION / CONFERMENT
                  </p>
                </td>
                <td
                  colSpan={2}
                  className="border-r-[1px] border-l-[1px] border-b-[1px] border-black"
                >
                  <p className="text-[8px] font-['Times_New_Roman'] text-center border-b-[1px] border-black">
                    PERIOD ATTENDANCE
                  </p>
                  <div className="grid grid-cols-2">
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-black">
                      <p>FROM</p>
                    </div>
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-l-[1px] border-black">
                      <p>TO</p>
                    </div>
                  </div>
                </td>
              </tr>

              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] h-[20px]">
                <td
                  colSpan={2}
                  className="text-[10px] font-['Times_New_Roman'] text-center   "
                >
                  <p>ELEMENTARY</p>
                </td>

                <td
                  colSpan={1}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p>{''}</p>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={3}
                  className="border-b-[1px] border-l-[1px] border-black bg-green-200"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={2}
                  className="border-r-[1px] border-l-[1px] border-b-[1px] border-black"
                >
                  <div className="grid grid-cols-2">
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-black">
                      <p>{''}</p>
                    </div>
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-l-[1px] border-black">
                      <p>{''}</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] h-[20px]">
                <td
                  colSpan={2}
                  className="text-[10px] font-['Times_New_Roman'] text-center   "
                >
                  <p>SECONDARY</p>
                </td>

                <td
                  colSpan={1}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p>{''}</p>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={3}
                  className="border-b-[1px] border-l-[1px] border-black bg-green-200"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={2}
                  className="border-r-[1px] border-l-[1px] border-b-[1px] border-black"
                >
                  <div className="grid grid-cols-2">
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-black">
                      <p>{''}</p>
                    </div>
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-l-[1px] border-black">
                      <p>{''}</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] h-[20px]">
                <td
                  colSpan={2}
                  className="text-[10px] font-['Times_New_Roman'] text-center   "
                >
                  <p></p>
                </td>

                <td
                  colSpan={1}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p>{''}</p>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={3}
                  className="border-b-[1px] border-l-[1px] border-black bg-green-200"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={2}
                  className="border-r-[1px] border-l-[1px] border-b-[1px] border-black"
                >
                  <div className="grid grid-cols-2">
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-black">
                      <p>{''}</p>
                    </div>
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-l-[1px] border-black">
                      <p>{''}</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] h-[20px]">
                <td
                  colSpan={2}
                  className="text-[10px] font-['Times_New_Roman'] text-center   "
                >
                  <p></p>
                </td>

                <td
                  colSpan={1}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p>{''}</p>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={3}
                  className="border-b-[1px] border-l-[1px] border-black bg-green-200"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={2}
                  className="border-r-[1px] border-l-[1px] border-b-[1px] border-black"
                >
                  <div className="grid grid-cols-2">
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-black">
                      <p>{''}</p>
                    </div>
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-l-[1px] border-black">
                      <p>{''}</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] h-[20px]">
                <td
                  colSpan={2}
                  className="text-[10px] font-['Times_New_Roman'] text-center   "
                >
                  <p></p>
                </td>

                <td
                  colSpan={1}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p>{''}</p>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={3}
                  className="border-b-[1px] border-l-[1px] border-black bg-green-200"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={2}
                  className="border-r-[1px] border-l-[1px] border-b-[1px] border-black"
                >
                  <div className="grid grid-cols-2">
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-black">
                      <p>{''}</p>
                    </div>
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-l-[1px] border-black">
                      <p>{''}</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] h-[20px]">
                <td
                  colSpan={2}
                  className="text-[10px] font-['Times_New_Roman'] text-center   "
                >
                  <p></p>
                </td>

                <td
                  colSpan={1}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p>{''}</p>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={3}
                  className="border-b-[1px] border-l-[1px] border-black bg-green-200"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={2}
                  className="border-r-[1px] border-l-[1px] border-b-[1px] border-black"
                >
                  <div className="grid grid-cols-2">
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-black">
                      <p>{''}</p>
                    </div>
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-l-[1px] border-black">
                      <p>{''}</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black font-['Times_New_Roman'] h-[20px]">
                <td
                  colSpan={2}
                  className="text-[10px] font-['Times_New_Roman'] text-center   "
                >
                  <p></p>
                </td>

                <td
                  colSpan={1}
                  className=" border-r-[1px] border-l-[1px] border-b-[1px] border-black "
                >
                  <p>{''}</p>
                </td>
                <td colSpan={1} className="border-b-[1px] border-black">
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={3}
                  className="border-b-[1px] border-l-[1px] border-black bg-green-200"
                >
                  <p className="text-center text-[6px]">{''}</p>
                </td>
                <td
                  colSpan={2}
                  className="border-r-[1px] border-l-[1px] border-b-[1px] border-black"
                >
                  <div className="grid grid-cols-2">
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-black">
                      <p>{''}</p>
                    </div>
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-l-[1px] border-black">
                      <p>{''}</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="line-height-[25px] ">
                <td colSpan={9} className="bg-[#D3D3D3] text-black">
                  <p className="text-[8px] text-center  font-['Times_New_Roman']">
                    (CONTINUE IN SEPARATE SHEET IF NECESSARY)
                  </p>
                </td>
              </tr>
              <tr className="line-height-[25px] ">
                <td colSpan={9} className="bg-[#808080] text-white">
                  <p className="text-[10px]   font-['Times_New_Roman']">
                    V. WORK EXPERIENCED
                  </p>
                </td>
              </tr>
              <tr className="line-height-[25px] ">
                <td colSpan={9} className="bg-[#808080] text-white">
                  <p className="text-[8px]   font-['Times_New_Roman']">
                    (INCLUDE PRIVATE EMPLOYMENT STARTS FROM YOUR RECENT WORK)
                    DESCRIPTION OF DUTIES SHOULD BE INDICATED IN THE ATTACHED
                    WORK EXPEREINCE SHEET.
                  </p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-black">
                <td
                  colSpan={1}
                  className="bg-[#D3D3D3] text-black border-l-[1px] border-black "
                >
                  <p className="text-[8px]   font-['Times_New_Roman'] border-b-[1px] border-black">
                    28. &nbsp; INCLUSIVE DATE (MM/DD/YY)
                  </p>
                  <div className="grid grid-cols-2">
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-black">
                      <p>FROM</p>
                    </div>
                    <div className="text-[8px] font-['Times_New_Roman'] text-center border-l-[1px] border-black">
                      <p>TO</p>
                    </div>
                  </div>
                </td>
                <td
                  colSpan={2}
                  className="bg-[#D3D3D3] text-black border-l-[1px] border-black"
                >
                  <p className="text-[8px] text-center  font-['Times_New_Roman'] ">
                    POSITION TITLE
                  </p>
                  <p className="text-[8px] text-center  font-['Times_New_Roman'] ">
                    (WRITE IN FULL/DO NOT ABBREVIATE)
                  </p>
                </td>
                <td
                  colSpan={2}
                  className="bg-[#D3D3D3] text-black border-l-[1px] border-black"
                >
                  <p className="text-[8px] text-center  font-['Times_New_Roman']">
                    <span>DEPARTMENT / AGENCY / OFFICE /</span>
                    <br />
                    <span>COMPANY</span> <br />
                    <span>(WRITE IN FULL DO NOT</span>
                    <br />
                    <span>ABBREVIATE)</span>
                  </p>
                </td>
                <td
                  colSpan={1}
                  className="bg-[#D3D3D3] text-black border-l-[1px] border-black"
                >
                  <p className="text-[8px] text-center  font-['Times_New_Roman']">
                    MONTHLY SALARY
                  </p>
                </td>
                <td
                  colSpan={1}
                  className="bg-[#D3D3D3] text-black border-l-[1px] border-black"
                >
                  <p className="text-[6px] text-center  font-['Times_New_Roman'] font-light">
                    <span>SALARY / JOB / PAY / </span>
                    <br />
                    <span>
                      GRADE IF APPLICABLE &amp; STEP (Format "00-0")/INCREMENT
                    </span>
                  </p>
                </td>
                <td
                  colSpan={1}
                  className="bg-[#D3D3D3] text-black border-l-[1px] border-black"
                >
                  <p className="text-[8px] text-center font-light font-['Times_New_Roman']">
                    STATUS OF APPOINTMENT
                  </p>
                </td>
                <td
                  colSpan={1}
                  className="bg-[#D3D3D3] text-black border-l-[1px] border-black"
                >
                  <p className="text-[8px] text-center  font-['Times_New_Roman']">
                    <span>GOV'T SERVICE</span>
                    <br />
                    <span>(Y/N)</span>
                  </p>
                </td>
              </tr>
              {rows.map((row) => {
                return <TableRow key={row} />;
              })}

              <tr className="line-height-[25px] border border-black">
                <td colSpan={9} className="bg-[#D3D3D3] text-red-500">
                  <p className="text-[8px] text-center  font-['Times_New_Roman']">
                    (CONTINUE IN SEPARATE SHEET IF NECESSARY)
                  </p>
                </td>
              </tr>

              <tr className=" font-['Times_New_Roman'] h-[30px]">
                <td className="text-[10px] text-center font-['Times_New_Roman'] bg-[#D3D3D3] border-l-[1px] border-black">
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
                CS FORM 212 (Revised 2017), Page 2 of 4
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
