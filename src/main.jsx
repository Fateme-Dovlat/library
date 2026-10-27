import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'

import Navbar from './pages/Library/Navbar.jsx';
import Home from "./pages/Library/Home.jsx"
import About from "./pages/Library/About.jsx"
import Books from "./pages/Library/Books.jsx"
import Book from './pages/Library/Book.jsx';
import Notfound from "./pages/Library/Notfound.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:bookId' element={<Book />}/>
        </Route>
        <Route path="*" element={<Notfound />} />

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
