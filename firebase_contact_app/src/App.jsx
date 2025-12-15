import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { CiSearch } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";
import {collection,getDocs} from 'firebase/firestore'
import {db} from './config/firebase'
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import AddAndUpdateContact from './components/AddAndUpdateContact';


const App = () => {

  const [contacts,setcontacts]=useState([]);

  const [isopen,setopen]=useState(false)

  function onopen(){
    setopen(true);
  }

  function onclose(){
    setopen(false);
  }

  useEffect(()=>{

    const getContacts=async()=>{
        try {
          
          const contactsRef=collection(db,"contacts");
          const contactsSnapshot= await getDocs(contactsRef);
          const contactLists=contactsSnapshot.docs.map((doc)=>{
            return{
              id: doc.id,
              ...doc.data(),
            }
          });
          // console.log(contactLists)
          setcontacts(contactLists)
        } catch (error) {
          console.log(error);
        }

    };
    getContacts();

  },[])



  return (

    <>
    <div className='max-w-[370px] mx-auto px-4' > 
      
      <Navbar/> 

      <div className='flex gap-2'>
        <div className='flex relative items-center grow '>
        <CiSearch className='text-white text-3xl absolute ml-1' />  
        <input type="text" className='border-white text-white pl-8  border h-10 rounded-md grow ' />
      </div>
        <AiFillPlusCircle onClick={onopen} className='text-white text-5xl cursor-pointer'/>
      </div>

      <div>
        {contacts.map((contact)=>(
          <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>

    </div>

      <AddAndUpdateContact isOpen={isopen} onClose={onclose}/>

     </>
  ) 
}

export default App