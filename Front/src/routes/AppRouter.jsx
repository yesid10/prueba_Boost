import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Layout/Navbar'
import Welcome from '../components/welcome/Welcome'
import ListProducts from '../components/products/ListProducts'
import Contact from '../components/contact/Contact'
import Singing from '../components/singin/Singing'
import { AuthProvider } from '../context/AuthContext'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Singing />} />
          <Route element={<Navbar />}>
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/products' element={<ListProducts />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </AuthProvider>

    </BrowserRouter>
  )
}

export default AppRouter