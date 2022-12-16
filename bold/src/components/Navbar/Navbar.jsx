import React from 'react'
import s from './Navbar.module.css'
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <a href='#'>Mi negocio</a>
      <a className={s.withLogo} href='#'>Ayuda <Icon width="24px" color="white" icon="mdi:help-circle-outline" style={{paddingRight: '5px'}} /></a>
    </nav>
  )
}

export default Navbar