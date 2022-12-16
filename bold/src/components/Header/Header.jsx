import React from 'react'
import s from './Header.module.css'
import logo from '../../assets/images/bold-logo.png'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <header className={s.header}>
        <div>
          <img src={logo} alt="Logo" className={s.logo}/>
          <Navbar />
        </div>     
    </header>
  )
}

export default Header