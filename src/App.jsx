import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Biodata from './pages/Biodata'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'

export default function App() {

  // membuat state login dengan defaul False
  const [isLogin, setIsLogin] = useState(false);

  // check apakah datanya ada di local storage
  useEffect(() => {
    const user = localStorage.getItem("user");

    // mengecek apakah data user ada 
    if (user) {
      return setIsLogin(true)
    }
    setIsLogin(false)

  }, [])

  // Jika Kondisi login bernilai benar (true) maka akan ke halaman dashboard
  if (isLogin) {
    return (
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/biodata' element={<Biodata />} />
        <Route path='*' element={<NotFound />} />
      </Routes >
    )
  }

  // jika salah (false) makan akan ke halaman login, home, contact, about, dan not found
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}


