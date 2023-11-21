import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  function addValue() {
    if (count >= 20) setCount(20)
    else setCount(count + 1)
  }

  function removerValue() {
    if (count <= 0) setCount(0)
    else setCount(count - 1)
  }

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-blue-100'>
      <div className='text-white w-[500px] h-[250px] p-2 text-center rounded-3xl flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900'>
        <h1 className='text-5xl font-bold p-2'>Counter App</h1>
        <h2 className='font-semibold text-2xl'>Counter Value <span className='text-4xl font-bold text-yellow-200'>{count}</span> </h2>
        <div className='p-3'>
          <button className='bg-green-500 text-3xl hover:bg-green-700 text-white font-bold py-2 px-5 rounded m-2' onClick={addValue}>+</button>
          <button className='bg-red-500 text-3xl hover:bg-red-700 text-white font-bold py-2 px-5 rounded m-2' onClick={removerValue}>-</button>
        </div>
      </div>
    </div>
  )
}

export default App
