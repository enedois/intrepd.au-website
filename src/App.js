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
import Footer from './components/Footer';



function App() {
  return (
    <>
       
    
    <Router>
    <Routes>     
      <Route exact path='/' element= {[<Navbar/>,<Home/>, <Footer/>]}/>  
      <Route exact path='/about' element= {[<Navbar/>,<About/>,<Footer/>]}/>
      <Route exact path='/contact' element= {[<Navbar/>, <Contact/>,<Footer/>]}/>        
     </Routes>
    </Router>
    </>
  );
}

export default App;
