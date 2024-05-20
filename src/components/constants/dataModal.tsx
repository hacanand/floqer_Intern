 
import React from "react";
import ModalTable from "../../helper/modalTable";
import { isModalOpen } from "./constants";
import { useAtomValue, useSetAtom } from "jotai";

 export const DataModal = () => {
   const ref=React.useRef(null);
   const modalState=useAtomValue(isModalOpen);
   const closeModal = useSetAtom(isModalOpen)
   const changeState = () => {
      //@ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        closeModal(!modalState);
      }
    }
  return (
    <>
      {modalState && (
        <div className="absolute pt-48 backdrop-blur-sm " onClick={changeState}>
          <div className="flex justify-center">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-t"
              onClick={() => closeModal(!modalState)}
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
          <div className="" ref={ref}>
             <ModalTable />
          </div>
         
        </div>
      )}
    </>
  );
};

 
