import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Button } from 'reactstrap';
const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [sticky, setSticky] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

  });



  const handleScroll = () => {

    if (window.scrollY > 90) {

      setSticky(true);

    } else if (window.scrollY < 90) {

      setSticky(false);

    }

  }


  return (
    <Navbar
      color="dark"
      dark
      expand="md"
      fixed="top"
      full
      light
    >
      <NavbarBrand className='sm md lg xl xxl mx-auto' href="#" style={{ paddingLeft: "4rem", paddingBottom: ".2rem", paddingTop: "1.5rem", fontFamily: "serif", fontWeight: "500", fontSize: "24px" }}>
        Cloudxcel
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav
          className="sm md lg xl xxl"
          navbar
          style={{ fontFamily: "serif", paddingLeft: "9rem", fontSize: "26px" }}>
          <NavItem className='mx-2 '>
            <NavLink href="#landing">
              Home
            </NavLink>
          </NavItem>
          <NavItem className='mx-2'>
            <NavLink href="#about">
              About
            </NavLink>
          </NavItem>
          <NavItem className='mx-2'>
            <NavLink href="#services">
              Services
            </NavLink>
          </NavItem>
          <NavItem className='mx-2'>
            <NavLink href="#testimonials">
              Testimonials
            </NavLink>
          </NavItem>
          <NavItem className='mx-2'>
            <NavLink href="#contact">
              Contact
            </NavLink>
          </NavItem>

          <Button className='border border-3' style={{marginLeft:".2rem",marginRight: "8rem",paddingInline: "1.5rem",paddingLeft:"2.5rem",paddingRight:"2.5rem",marginBottom:".3rem",marginTop:".4rem"}}
            active
            color="danger"
            size="md"
          >
            Log in &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
          </Button>


        </Nav>
      </Collapse>
    </Navbar>

  );
}
export default Header;
