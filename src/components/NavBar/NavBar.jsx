import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
} from 'reactstrap';
import { 
      NavBtn,
      NavBtnLink,
      ShoppingCart,
      Camera,
      Strava,
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
        <NavbarBrand href="/"> Trekking Buenos Aires</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <Link to="/category/Destinos">
                <NavLink href="/">Destinos<Strava /></NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/category/trekking">
                <NavLink href="/">trekking<Camera /></NavLink>
                </Link>
             </NavItem>
            <UncontrolledDropdown nav inNavbar>
            <Link to="/category/Niveles">
              <DropdownToggle nav caret>Niveles<SortAmountUpAlt /></DropdownToggle>            
              <DropdownMenu right>
                {listLevel.map((destinations) => {
                    return <DropdownItem key={ destinations.id }> { destinations.level }</DropdownItem>
                  })
                }                
              </DropdownMenu>
              </Link>
            </UncontrolledDropdown>
            
          </Nav>
     
        </Collapse>
               
               <ShoppingCart  />
                <NavBtn>
                    <NavBtnLink to='/Profile/UserRegister'>Registrate</NavBtnLink>
                    <NavBtnLink to='/Profile/UserLogin'>Logueate</NavBtnLink>                    
                </NavBtn>
        
      </Navbar>
    </div>
  );
}

export default NavBar;
