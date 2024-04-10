import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignIn from './routes/SignIn'
import Signup from './routes/Signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
