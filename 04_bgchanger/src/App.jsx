import { useState } from "react";

function App() {
  const [color, setColor] = useState("#c7f9cc");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => setColor("#233d4d")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#233d4d" }}
          >
            _____
          </button>

          <button
            onClick={() => setColor("#f6bd60")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#f6bd60" }}
          >
            _____
          </button>

          <button
            onClick={() => setColor("#fe7f2d")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#fe7f2d" }}
          >
            _____
          </button>


          <button
            onClick={() => setColor("#fcca46")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#fcca46" }}
          >
            _____
          </button>


          <button
            onClick={() => setColor("#a1c181")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#a1c181" }}
          >
            _____
          </button>


          <button
            onClick={() => setColor("#619b8a")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#619b8a" }}
          >
            _____
          </button>

          <button
            onClick={() => setColor("#d62828")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#d62828" }}
          >
            _____
          </button>

          <button
            onClick={() => setColor("#f77f00")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#f77f00" }}
          >
            _____
          </button>


          <button
            onClick={() => setColor("#f5cac3")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#f5cac3" }}
          >
            _____
          </button>

          <button
            onClick={() => setColor("#84a59d")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#84a59d" }}
          >
            _____
          </button>

          <button
            onClick={() => setColor("#f28482")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#f28482" }}
          >
            _____
          </button>

          <button
            onClick={() => setColor("#7209b7")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#7209b7" }}
          >
            _____
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
