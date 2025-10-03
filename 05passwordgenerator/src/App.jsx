import { useCallback, useEffect, useState , useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(' ');
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str +="0123456789";
    if(charAllowed) str += "!@#$%^&*()-+";

    for(let i = 0 ; i < length; i++){
      const char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length,numberAllowed,charAllowed])

  const copyToClipboard = ()=>{
   window.navigator.clipboard.writeText(password);
   passwordRef.current?.select();
  }
  

  useEffect(()=>{
    generatePassword()
  }, [length,numberAllowed,charAllowed] )

 return (
  <div className="flex justify-center items-center min-h-screen bg-gray-900">
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-96">
      <h1 className="text-2xl font-bold text-center text-white mb-6">
        🔑 Password Generator
      </h1>

      {/* Display Password */}
      <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          readOnly
          value={password}
          placeholder="password"
          className="w-full px-3 py-2 text-white bg-transparent outline-none"
          ref={passwordRef}
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2" 
        onClick={copyToClipboard}>
          Copy
        </button>
      </div>

      {/* Range Slider */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-1">Password Length</label>
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full cursor-pointer accent-indigo-600"
        />
        <p className="text-gray-400 text-sm mt-1">Length: {length}</p>
      </div>

      {/* Numbers Checkbox */}
      <div className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev)=>!prev)}
          className="w-4 h-4 accent-indigo-600"
        />
        <label className="text-gray-300">Include Numbers</label>
      </div>

      {/* Symbols Checkbox */}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={() => setCharAllowed(prev => !prev)}
          className="w-4 h-4 accent-indigo-600"
        />
        <label className="text-gray-300">Include Symbols</label>
      </div>

      
    </div>
  </div>
);

}

export default App
