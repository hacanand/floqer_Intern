
import EnhancedTable from "./components/mainTable";
function App() {
  return (
    <div className="w-full flex p-10 gap-10">
      <div className="flex flex-col  w-1/2">
        <h1 className="font-bold self-center text-xl">ML job market</h1>
        {/* <MainTable /> */}
        <EnhancedTable/>
      </div>
      <div>
        <h1 className="font-bold self-center text-xl">Analysis</h1>
      </div>
    </div>
  );
}

export default App
