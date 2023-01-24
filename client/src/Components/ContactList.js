import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getContacts} from "../JS/Action/contact"
import ContactCard from './ContactCard';

const ContactList = () => {
  const ListContacts = useSelector (state => state.contactReducer.listContacts)
  const dispatch = useDispatch()
  const load = useSelector (state => state.contactReducer.load)

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch]);
  
  return (
    <div>
      {load? 
        <h2>Loading...</h2>
      : 
        ListContacts.map((el) => <ContactCard contact= {el} key={el._id}/>)}
    </div>
  );
};

export default ContactList