import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import "./i18n"

import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client'

import { Provider } from "react-redux";
import { store } from "./app/store";
import Cart from "./pages/Library/Cart";

import Navbar from './pages/Library/Navbar.jsx';
import Home from "./pages/Library/Home.jsx"
import About from "./pages/Library/About.jsx"
import Books from "./pages/Library/Books.jsx"
import Book from './pages/Library/Book.jsx';
import Notfound from "./pages/Library/Notfound.jsx";
import Register from './pages/Library/Register.jsx';
import Login from './pages/Library/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Navbar />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/books' element={<Books />} />
            <Route path='/books/:bookId' element={<Book />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

          <Route path="*" element={<Notfound />} />

        </Routes>

      </BrowserRouter>
    </Provider>
  </StrictMode>
)
