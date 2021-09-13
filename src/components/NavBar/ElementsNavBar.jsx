import { FaBars, FaShoppingCart, FaStrava, FaSortAmountUpAlt } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FcCamera, FcCustomerSupport } from "react-icons/fc";


// Componets del NavBar, que contengan importación de componentes y sus CSS

export const Nav = styled.nav`
  background:  #7fcc5e;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: black;
    font-family: arial;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
    
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
    
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const ShoppingCart = styled(FaShoppingCart)`
 opacity: 1;
 display: block;
  color: #256ce1;
  width: 100vw;
  justify-content: right;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    top: 100;
    right: 2;
    transform: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;
export const Strava = styled(FaStrava)`
justify-content: centre;
@media screen and (max-width: 768px) {
  display: none;
  
}
`;
export const Camera = styled(FcCamera)`
@media screen and (max-width: 768px) {
  display: none;
  
}
`;
export const CustomerSupport = styled(FcCustomerSupport)`
@media screen and (max-width: 768px) {
  display: none;
  
}
`;
export const SortAmountUpAlt = styled(FaSortAmountUpAlt)`
@media screen and (max-width: 768px) {
  display: none;
  
}
`;

// import React from 'react';
// import { Route, Switch, useLocation, Link } from 'react-router-dom';
// import { 
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtnLink,
//     NavBtn,
//     ShoppingCart,
//     Camera,
//     Strava,
//     CustomerSupport,
//     SortAmountUpAlt
// } from './ElementsNavBar';
// import './NavBar.css';  
// import Destinations from './Destinations/Destinations';
// import { level } from '../../assets/JsonDataBase'


// export default function NavBar () {

    // const [ listLevel, setListLevel] = useState ([])

    // useEffect(() => {
    //     getLevel()
    // }, [])

    // const getLevel = () => {
    //     const data = new Promise ((res, reject) => res(level))
    //         data.then ((res) => {
    //             setListLevel(res)
    //         })
    // }
        // return(
        // <>    
        //     <Nav>
        //     <NavLink to='/'>
        //         <div className='logo'>
        //         <img
        //         className="logo-nav"
        //         src="https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/s526x395/174566556_207366334490173_3405746908693156807_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHHpElDZsUKEW-VbSVil08CyH8EZk3dCmTIfwRmTd0KZFwa2NNG9du9euU9Dmqo2L4&_nc_ohc=DP1QCVUrrFUAX8xQM1z&_nc_ht=scontent.feze11-1.fna&oh=d609e3412ed02db2ef1a1deb43e7ea7e&oe=615A322E"
        //         alt="logo"
        //         />
        //         </div>
        //         </NavLink>
        //         <Bars />
                
        //         <NavMenu>
        //             <NavLink to='/Destinations' exact>
        //                 <a>Destinos </a>
        //                 <Strava />
                        
        //             </NavLink>
        //             <NavLink to='/'>
        //                 <a>Recorrimos </a>     
        //                 <Camera />                   
        //             </NavLink>
        //             <NavLink to='/'>
        //                 <a>Niveles </a> 
        //                 <SortAmountUpAlt />
                       
        //             </NavLink>
        //             <NavLink to='/'>
        //                 <a>Contactenos </a>      
        //                 <CustomerSupport />                  
        //             </NavLink>
                    
        //             {/* <NavLink to='/'>
        //                 <a>Veremos3</a>                        
        //             </NavLink> */}
        //         </NavMenu>
        //         <ShoppingCart />

        //         <NavBtn>
        //             <NavBtnLink to='/Profile/UserRegister'>Registrate</NavBtnLink>
        //             <NavBtnLink to='/Profile/UserLogin'>Logueate</NavBtnLink>
                    
        //         </NavBtn>        
        //     </Nav>
        //     {/* <Route>
//                 <Route exact path="/" />
//                 <Route exact path="/destinations" />


//             </Route> */}
          
            
//         </>
//     );
// };