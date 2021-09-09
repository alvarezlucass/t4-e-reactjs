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



function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <div className='carousel'>
          <Carousel />
        </div>

      </main>

      <ItemListContainer />
      
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
    </Router>
  );
}

export default App;
