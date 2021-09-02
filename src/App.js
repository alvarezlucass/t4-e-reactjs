import './App.css';
import  { NavBar } from './components/NavBar/NavBar';
// import { Destinations } from './components/Destinations/Destinations';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Destinations /> */}
      <img src='../public/maintenance.png' alt='logo' />
      <h1>PAGINA EN CONSTRUCCION</h1>
    
    </Router>
  );
}

export default App;
