import  { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  function handleDecrease() {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setErrorMessage("Unable to decrease below zero");
    }
  }

  function handleIncrease() {
    setCounter(counter + 1);
    
    setErrorMessage("");
  }

  return (
    <>
      <div className="flex w-full h-screen items-center justify-center">
        <div className="flex flex-col bg-sky-800 rounded-lg p-4 items-center">
          <h1 className="p-3 font-bold text-3xl text-yellow-200">
            Counter
          </h1>
          <div className='flex justify-center text-2xl text-white p-3'>
            <p>{counter}</p>
          </div>
          {errorMessage && (
            <div className="text-red-500 font-semibold mb-2">
              {errorMessage}
            </div>
          )}
          <div className="flex flex-col sm:flex-row items-center font-semibold">
            <button
              onClick={handleIncrease}
              className="flex p-3 rounded-3xl mx-2 m-1 justify-center w-28 bg-slate-300"
            >
              Increase
            </button>
            <button
              onClick={handleDecrease}
              className="flex p-3 rounded-3xl mx-2 m-1 justify-center w-28 bg-slate-300"
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
