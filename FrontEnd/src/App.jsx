import React from 'react'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProducts from './pages/AddProducts';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import SignUp from './pages/SignUp';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/add-products" element={<AddProducts/>}/>
          <Route path="/books/" element={<Books/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/books/:id" element={<BookDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;