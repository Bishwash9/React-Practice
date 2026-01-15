import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Frontend/Home'
import Category from './Pages/Frontend/Category'
import Details from './Pages/Frontend/Details'
import Cart from './Pages/Frontend/Cart'
import Testsidebar from './Pages/Testsidebar'


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/category/:cid' element={<Category/>}/>
    <Route path='/details/:id' element={<Details/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path = '/sidebar' element={<Testsidebar/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App