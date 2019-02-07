import React, { Component } from 'react';
import {Button,Nav,Navbar,NavDropdown,Form,FormControl,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Nabvar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">OverLord</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link componentClass={Link} href="/" to="/Home">Home</Nav.Link>
      <Nav.Link componentClass={Link} href="/News" to="/News">Company</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item  href="/action">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" id="search-input" />
      <Button variant="outline-success" id="search-button">Search</Button>
      {/* <div className="search-box">
        <input className="search-txt" Type ="text" name="" value="" placeholder="Type Here" />
          <a className="search-btn" href="#"> </a>
            <i class="fas fa-search"></i>
      
      </div> */}
    </Form>
  </Navbar.Collapse>
</Navbar>;
            </div>
        );
    }
}

export default Nabvar;