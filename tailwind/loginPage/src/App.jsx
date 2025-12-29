import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body className="bg-gray-900 flex justify-center items-center min-h-screen">
        <div className="bg-gray-700 rounded-lg p-8 shadow-2xl max-w-mg w-full">
          <h2 className='text-center text-3xl text-white mb-6 font-bold'>Login</h2>
          <form>
            <div className='mb-4 '>
              <label className='block text-sm font-medium text-gray-300 mb-2' htmlFor="">Email</label>
              <input className='bg-gray-600 w-full px-3 py-2 rounded-md border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" name="" id="" placeholder='Email' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2' htmlFor="">Password</label>
              <input className='bg-gray-600 w-full px-3 py-2 rounded-md border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" name="" id="" placeholder='Password' />
            </div>
            <button className='w-full bg-blue-600 mb-6 mt-4 py-2 rounded-md text-white hover:bg-blue-700 shadow-2xl' type="submit">Login</button>
          </form>
        </div>
      </body>
    </>
  )
}

export default App
