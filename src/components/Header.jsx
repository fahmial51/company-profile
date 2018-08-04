import React from 'react';
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
  DropdownItem } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" active={this.props.page == 'Home' && true}  onClick={()=>{this.props.pindahHalaman('Home')}}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" active={this.props.page == 'Kajian Koding' && true} onClick={()=>{this.props.pindahHalaman('Kajian Koding')}}>Kajian Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" active={this.props.page == 'Santren Kilat' && true} onClick={()=>{this.props.pindahHalaman('Santren Kilat')}}>Santren Kilat</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" active={this.props.page == 'Mondok' && true} onClick={()=>{this.props.pindahHalaman('Mondok')}}>Mondok</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" active={this.props.page == 'Tentang Kami' && true} onClick={()=>{this.props.pindahHalaman('Tentang Kami')}}>Tentang Kami</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}