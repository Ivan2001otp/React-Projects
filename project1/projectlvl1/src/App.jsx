import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavTag from './NavBar'
import FooterTag from './Footer'

export default function App(){
  return (
   <div>
    <div>
      <NavTag/>
    </div>

    <div>
      <FooterTag/>
    </div>
   </div>
  )
}
