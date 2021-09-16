// Import Moduls
import { BrowserRouter as Router, 
        Switch,
        Route,
        } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import  NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';
import ItemCount from './components/ItemListContainer/ItemCount';
import UserLogin from './components/Profiles/UserLogin';
import UserRegister from './components/Profiles/UserRegister';
import CartWidget from './components/CartWidget/CartWidget';
// import Footer from './components/Footer/Footer';




function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route path="/" exact component={ItemListContainer} >
            <Carousel />
            <ItemCount />
            <ItemListContainer />
          </Route>
          <Route path="/category/:idCategory" exact component={ItemListContainer} />
          <Route path="/profile/UserLogin" exact component={ UserLogin } />
          <Route path="/profile/UserRegister" exact component={ UserRegister } />
          <Route path="/cart" exact component={ CartWidget } />
    
        </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
