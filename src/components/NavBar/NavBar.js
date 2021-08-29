import React from 'react';
import { 
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtnLink,
    NavBtn,
    ShoppingCart
} from './ElementsNavBar';


const NavBar =() => {
        return(
        <>    
            <Nav>
            <NavLink to='/'>
                    <img src='../public/t4-e.jpg' alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/' exact>
                        <a>Productos</a>
                    </NavLink>
                    <NavLink to='/'>
                        <a>Veremos</a>                        
                    </NavLink>
                    <NavLink to='/'>
                        <a>Veremos2</a>                        
                    </NavLink>
                    <NavLink to='/'>
                        <a>Veremos3</a>                        
                    </NavLink>
                </NavMenu>
                <ShoppingCart />

                <NavBtn>
                    <NavBtnLink to='/Profile/Profile'>Registrate</NavBtnLink>
                    <NavBtnLink to='/login'>Logueate</NavBtnLink>
                    
                </NavBtn>
               

            </Nav>
            
        </>
    );
};

export default NavBar;