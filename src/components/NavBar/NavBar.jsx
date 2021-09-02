import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { 
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtnLink,
    NavBtn,
    ShoppingCart,
    Camera,
    Strava,
    CustomerSupport
} from './ElementsNavBar';
import './NavBar.css';  
// import Destinations from './Destinations/Destinations';


export const NavBar =() => {
        return(
        <>    
            <Nav>
            <NavLink to='/'>
                <div className='logo'>
                    <img src='../public/logo.jpg' alt='logo' /> 
                </div>
                </NavLink>
                <Bars />
                
                <NavMenu>
                    <NavLink to='/Destinations' exact>
                        <a>Destinos <Strava /></a>
                        
                    </NavLink>
                    <NavLink to='/'>
                        <a>Lugares Visitados <Camera /></a>                        
                    </NavLink>
                    <NavLink to='/'>
                        <a>Contactenos <CustomerSupport /></a>                        
                    </NavLink>
                    {/* <NavLink to='/'>
                        <a>Veremos3</a>                        
                    </NavLink> */}
                </NavMenu>
                <ShoppingCart />

                <NavBtn>
                    <NavBtnLink to='/Profile/Profile'>Registrate</NavBtnLink>
                    <NavBtnLink to='/login'>Logueate</NavBtnLink>
                    
                </NavBtn>        
            </Nav>
            {/* <Route>
                <Route exact path="/" />
                <Route exact path="/destinations" />


            </Route> */}
          
            
        </>
    );
};

