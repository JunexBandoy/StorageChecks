import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface IProps {
  onClosePDF: () => void;
}

const ExportToPdf: React.FC<IProps> = ({ onClosePDF }) => {
  // const handleExport = async () => {
  //   // Get the element to export
  //   const element = document.getElementById('content-to-export') as HTMLElement;

  //   // Check if the element exists
  //   if (!element) {
  //     console.error('Element to export not found!');
  //     return;
  //   }

  //   try {
  //     // Use html2canvas to capture the element as a canvas
  //     const canvas = await html2canvas(element, { scale: 4 });

  //     // Convert the canvas to an image
  //     const imgData = canvas.toDataURL('image/jpeg', 0.98);

  //     // Create a new jsPDF instance
  //     const pdf = new jsPDF({
  //       orientation: 'portrait',
  //       unit: 'in',
  //       format: 'legal',
  //     });

  //     // Calculate the width and height for the image in the PDF
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  //     // Add the image to the PDF
  //     pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

  //     // Save the PDF
  //     pdf.save('exported-file.pdf');
  //     console.log('PDF export successful');
  //   } catch (error) {
  //     console.error('PDF export failed', error);
  //   }
  // };

  const handleExport = async () => {
    // Get the element to export
    const element = document.getElementById('content-to-export') as HTMLElement;

    // Check if the element exists
    if (!element) {
      console.error('Element to export not found!');
      return;
    }

    try {
      // Use html2canvas to capture the element as a canvas
      const canvas = await html2canvas(element, { scale: 4 });

      // Convert the canvas to an image
      const imgData = canvas.toDataURL('image/jpeg', 0.98);

      // Create a new jsPDF instance
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: 'legal',
      });

      // Calculate the width and height for the image in the PDF
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Add the image to the PDF
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

      // Open the PDF in the browser's print dialog
      pdf.output('dataurlnewwindow');
      console.log('PDF export successful');
    } catch (error) {
      console.error('PDF export failed', error);
    }
  };
  return (
    <div className="container mx-auto  overflow-hidden m-2">
      <div className="w-full">
        <div className="text-right">
          <span
            className="text-red-500 cursor-pointer text-2xl font-bold p-4 "
            onClick={() => {
              onClosePDF();
            }}
          >
            X
          </span>
        </div>
      </div>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold text-blue-600">
          Export Content to PDF
        </h1>
      </div>

      <div
        id="content-to-export"
        className="w-[8.5in] h-[13in] relative  border mx-auto  border-black bg-white  positive"
      >
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
          </div>
          <div className="w-full p-2 ">
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-[16px]">APPLICATION FOR LEAVE</h1>
            </div>
          </div>
          {/**Section 2 */}
          <div>
            <div className="flex">
              <div className="w-full md:w-1/2 ">
                <div className="  border border-black w-full">
                  <p className="text-[12px] ml-[5px]">OFFICE/DEPARTMENT</p>
                  <div className="pb-2">
                    <p className="font-bold flex justify-center text-[12px]">
                      ICT Department
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 border border-black">
                <div className=" grid grid-cols-4  w-full">
                  <label className="pl-2 text-[12px]">NAME:</label>
                  <label className="pl-2 text-[12px]">(Last)</label>
                  <label className="pl-2 text-[12px]">(First)</label>
                  <label className="pl-2 text-[12px]">(Middle)</label>
                </div>
                <div className=" ">
                  <p className="font-bold flex justify-center text-[12px]">
                    Bandoy Junex D.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-full md:w-1/2 text-sm">
                <div className=" pb-2 border border-black h-full w-full">
                  <label className="text-[12px] ml-[5px]">
                    Date of Filling
                  </label>
                </div>
              </div>
              <div className="w-full md:w-1/2  border border-black">
                <div className="  border  w-full">
                  <div className="grid grid-cols-2  w-full">
                    <label className=" text-[12px]">POSITION</label>
                    <label className=" text-[12px]">SALARY</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**Section 3 */}
          <div>
            <div className="w-full ">
              <div className=" flex justify-center items-center border-b  p-2 border-black  font-bold">
                <p className="text-[14px]">DETAILS OF APPLICATION</p>
              </div>
              <div className="flex flex-wrap border-b border-black">
                <div className="w-full md:w-1/2 text-sm  ">
                  <div className="pl-2">
                    <label className="text-[12px]">
                      TYPE OF LEAVE TO BE AVAILED
                    </label>
                  </div>
                  <div className="p-2">
                    <div className="flex items-center">
                      <input type="checkbox" className="w-4 h-4 mt-2" />
                      <p>
                        <span className="text-[10px] pl-2">Vacation Leave</span>
                        <span className="text-[8px] pl-2">
                          (Sec. 51, Rule XVI, Omnibus Rules Implementing E.O.
                          No. 292)
                        </span>
                      </p>
                    </div>
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">
                        Mandatory/Forced Leave
                      </span>
                      <span className="text-[8px] pl-2">
                        (Sec. 25, Rule XVI, Omnibus Rules Implementing E.O. No.
                        292)
                      </span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">Sick Leave</span>
                      <span className="text-[8px] pl-2">
                        (Sec. 43, Rule XVI, Omnibus Rules Implementing E.O. No.
                        292)
                      </span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">Maternity Leave</span>
                      <span className="text-[8px] pl-2">
                        (R.A. No. 11210 / IRR issued by CSC, DOLE and SSS)
                      </span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">Paternity Leave</span>
                      <span className="text-[8px] pl-2">
                        (R.A. No. 8187 / CSC MC No. 71, s. 1998, as amended)
                      </span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">
                        Special Privelage Leave
                      </span>
                      <span className="text-[8px] pl-2">
                        (Sec. 21, Rule XVI, Omnibus Rules Implementing E.O. No.
                        292)
                      </span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">
                        Solo Parent Leave
                      </span>
                      <span className="text-[8px] pl-2">
                        (RA No. 8972 / CSC MC No. 8, s. 2004)
                      </span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">Study Leave</span>
                      <span className="text-[8px] pl-2">
                        (Sec. 68, Rule XVI, Omnibus Rules Implementing E.O. No.
                        292)
                      </span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">
                        10-Day VAWC Leave
                      </span>
                      <span className="text-[8px] pl-2">
                        (RA No. 9262 / CSC MC No. 15, s. 2005)
                      </span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">
                        Rehabilitation Privilege
                      </span>
                      <span className="text-[8px] pl-2">
                        (Sec. 55, Rule XVI, Omnibus Rules Implementing E.O. No.
                        292)
                      </span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">
                        Special Leave Benefits for Women
                      </span>
                      <span className="text-[8px] pl-2">
                        (RA No. 9710 / CSC MC No. 25, s. 2010)
                      </span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">
                        Special Leave Benefits for Women
                      </span>
                      <span className="text-[8px] pl-2">
                        (RA No. 9710 / CSC MC No. 25, s. 2010)
                      </span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">
                        Special Emergency (Calamity) Leave
                      </span>
                      <span className="text-[8px] pl-2">
                        (CSC MC No. 2, s. 2012, as amended)
                      </span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">Adoption Leave</span>
                      <span className="text-[8px] pl-2">(R.A. No. 8552)</span>
                    </label>
                    <br />
                    <input type="checkbox" className="w-4 h-4 mt-2" />
                    <label>
                      <span className="text-[10px] pl-2">Others:</span>
                      <span className="text-[8px] pl-2">
                        ____________________________________________________________
                      </span>
                    </label>
                    <br />
                  </div>
                </div>
                <div className="w-full md:w-1/2   ">
                  <div className="border-b ">
                    <div className="">
                      <label className="text-[12px]">DETAILS OF LEAVE</label>
                    </div>
                    <div className="pl-2">
                      <label>
                        <span className="text-[10px] pl-2">
                          In case of Vacation/Special Privilege Leave:
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4  mt-2" />
                      <label>
                        <span className="text-[10px] pl-2">
                          Within the Philippines
                        </span>
                        <span className="text-[8px] pl-2">
                          ___________________________________________________________________
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 mt-2" />
                      <label>
                        <span className="text-[10px] pl-2">
                          Abroad (Specify)
                        </span>
                        <span className="text-[8px] pl-2">
                          _________________________________________________________________________
                        </span>
                      </label>
                      <br />
                      <label>
                        <span className="text-[10px] pl-2">
                          In case of Sick Leave:
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 mt-2" />
                      <label>
                        <span className="text-[10px] pl-2">
                          In Hospital (Specify Illness)
                        </span>
                        <span className="text-[8px] pl-2">
                          ____________________________________________________________
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 mt-2" />
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
                          ___________________________________________________________________________________________________
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
                          ________________________________________________________________________________
                        </span>
                      </label>
                      <br />
                      <label>
                        <span className="text-[10px] pl-2">
                          In case of Study Leave:
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 mt-2" />
                      <label>
                        <span className="text-[10px] pl-2">
                          Completion of Masters Degree
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 mt-2" />
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
                      <input type="checkbox" className="w-4 h-4 mt-2" />
                      <label>
                        <span className="text-[10px] pl-2">
                          Monetization of Leave Credits
                        </span>
                      </label>
                      <br />
                      <input type="checkbox" className="w-4 h-4 mt-2" />
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
              <div className="pl-2">
                <label className="text-[12px]">
                  NUMBER OF WORKING DAYS APLLIED FOR
                </label>
              </div>
              <label>
                <span className="pl-2">
                  ___________________________________________
                </span>
              </label>
              <br />
              <label>
                <span className=" pl-2 text-[12px]">INCLUSIVE DATES</span>
              </label>
              <br />
              <label>
                <span className="pl-2">
                  ___________________________________________
                </span>
              </label>
            </div>
            <div className="w-full md:w-1/2 text-sm border border-black">
              <div className="pl-2">
                <label className="text-[12px]">COMMUTATION</label>
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
            <div className=" flex justify-center items-center border-b p-2 border-black  font-bold">
              <p className="text-[14px]">DETAILS OF ACTION ON APPLICATION</p>
            </div>
            <div className=" flex flex-wrap">
              <div className="w-full md:w-1/2  border border-black">
                <div className="pl-2">
                  <label className="text-[12px]">
                    CERTIFICATION OF LEAVE CREDITS
                  </label>
                </div>
                <div className="flex justify-center pb-2">
                  <label>
                    <span className="text-[12px]">As of</span>
                    <span className=" pl-2">_________________</span>
                  </label>
                  <br />
                </div>
                <div className="flex justify-center text-[10px]">
                  <table className="border border-black">
                    <thead className="border border-black">
                      <tr>
                        <th className="border border-black"></th>
                        <th className="border border-black pb-2">
                          Vacation Leave
                        </th>
                        <th className="border border-black  pb-2">
                          Sick Leave
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <td className="border border-black  pb-2">
                          Total Earned
                        </td>
                        <td className="border border-black  pb-2"></td>
                        <td className="border border-black  pb-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-black  pb-2">
                          Less This Application
                        </td>
                        <td className="border border-black"></td>
                        <td className="border border-black"></td>
                      </tr>
                      <tr>
                        <td className="border border-black  pb-2">Balance</td>
                        <td className="border border-black"></td>
                        <td className="border border-black"></td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                </div>
                <div className="flex justify-center mt-4">
                  <label>
                    <p className="text-center underline text-[12px]">
                      RUEL O. LAGADA
                    </p>
                    <span className="flex justify-center text-[10px]  pb-2">
                      (OIC, Chief Management Services Division)
                    </span>
                  </label>
                  <br />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-sm border border-black">
                <div className="pl-2">
                  <label className="text-[12px]">RECOMMENDATION</label>
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
                <div className="flex justify-center mt-[4.2rem]">
                  <label>
                    <p className="text-center underline text-[12px]">
                      NATHANIEL E. RACHO
                    </p>
                    <span className="flex justify-center text-[10px]">
                      (OIC, CENR Officer)
                    </span>
                  </label>
                  <br />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-sm border border-black">
                <div className="pl-2">
                  <label className="text-[12px]">APPROVED FOR</label>
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
                      <span className="text-[10px] pl-2  pb-2">
                        Others (espicify)
                      </span>
                    </label>
                    <br />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-sm border border-black">
                <div className="pl-2">
                  <label className="text-[12px]">DISAPPROVED DUE TO</label>
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

          <div className="flex justify-center mt-[4rem]">
            <label>
              <p className="text-center underline text-[12px]">
                ADELFO R. LUENGAS, JR.
              </p>
              <span className="flex justify-center text-[10px]">
                (In-Charge, Office of the PENRO)
              </span>
            </label>
            <br />
          </div>
        </form>
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleExport}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Export to PDF
        </button>
      </div>
    </div>
  );
};

export default ExportToPdf;
