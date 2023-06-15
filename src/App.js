import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link  
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <>
       
    
    <Router>
    <Routes>     
      <Route exact path='/' element= {[<Navbar/>,<Home/>]}/>  
      <Route exact path='/about' element= {[<Navbar/>,<About/>]}/>
      <Route exact path='/contact' element= {[<Navbar/>, <Contact/>]}/>        
     </Routes>
    </Router>
    </>
  );
}

export default App;
