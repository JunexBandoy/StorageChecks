import LogoutButton from 'src/config/logout';

export const HeaderContent = () => {
  return (
    <>
      <div className="flex  ">
        {/* <div className="w-2/12 ">
          <div className="text-center p-4 bg-[#3C8DBC] text-white text-bold text-shadow">
            <h2>Storage Checks</h2>
          </div> 
        </div>*/}
        <div className="w-full bg-[#3C8DBC]">
          <div className="float-left mt-2 ml-16  bg-[#3C8DBC] text-white text-bold text-shadow">
            <h2>Storage Checks</h2>
          </div>

          <div className="float-right mt-2 mr-16 text-white">
            <div className="flex items-center  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-bell ml-4"
                viewBox="0 0 16 16"
              >
                {' '}
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />{' '}
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-envelope ml-4"
                viewBox="0 0 16 16"
              >
                {' '}
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />{' '}
              </svg>
              <div className="ml-2">
                <img
                  className="w-10 h-10 p-2 rounded-full  float-right"
                  src="./Images/image.png"
                  alt="Bordered avatar"
                />
              </div>
              {/* <p className="p-2 text-sm font-poppins">Junex Bandoy</p> */}
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
