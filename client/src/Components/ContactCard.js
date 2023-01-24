import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContacts } from '../JS/Action/contact';

const ContactCard = ({ contact }) => {
  const dispatch =useDispatch ();
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://cdn.onlinewebfonts.com/svg/img_454260.png" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.email}</Card.Text>
        <Card.Text>{contact.phone}</Card.Text>
        <Link to={`/edit/${contact._id}`}><Button variant="outline-dark">Edit</Button></Link>
        <Button variant="outline-dark"  onClick={()=>dispatch (deleteContacts(contact._id))}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ContactCard;