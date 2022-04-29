import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../images/it.jpg'
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../CustomLink/CustomLink';
//import logo from '../../../../images/logo.png'
//import { useAuthState } from 'react-firebase-hooks/auth';
//import auth from '../../../../firebase.init';
//import { signOut } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase-init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const navigate=useNavigate()
  const[user]=useAuthState(auth)

  const handleSignOut=()=>{

    signOut(auth)
    navigate('/signin')
    
  }
    return (
        <>
 
  
 <Navbar collapseOnSelect expand="lg" bg="info" variant="light" sticky="top">
  <Container>
  <Navbar.Brand as={Link} to="/">
    <img style={{height:'50px' , borderRadius:"20px"}} src={logo} alt="" />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ms-auto">
      <CustomLink as={Link} to="home#inventory" id='#inventory'>Inventory</CustomLink>
      
      <CustomLink as={Link} to="/blogs">Blogs</CustomLink>
      {
        user ?

        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>

        :
          
      <CustomLink as={Link} to="/signin">SignIn</CustomLink>
}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
</>
    );
};

export default Header;