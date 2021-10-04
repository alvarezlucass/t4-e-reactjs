// Import Moduls
import { BrowserRouter as Router, 
        Switch,
        Route,
} from 'react-router-dom';

import { CartContext } from './components/Context/cartContext';
import { useState, createContext, useContext  } from 'react';
// Import Components
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';
import UserLogin from './components/Profiles/UserLogin';
import UserRegister from './components/Profiles/UserRegister';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import FormDestination from './components/FormContainer/DestinationForm'

// import Footer from './components/Footer/Footer';


export const ContextApp = createContext ("cart")

function App() {

  const [state, setState] = useState("destination")

  function viewDestin () {
    alert(state)
  }

   
  return (
    <>
    <CartContext>
      <ContextApp.Provider value={{state, viewDestin }} >
        <Router>
          <NavBar />
          
          <Switch>
              <Route exact path="/">
                <Carousel />
                <ItemListContainer /> 
              </Route>
              <Route path="/" exact component={ItemListContainer} />
              {/* <Route path="/category/:idCategory" exact component={ItemListContainer} /> */}
              <Route path="/destination/:idDestination" exact component={ItemDetailContainer} />
              <Route path="/profile/UserLogin" exact component={ UserLogin } />
              <Route path="/profile/UserRegister" exact component={ UserRegister } />              
              <Route path="/administrator/FormDestination" exact component={ FormDestination } /> 
              <Route path="/cart" exact component={ Cart } />
          </Switch>
          {/* <Footer /> */}
        </Router>
        </ContextApp.Provider>
    </CartContext>
    </>
  );
}

export default App;
