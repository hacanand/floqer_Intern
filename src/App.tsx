
import { DataModal } from "./constants/dataModal";
import MainTable from "./components/mainTable";
import LineGraph from "./components/lineGraph";
// import { useState } from "react";
 
 
function App() {
  // const [clicked, setClicked] = useState(false);
  // const [text, setText] = useState("");
  // function handleChatBtn(): void {
  //   setClicked(true);
    
  //   setTimeout(() => {
  //     setClicked(false);
  //   }, 2000);
  //   const textArea = document.getElementById("text") as HTMLTextAreaElement;
  //   const responseArea = document.querySelector(".bg-gray-200") as HTMLDivElement;
  //   const text = textArea.value;
  //   setText(text);
  //   if (text === "" && text.length!== 0) {
  //     responseArea.innerHTML = "Please enter a question";
  //     return;
  //   }
  //   responseArea.innerHTML = "I'm sorry, I don't understand the question";

  // }

  return (
    <>
      <div className="w-full flex p-10 gap-10">
        <div className="flex flex-col  w-1/2 ">
          <h1 className="font-bold self-center text-xl underline">
            ML job market
          </h1>
          <MainTable />
          <DataModal />
        </div>
        <div className="flex flex-col w-full  ">
          <h1 className="font-bold self-center text-xl underline pb-4">
            Analysis
          </h1>
          <LineGraph />
          <div className="w-full flex flex-col items-center pt-10 ">
            {/* <h1 className="self-center font-bold text-3xl">Chat with Data</h1>

            <textarea
              name="text"
              id="text"
              className=" bottom-2 border border-gray-400  resize-none overflow-auto  w-10/12 h-20 rounded p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              placeholder="Ask a question about the data... "
            />
            <div className="flex justify-center mt-4">
             
              <button
                className="bg-gray-600 text-white rounded p-2 hover:bg-gray-800  px-6  disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleChatBtn}
                disabled={clicked}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rotate-90 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>

            {text && (
              <div className="w-10/12 h-fit bg-gray-200 mt-4 rounded p-2">
                <p>Response will appear here...</p>
              </div>
            )} */}
            <iframe
              src="https://app.relevanceai.com/form/f1db6c/e62b62e6-958e-4c75-93da-0c8dc2824a12?version=latest"
              width="800px"
              height="750px"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
