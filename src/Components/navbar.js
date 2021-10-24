import React, { useState } from 'react';
import "../index.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navbar1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="c1">
        <NavbarBrand href="/" style={{fontWeight:"700",fontSize:"25px"}}>Cri Cri </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/" style={{fontWeight:"600"}}>Nuestros productos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{fontWeight:"600"}}>¿Quienes somos?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" style={{fontWeight:"600"}}>¿Como trabajamos?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" style={{fontWeight:"600"}}>Contactenos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar1;