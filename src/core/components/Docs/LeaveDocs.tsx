export const LeaveDocs = () => {
  return (
    <>
      <div className="w-[8.5in] h-[13in]  border mx-auto border-gray-700 bg-white  positive">
        <form>
          <div className=" flex pl-2 pr-2 ">
            <div className="text-[7px] p-2">
              <p>Civil Service Form No.6</p>
              <p>Revised 2020</p>
            </div>
          </div>
          <div className="grid grid-cols-3 text-xs text-black-500 w-full">
            <div className="flex justify-start p-2">
              <img
                className="w-16 h-16  rounded-full  float-right "
                src="./Images/denr.png"
                alt="Bordered avatar"
              />
            </div>
            <div className="flex justify-center flex-col items-center p-2 font-bold">
              <p>Republic of the Philippines</p>
              <p>DENR</p>
              <p>CENRO BISLIG</p>
            </div>
            <div className="flex justify-end ">
              <div className="flex justify-center items-center">
                <p>Stamp for Date of Receipt</p>
              </div>
            </div>
          </div>
          <div className="w-full p-2 ">
            <div className="flex justify-center items-center">
              <h1 className="font-bold">APPLICATION FOR LEAVE</h1>
            </div>
          </div>
          {/**Section 2 */}
          <div>
            <div className="flex   pl-2 pr-2">
              <div className="w-full md:w-1/2 text-sm">
                <div className=" p-2 border border-black w-full">
                  <p className="">OFFICE/DEPARTMENT</p>
                  <div className="">
                    <p className="font-bold flex justify-center">
                      ICT Department
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-sm border border-black">
                <div className=" grid grid-cols-4  w-full">
                  <label className="pl-2">NAME:</label>
                  <label className="pl-2">(Last)</label>
                  <label className="pl-2">(First)</label>
                  <label className="pl-2">(Middle)</label>
                </div>
                <div className="w-full p-[5px]">
                  <p className="font-bold flex justify-center">
                    Bandoy Junex D.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex pl-2 pr-2">
              <div className="w-full md:w-1/2 text-sm">
                <div className=" p-2 border border-black h-full w-full">
                  <label className="">Date of Filling</label>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-sm border border-black">
                <div className=" p-2 border  w-full">
                  <div className="grid grid-cols-2  w-full">
                    <label className="">POSITION</label>
                    <label>SALARY</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**Section 3 */}
          <div>
            <div className="w-full ">
              <div className=" flex justify-center items-center border-b border-black pt-2 font-bold">
                <h1>DETAILS OF APPLICATION</h1>
              </div>
              <div className="flex flex-wrap border-b border-black">
                <div className="w-full md:w-1/2 text-sm  ">
                  <div className="">
                    <div className="p-2">
                      <label className="">TYPE OF LEAVE TO BE AVAILED</label>
                    </div>
                    <div className="p-2">
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">Vacation Leave</span>
                        <span className="text-[8px] pl-2">
                          (Sec. 51, Rule XVI, Omnibus Rules Implementing E.O.
                          No. 292)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Mandatory/Forced Leave
                        </span>
                        <span className="text-[8px] pl-2">
                          (Sec. 25, Rule XVI, Omnibus Rules Implementing E.O.
                          No. 292)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">Sick Leave</span>
                        <span className="text-[8px] pl-2">
                          (Sec. 43, Rule XVI, Omnibus Rules Implementing E.O.
                          No. 292)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Maternity Leave
                        </span>
                        <span className="text-[8px] pl-2">
                          (R.A. No. 11210 / IRR issued by CSC, DOLE and SSS)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Paternity Leave
                        </span>
                        <span className="text-[8px] pl-2">
                          (R.A. No. 8187 / CSC MC No. 71, s. 1998, as amended)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Special Privelage Leave
                        </span>
                        <span className="text-[8px] pl-2">
                          (Sec. 21, Rule XVI, Omnibus Rules Implementing E.O.
                          No. 292)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Solo Parent Leave
                        </span>
                        <span className="text-[8px] pl-2">
                          (RA No. 8972 / CSC MC No. 8, s. 2004)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">Study Leave</span>
                        <span className="text-[8px] pl-2">
                          (Sec. 68, Rule XVI, Omnibus Rules Implementing E.O.
                          No. 292)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          10-Day VAWC Leave
                        </span>
                        <span className="text-[8px] pl-2">
                          (RA No. 9262 / CSC MC No. 15, s. 2005)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Rehabilitation Privilege
                        </span>
                        <span className="text-[8px] pl-2">
                          (Sec. 55, Rule XVI, Omnibus Rules Implementing E.O.
                          No. 292)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Special Leave Benefits for Women
                        </span>
                        <span className="text-[8px] pl-2">
                          (RA No. 9710 / CSC MC No. 25, s. 2010)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Special Leave Benefits for Women
                        </span>
                        <span className="text-[8px] pl-2">
                          (RA No. 9710 / CSC MC No. 25, s. 2010)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Special Emergency (Calamity) Leave
                        </span>
                        <span className="text-[8px] pl-2">
                          (CSC MC No. 2, s. 2012, as amended)
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">Adoption Leave</span>
                        <span className="text-[8px] pl-2">(R.A. No. 8552)</span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">Others:</span>
                        <span className="text-[8px] pl-2">
                          ____________________________________________________________
                        </span>
                      </label>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 text-sm  ">
                  <div className="border-b ">
                    <div className="p-2">
                      <label className="">DETAILS OF LEAVE</label>
                    </div>
                    <div className="p-2">
                      <label>
                        <span className="text-[10px] pl-2">
                          In case of Vacation/Special Privilege Leave:
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Within the Philippines
                        </span>
                        <span className="text-[8px] pl-2">
                          ___________________________________________________________
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Abroad (Specify)
                        </span>
                        <span className="text-[8px] pl-2">
                          _______________________________________________________________
                        </span>
                      </label>
                      <br />
                      <label>
                        <span className="text-[10px] pl-2">
                          In case of Sick Leave:
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          In Hospital (Specify Illness)
                        </span>
                        <span className="text-[8px] pl-2">
                          ____________________________________________________________
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Out Patient (Specify Illness)
                        </span>
                        <span className="text-[8px] pl-2">
                          ___________________________________________________________
                        </span>
                      </label>
                      <br />
                      <label>
                        <span className="text-[10px] pl-2"></span>
                        <span className="text-[8px] pl-2">
                          _____________________________________________________________________________________________
                        </span>
                      </label>
                      <br />
                      <label>
                        <span className="text-[10px] pl-2">
                          In case of Special Leave Benefits for Women:
                        </span>
                      </label>
                      <br />
                      <label>
                        <span className="text-[10px] pl-2">
                          (Specify Illness)
                        </span>
                        <span className="text-[8px] pl-2">
                          ______________________________________________________________
                        </span>
                      </label>
                      <br />
                      <label>
                        <span className="text-[10px] pl-2">
                          In case of Study Leave:
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Completion of Masters Degree
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          BAR/Board Examination Review
                        </span>
                      </label>
                      <br />
                      <label>
                        <span className="text-[10px] pl-2">Other purpose:</span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2">
                          Monetization of Leave Credits
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 " />
                      <label>
                        <span className="text-[10px] pl-2 pb-4">
                          Terminal Leave
                        </span>
                      </label>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**Section3.1 */}
          <div className=" flex flex-wrap">
            <div className="w-full md:w-1/2 text-sm border border-black">
              <div className="p-2">
                <label className="">NUMBER OF WORKING DAYS APLLIED FOR</label>
              </div>
              <label>
                <span className="pl-2">
                  ___________________________________________
                </span>
              </label>
              <br />
              <label>
                <span className=" p-2">INCLUSIVE DATES</span>
              </label>
              <br />
              <label>
                <span className="pl-2">
                  ___________________________________________
                </span>
              </label>
            </div>
            <div className="w-full md:w-1/2 text-sm border border-black">
              <div className="p-2">
                <label className="">COMMUTATION</label>
              </div>
              <div className="p-2">
                <input type="checkbox" className="w-4 h-4 " />
                <label>
                  <span className="text-[10px] pl-2">Not Requested</span>
                </label>
                <br />
                <input type="checkbox" className="w-4 h-4 " />
                <label>
                  <span className="text-[10px] pl-2">Requested</span>
                </label>
                <br />
                <label>
                  <span className="text-[10px] pl-2 flex justify-center">
                    ___________________________________________________________
                  </span>
                  <span className="text-[10px] pl-2 flex justify-center">
                    (Signature of Applicant)
                  </span>
                </label>
              </div>
            </div>
          </div>
          {/**Section 4 */}
          <div>
            <div className=" flex justify-center items-center border-b border-black pt-2 font-bold">
              <h1>DETAILS OF ACTION ON APPLICATION</h1>
            </div>
            <div className=" flex flex-wrap">
              <div className="w-full md:w-1/2 text-sm border border-black">
                <div className="p-2">
                  <label className="">CERTIFICATION OF LEAVE CREDITS</label>
                </div>
                <div className="flex justify-center">
                  <label>
                    <span className="">As of</span>
                    <span className=" pl-2">_________________</span>
                  </label>
                  <br />
                </div>
                <div className="flex justify-center">
                  <table className="border border-black">
                    <thead className="border border-black">
                      <tr>
                        <th className="border border-black"></th>
                        <th className="border border-black">Vacation Leave</th>
                        <th className="border border-black">Sick Leave</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black">Total Earned</td>
                        <td className="border border-black"></td>
                        <td className="border border-black"></td>
                      </tr>
                      <tr>
                        <td className="border border-black">
                          Less This Application
                        </td>
                        <td className="border border-black"></td>
                        <td className="border border-black"></td>
                      </tr>
                      <tr>
                        <td className="border border-black">Balance</td>
                        <td className="border border-black"></td>
                        <td className="border border-black"></td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                </div>
                <div className="flex justify-center mt-4">
                  <label>
                    <span className=" pl-2">
                      ___________________________________________
                    </span>
                    <span className="flex justify-center">
                      (Authorized Officer)
                    </span>
                  </label>
                  <br />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-sm border border-black">
                <div className="p-2">
                  <label className="">RECOMMENDATION</label>
                </div>
                <div className="p-2">
                  <input type="checkbox" className="w-4 h-4 " />
                  <label>
                    <span className="text-[10px] pl-2">For apporval</span>
                  </label>
                  <br />
                  <input type="checkbox" className="w-4 h-4 " />
                  <label>
                    <span className="text-[10px] pl-2">
                      For disapproval due to
                    </span>
                    <span className="text-[8px] pl-2">
                      ___________________________________________________________
                      ___________________________________________________________________________________________________
                    </span>
                  </label>
                  <br />
                </div>
                <div className="flex justify-center mt-[2.8rem]">
                  <label>
                    <span className=" pl-2">
                      ___________________________________________
                    </span>
                    <span className="flex justify-center p">
                      (Authorized Officer)
                    </span>
                  </label>
                  <br />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-sm border border-black">
                <div className="p-2">
                  <label className="">APPROVED FOR</label>
                  <div className="pl-6">
                    <input
                      type="text"
                      className="w-12 h-2  border-l-0 border-r-0 border-t-0 border-b-black "
                    />
                    <label>
                      <span className="text-[10px] pl-2">days with pay</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      className="w-12 h-2  border-l-0 border-r-0 border-t-0 border-b-black "
                    />
                    <label>
                      <span className="text-[10px] pl-2">days without pay</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      className="w-12 h-2  border-l-0 border-r-0 border-t-0 border-b-black "
                    />
                    <label>
                      <span className="text-[10px] pl-2">
                        Others (espicify)
                      </span>
                    </label>
                    <br />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-sm border border-black">
                <div className="p-2">
                  <label className="">DISAPPROVED DUE TO</label>
                  <div className="pl-6">
                    <input
                      type="text"
                      className="w-full h-2  border-l-0 border-r-0 border-t-0 border-b-black "
                    />
                    <br />
                    <input
                      type="text"
                      className="w-full h-2  border-l-0 border-r-0 border-t-0 border-b-black "
                    />
                    <br />
                    <input
                      type="text"
                      className="w-full h-2  border-l-0 border-r-0 border-t-0 border-b-black "
                    />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <label>
              <span className=" pl-2">
                ___________________________________________
              </span>
              <span className="flex justify-center">(Authorized Officer)</span>
            </label>
            <br />
          </div>
        </form>
      </div>
    </>
  );
};
