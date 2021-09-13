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



function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <div className='carousel'>
          <Carousel />
        </div>
        <ItemCount />
      </main>
      <Switch>   

      <Route path="/" exact>
          <ItemListContainer />
      </Route>
      
      
      
      {/* <ItemListContainer /> */}
      {/* <ItemListContainer /> */}


      
    
      {/* <main>
          <Switch>
            <Route path="/" exact>
              <Carousel />
            </Route>
            <Route path="/ItemListContainer" exact>
              <ItemListContainer />
              <ItemListContainer />
              <ItemListContainer />
            </Route>  
          

      
          </Switch>
      </main> */}
        </Switch>
    </Router>
  );
}

export default App;
