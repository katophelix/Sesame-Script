import React from "react";
import { Navbar, NavLink, NavbarBrand, Nav, NavItem, Container, Col } from 'reactstrap';
import "./Nav.css";
import logo from "./fb-art.jpg";
import logo2 from "./youtube.jpg";
import logo3 from "./big.jpg";



const Top = () => (

  <div>
    <Container>
      <Navbar inverse collapseOnSelect expand="md">

        <NavbarBrand href="/"><h4>Javascript Like you have never seen it before</h4></NavbarBrand>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/" target="blank"><img style={{ width: "130px" }} src={logo3} alt="logo" /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.youtube.com/channel/UCrO9ZWdhs-jQrMg1b_eng1g?view_as=subscriber" target="blank"><img style={{ width: "100px" }} src={logo2} alt="logo" /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.facebook.com/katophelix" target="blank"><img className="img-responsive" style={{ width: "70px" }} src={logo} alt="logo" /></NavLink>
          </NavItem>
        </Nav>
      </Navbar>

    </Container>
  </div>
);




export default Top;
