import React, { useState, useEffect } from 'react';
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
import { 
      NavBtn,
      NavBtnLink,
      ShoppingCart,
      Camera,
      Strava,
      CustomerSupport,
      SortAmountUpAlt      
  } from './ElementsNavBar';
import { category } from '../../assets/JsonDataBase/LevelTrBsAs.json'

 const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [ listLevel, setListLevel] = useState ([])

    useEffect(() => {
        getLevel()
    }, [])

    const getLevel = () => {
        const data = new Promise ((res, reject) => res(category))
            data.then ((res) => {
                setListLevel(res)
            })
    }

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Trekking Buenos Aires</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">
              Destinos
                <Strava />
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                trekking
                <Camera />
                </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Niveles
                <SortAmountUpAlt />
              </DropdownToggle>
              <DropdownMenu right>
                {listLevel.map((item) => {
                    return <DropdownItem key={ item.id }> { item.level }</DropdownItem>
                  })
                }
                
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
            <ShoppingCart />
            <NavBtn>
                    <NavBtnLink to='/Profile/UserRegister'>Registrate</NavBtnLink>
                    <NavBtnLink to='/Profile/UserLogin'>Logueate</NavBtnLink>                    
                </NavBtn>
        
      </Navbar>
    </div>
  );
}

export default NavBar;
