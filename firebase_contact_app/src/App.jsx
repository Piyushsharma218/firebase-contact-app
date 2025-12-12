import React from 'react'
import Navbar from './components/Navbar'
import { CiSearch } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";

const App = () => {
  return (
    <div className='max-w-[370px] mx-auto px-4' > 
      
      <Navbar/> 

      <div className='flex gap-2'>
        <div className='flex relative items-center  flex-grow '>
        <CiSearch className='text-white text-3xl absolute ml-1' />  
        <input type="text" className='border-white text-white pl-8  border h-10 rounded-md flex-grow ' />
      </div>
        <AiFillPlusCircle className='text-white text-5xl cursor-pointer'/>
      </div>

    </div>
  ) 
}

export default App