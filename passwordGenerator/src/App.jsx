import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  // useRef
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    // "!@#$%^&*-_+=[]{}~`(),./<>?;':"

    let strLength = str.length
    for (let i = 0; i <= length; i++) {
      let char = (Math.floor(Math.random() * strLength + 1))
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full  max-w-md mx-auto my-8 rounded-lg text-orange-500 bg-gray-800 px-4 py-3 text-center'>
        <h1 className='text-2xl text-white text-center my-3'>Password Generator</h1>
        <div className='flex overflow-hidden mb-4 py-3 shadow rounded-lg'>
          <input 
            type="text" 
            value={password}
            placeholder='Password'
            readOnly
            className='w-full outline-none py-1 px-3 rounded-tl-lg rounded-bl-lg text-xl'
            ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-800 py-1 px-3 rounded-tr-lg rounded-br-lg text-white shrink-0'
          onClick={() => copyPassToClipboard()}
          >Copy</button>

        </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                type="range"
                min={6}
                max={50}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
              />
              <label >Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberAllowed'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
