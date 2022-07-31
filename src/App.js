import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Footer from './Footer'
import Home from './Home';
import Navbar from './Navbar';
import Inventory  from './Inventory';
import {Routes,Route} from 'react-router-dom'
import News from './News';
import About from './About';
import Readmore from './Readmore'
import ReadmoreI from './ReadmoreI'
import Contact from './Contact';
import Staff from './staff'
function App() {

  return (
    <>
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route  path='/News' element={<News/>}/>
    <Route  path='/Inventory' element={<Inventory/>}/>
    <Route  path='/About' element={<About/>}/>
    <Route  path='/Contact' element={<Contact/>}/>
    <Route path='/Readmore' element={<Readmore/>}/>
    <Route path="/ReadmoreI" element={<ReadmoreI/>}/>
    <Route path='/staff' element={<Staff/>}/>
  </Routes>
  <Footer/>
    </>
  );
}

export default App;
