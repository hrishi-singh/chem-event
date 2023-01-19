import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from "../contexts/AuthContext";
function CollapsibleExample() {
  const currentUser = useAuth();
  const [setError] = useState("")
  const {  logout } = useAuth()  
  const history = useNavigate()  
   

  async function handleClick(){
    
    setError("")

    try {
        await logout()
        history("/")
    } catch {
        alert("Cannot logout!")
        setError("Failed to log out")
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='nav-logo'>
          <img src="https://i.ibb.co/PTBCt3X/image.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/">Home</Nav.Link>
            <Nav.Link className="nav-link" href="/events">Events</Nav.Link>
            <Nav.Link className="nav-link" href="/sponsors">Our Sponsors</Nav.Link>
            <Nav.Link className="nav-link" href="/team">Core Team</Nav.Link>
            <Nav.Link className="nav-link" href="/gallery">Gallery</Nav.Link>
          </Nav>
          <Nav>

            {currentUser.currentUser==null &&
            <Nav.Link className="nav-link" href="/login">Login</Nav.Link>
            }



            {currentUser.currentUser!=null &&
            
            <Nav.Link className="nav-link" href="/profile">Profile</Nav.Link>
            }
            {currentUser.currentUser!=null &&
            <button className="nav-link" id='logoutbtn' onClick={handleClick}>Logout</button>
            
            }
            
          </Nav>
            <Navbar.Brand id='college-logo'  className='nav-logo'>
            <img src="https://i.ibb.co/HtL57Tb/1619434038370-e-2147483647-v-beta-t-q-IJfz8uub-Ohse3tqp-Cvx-WB9b-Pt-E7xu-Mn-Ee4-Jrq-Gbip-Y.jpg" alt="" />
        </Navbar.Brand>
        <Navbar.Brand  className='nav-logo'>
            <img src="https://www.indianchamber.org/wp-content/uploads/2019/03/IIChE-LOGO-PNG-300x300.png" alt="" />
        </Navbar.Brand>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
