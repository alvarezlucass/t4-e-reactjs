// Import Moduls
import { BrowserRouter as Router, 
        Switch,
        Route,
        } from 'react-router-dom';
// import { cartContext } from '../Context/cartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import  NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';
// import ItemCountButton from './components/Buttons/ItemCountButton';
import UserLogin from './components/Profiles/UserLogin';
import UserRegister from './components/Profiles/UserRegister';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
// import Footer from './components/Footer/Footer';




function App() {
  return (
    // <cartContext.Provider>
    <Router>
      <NavBar />
      <Switch>
          <Route path="/" exact component={ItemListContainer} >
            <Carousel />
            {/* <ItemCountButton /> */}
            <ItemListContainer />
          </Route>
          <Route path="/category/:idCategory" exact component={ItemListContainer} />
          <Route path="/destination/:idDestination" exact component={ItemDetailContainer} />
          <Route path="/profile/UserLogin" exact component={ UserLogin } />
          <Route path="/profile/UserRegister" exact component={ UserRegister } />
          <Route path="/cart/:idCart" exact component={ CartWidget } />
    
        </Switch>
      {/* <Footer /> */}
    </Router>
    // </cartContext.Provider>
  );
}

export default App;
