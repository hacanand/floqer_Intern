import { useState } from "react";

 export const DataModal = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      <button onClick={() => setOpenModal(true)}>Toggle modal</button>
      {openModal && (
        <div>
           
        </div>
      )}
    </>
  );
};

 
