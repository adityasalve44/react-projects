import { useState } from "react";

function App() {
  const [color, setColor] = useState("#2d3748");

  return (
    <div
      className="flex items-center justify-center h-screen text-white"
      style={{ backgroundColor: color }}
    >
      <div className="bg-slate-600 p-4 rounded-xl w-fit">
        <h1 className="text-xl font-bold text-yellow-200 text-center mb-2">
          Background Changer
        </h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setColor("#DC143C")}
            className="rounded-lg w-20 h-8  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
            style={{ backgroundColor: "#DC143C" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("#0F52BA")}
            className="rounded-lg w-20 h-8  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
            style={{ backgroundColor: "#0F52BA" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#50C878")}
            className="rounded-lg w-20 h-8  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
            style={{ backgroundColor: "#50C878" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("#FFD700")}
            className="rounded-lg w-20 h-8  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
            style={{ backgroundColor: "#FFD700" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#8A2BE2")}
            className="rounded-lg w-20 h-8  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
            style={{ backgroundColor: "#8A2BE2" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("#FF7F50")}
            className="rounded-lg w-20 h-8  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
            style={{ backgroundColor: "#FF7F50" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("pink")}
            className="rounded-lg w-20 h-8  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("#7FFFD4")}
            className="rounded-lg w-20 h-8  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
            style={{ backgroundColor: "#7FFFD4" }}
          >
            Teal
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
