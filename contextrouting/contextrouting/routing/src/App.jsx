import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {  Route, Routes } from 'react-router-dom'
import { Home } from './components/home'
import { About } from './components/about'
import { Navbar } from './components/nabbar'
import {Product} from './components/productDetails'
import { User } from './components/user'
import { Userdetails } from './components/usersDetails'
import { Login } from './userLogin'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/product/:id" element={<Product></Product>}></Route>
        <Route path="/users" element={<User></User>}></Route>
        <Route path="/users/:id" element={<Userdetails></Userdetails>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App
// step we
// for craeting router using react router we have to use router only
// for creating nav bar we have to create another file caLLLES 