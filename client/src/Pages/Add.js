import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addContact } from '../JS/Action/contact';

const Add = () => {
  const [newContact, setNewContact] = useState({
    name:"", 
    email:"", 
    phone:"",
  });
  const dispatch = useDispatch();

  const handleChange= (e) => {
    setNewContact({...newContact, [e.target.name]: e.target.value });
  };
  const add = () => {
    dispatch(addContact(newContact));
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter name" 
          name="name" 
          value={newContact.name}
          onChange={handleChange}
          />
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter your email" 
          name="email" 
          value={newContact.email}
          onChange={handleChange}
          />
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text" 
          placeholder="Enter your phone" 
          name="phone"
          value={newContact.phone} 
          onChange={handleChange} 
          />
      </Form.Group>
      <Link to = {'/user'}> <Button variant="primary" type="submit" onClick={add}>
        Add
      </Button>
      </Link>
    </Form>
    </div>
  )
}

export default Add