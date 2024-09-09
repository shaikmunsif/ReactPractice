/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "0123456789";
    if (charactersAllowed) str += "~!@#$%^&*()_=<>?{}[]`~";

    for(let i=1;i<=length;i++){
      let index = Math.floor(
        Math.random()*str.length + 1
      );
      pass = pass.concat(str.charAt(index));
      setPassword(pass);
    }
  }, [numbersAllowed, charactersAllowed, length]);

  const passwordRef = useRef(null);
  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,2);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(()=>{
    passwordGenerator()
  }, [length, numbersAllowed, charactersAllowed, passwordGenerator])

  return (
    <>
    <div className="w-1/2 max-w-mdd mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-center text-4xl text-white'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text"
      value={password}
      className='outline-none w-full py-2 px-3'
      placeholder='Password' 
      ref={passwordRef}
      readOnly />
      <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipBoard}
        >
        Copy
        </button>
    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input 
        type="range" 
        min = {6}
        max = {100}
        value = {length}
        className='cursor-pointer'
        onChange={(event)=>{
          setLength(event.target.value)
        }}
        />
        <label className="text-lg" htmlFor="">Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        id="numberInput" 
        defaultChecked={numbersAllowed}
        onChange={()=>{
          setNumbersAllowed((prev)=>!prev)
        }}
        />
        <label className="text-lg" htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        id="characterInput" 
        defaultChecked={charactersAllowed}
        onChange={()=>{
          setCharactersAllowed((prev)=>!prev)
        }}
        />
        <label className="text-lg" htmlFor="characterinput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
