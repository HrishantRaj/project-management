import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-row">
      <div className="basis-1/4">
        <Sidebar/>
      </div>
      <div className="basis-3/4">
        <h1>Main</h1>
      </div>
    </div>
  );
}

export default App;
