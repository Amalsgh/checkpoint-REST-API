import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../Components/style.css'


const Navigation = () => {
return (
    <div className='navi'>
       
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wJPK9rskLRfn3o8shl74G4um18rP8P-f8KkpEtfRDY8mBfb4M1fshTpCA992q5K56h4&usqp=CAUbs/contact-icon-png/contact-icon-png-31.png"
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Contact
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/user">Contact</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          
    
    </div>
)
}

export default Navigation