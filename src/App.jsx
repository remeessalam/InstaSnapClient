import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Register from './pages/Register'
import Login from './pages/login'
import { GoogleOAuthProvider } from '@react-oauth/google';
export default function App() {


  return (
    <>
      <GoogleOAuthProvider clientId='1085217579810-hvh9gblfu6a1mpamaibpgfurk3t2mamm.apps.googleusercontent.com'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/createaccount' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  )
}

