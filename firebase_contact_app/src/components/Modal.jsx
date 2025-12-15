import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { createPortal } from 'react-dom'

const Modal = ({onClose,isOpen,children}) => {
  return createPortal(
    <>
    {isOpen && (
        
        <>
        <div className='m-auto relative z-70 min-h-[200px] bg-white max-w-[80%] p-4'>

        <div className='flex justify-end '>
            <AiOutlineClose  onClick={onClose} className='text-2xl cursor-pointer'/>
        </div>
        
        {children}
    
    </div>

    <div onClick={onClose} className='absolute top-0 z-60 h-screen w-screen backdrop-blur'/>
    </>

) } 
    </>
  ,document.getElementById("modal-root"))
}

export default Modal