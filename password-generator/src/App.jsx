import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    if (length < 6) {
      setSuggestions(["Password length must be at least 6 characters."]);
      return;
    }

    if (!numAllowed && !charAllowed) {
      setSuggestions(["Please select at least one character type."]);
      return;
    }

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~`@#$%^&*(){}[]?><";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
    setSuggestions([]);
  }, [length, numAllowed, charAllowed]);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setCopied(true);
  }, []);

  useEffect(() => {
    passwordGenerator();
    setCopied(false);
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex bg-sky-200 bg-opacity-25 backdrop-blur-xl p-8 rounded-xl shadow-xl mt-20 items-center flex-col">
          <h1 className="text-3xl p-2 justify-center font-bold text-white">
            Password Generator
          </h1>
          <div className="flex flex-row items-center">
            <input
              type="text"
              value={password}
              placeholder="password"
              className="outline-none rounded-bl-xl rounded-tl-xl py-2 px-3"
              readOnly
              ref={passRef}
            />
            <button
              onClick={copyToClipboard}
              className={`outline-none font-semibold bg-sky-700 text-white px-3 py-2 rounded-br-xl rounded-tr-xl ${
                copied ? "bg-green-500" : ""
              }`}
            >
              {copied ? "COPIED" : "COPY"}
            </button>
          </div>
          <div className="flex font-semibold gap-x-3 mt-4 text-white">
            <div className="flex items-center gap-x-2">
              <input
                type="range"
                id="lenRange"
                min={0}
                max={20}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="lenRange"> Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numInput"
                onChange={() => {
                  setNumAllowed((previous) => !previous);
                }}
              />
              <label htmlFor="numInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((previous) => !previous);
                }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
          <div className="text-white mt-4">
            {suggestions.map((suggestion, index) => (
              <p key={index}>{suggestion}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
