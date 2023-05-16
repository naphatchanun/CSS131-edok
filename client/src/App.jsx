import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubar from './Components/Menubar'
import HomeGPABeU from './HomeGPABeU'
import { Route, Routes } from 'react-router-dom'
import GPApage from './gpapage'
import Thegoal from './Thegoal'
import Contact from './Contact'


function App() {
 

  return (
    <>
      <Menubar/>
      <Routes>
        <Route path='/' element={<HomeGPABeU/>}/>
        <Route path='/GPApage' element={<GPApage/>}/>
        <Route path='/TheGoalpage' element={<Thegoal/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
