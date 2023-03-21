import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import Shop from './pages/Shop';
import Products from './pages/Products';
import Home from './pages/Home';
// import Cart from './pages/Cart';
// import Productdetails from './pages/Productdetails';

function App() {
  return (
    <Router>
      <nav>
        <ul className='nav-bar'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Our products</Link></li>
        </ul>
      </nav>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/shop'  element={<Shop />} />
        <Route path='/shop/:id' element={<Products/>} />
        {/* <Route path='/cart' element={<Cart/>} /> */}
      </Routes>
    </Router>
  )
}

export default App
