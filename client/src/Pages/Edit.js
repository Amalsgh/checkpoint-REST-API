import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { editContacts, getContact } from '../JS/Action/contact';

const Edit = () => {
  const {_id} = useParams();
  const [newContact, setNewContact]= useState({
    name: "",
    
    email: "",
    phone: ""
  });
  const oneContact = useSelector (state => state.contactReducer.oneContact)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewContact({...newContact, [e.target.name] : e.target.value});
  };
  useEffect(() => {
    dispatch(getContact(`${_id}`));
    
  }, [dispatch])
  
  const edit = () => {
    dispatch (editContacts(_id, newContact));
  };
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
            type="text" 
            placeholder={`${oneContact.name}`} 
            name='name' 
            value={newContact.name} 
            onChange ={handleChange} 
        />
        
        <Form.Label>Email </Form.Label>
        <Form.Control 
            type="email"
            placeholder= {`${oneContact.email}`}
            name='email' 
            value={newContact.email} 
            onChange ={handleChange} />
        <Form.Label>phone</Form.Label>
        <Form.Control 
            type="number" 
            placeholder= {`${oneContact.phone}`}
            name='phone' 
            value={newContact.phone} 
            onChange ={handleChange} />        
      </Form.Group>
      <Link to={'/user'}>
      <Button 
        variant="primary" 
        type="submit"
        onClick={edit}
        >
        Submit
      </Button>
      </Link>
    </Form>
    </div>
  )
}

export default Edit