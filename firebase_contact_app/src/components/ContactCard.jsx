import { deleteDoc, doc } from 'firebase/firestore'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import useDisclouse from '../hoooks/useDisclouse'
import AddAndUpdateContact from './AddAndUpdateContact'

const ContactCard = ({contact}) => {

  const {isopen,onclose,onopen}=useDisclouse()
  
  

  const deleteContact=async(id)=>{
          try {
              await deleteDoc(doc(db,"contacts",id))
          } catch (error) {
              console.log(error) 
          }
      }


  return (
    <>
    <div key={contact.id} className='bg-yellow-200 flex justify-between pl-2 pr-2 rounded-lg items-center mt-4 pb-2 pt-2'>
            <div className='flex gap-2 items-center'>
                <HiOutlineUserCircle className='text-orange-500 text-3xl'/>
              <div className=''>
                <h2 className='text-xl'>{contact.name}</h2>
                <p className='text-sm'>{contact.email}</p>
              </div>
            </div>

            <div className='flex'>
              <RiEditCircleLine onClick={onopen} className='text-3xl cursor-pointer'/>
              <IoMdTrash onClick={()=>deleteContact(contact.id)} className='text-orange-500 cursor-pointer text-3xl'/>
            </div>
          </div>

      
          <AddAndUpdateContact isupdate isOpen={isopen} onClose={onclose} />
          </>
  )
}

export default ContactCard