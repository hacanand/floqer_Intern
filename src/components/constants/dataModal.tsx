import { useState } from "react";
import ModalTable from "../../helper/modalTable";

 export const DataModal = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      {openModal && (
        <div className="absolute pt-48 backdrop-blur-sm ">
          <div className="flex justify-center">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-t"
              onClick={() => setOpenModal(!openModal)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ModalTable />
        </div>
      )}
    </>
  );
};

 
