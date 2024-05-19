
import { DataModal } from "./components/constants/dataModal";
import MainTable from "./components/mainTable";
import LineGraph from "./components/lineGraph";
import EnhancedTable from "./components/mainTable";
import ModalTable from "./helper/modalTable";
function App() {
  return (
    <div className="w-full flex p-10 gap-10">
      <div className="flex flex-col  w-1/2">
        <h1 className="font-bold self-center text-xl underline">ML job market</h1>
        <MainTable />
        <ModalTable />
      </div>
      <div className="flex flex-col w-full"
      >
        <h1 className="font-bold self-center text-xl underline pb-4">Analysis</h1>
        <LineGraph/>
      </div>
    </div>
  );
}

export default App
