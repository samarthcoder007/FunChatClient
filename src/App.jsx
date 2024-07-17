import React from 'react'
import {Router,Route, Routes} from "react-router-dom"
import Home from './components/Home/Home'
import Chat from './components/Chat/Chat'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/chat' element={<Chat/>}/>
    </Routes>
  )
}

export default App