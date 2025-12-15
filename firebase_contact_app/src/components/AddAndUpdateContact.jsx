import React from 'react'
import Modal from './Modal'
import {Formik,Form,Field} from 'formik'
import { db } from '../config/firebase'
import { addDoc, collection } from 'firebase/firestore'

const AddAndUpdateContact = ({isOpen,onClose}) => {

    const addcontact=async(contact)=>{
        try {
            const contactRef=collection(db,"contacts")
            await addDoc(contactRef,contact)
        } catch (error) {
            console.log(error) 
        }
    }


  return (
    <Modal isOpen={isOpen} onClose={onClose}>

        <Formik initialValues={{
            name: "",
            email: "",
        }}
        onSubmit={(values)=>{
            console.log(values)
            addcontact(values)
        }}
        >
            <Form className='flex flex-col'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <Field className='border h-10 pl-2' name="name" type="text"/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">email</label>
                    <Field className='border h-10 pl-2 pr-2' name="email" type="email"/>
                </div>

                <button className='bg-orange-500 rounded px-3 py-1.5 border self-end mt-2 cursor-pointer' >
                    Add Contact
                </button>
            </Form>

        </Formik>

    </Modal>
  )
}

export default AddAndUpdateContact