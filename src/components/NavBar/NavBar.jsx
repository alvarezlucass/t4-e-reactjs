import React from 'react';
import { Route, Switch, useLocation, Link } from 'react-router-dom';
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


export default function NavBar () {
        return(
        <>    
            <Nav>
            <NavLink to='/'>
                <div className='logo'>
                <img
                className="logo-nav"
                src="https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/s526x395/174566556_207366334490173_3405746908693156807_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHHpElDZsUKEW-VbSVil08CyH8EZk3dCmTIfwRmTd0KZFwa2NNG9du9euU9Dmqo2L4&_nc_ohc=DP1QCVUrrFUAX8xQM1z&_nc_ht=scontent.feze11-1.fna&oh=d609e3412ed02db2ef1a1deb43e7ea7e&oe=615A322E"
                alt="logo"
                />
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

