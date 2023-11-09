import Navbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import { Routes,Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
         <Route path='/' element ={<Home/>}></Route>
         <Route path='/blogs' element = {<Blogs/>}></Route>
         <Route path='/contact' element = {<Contact/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
