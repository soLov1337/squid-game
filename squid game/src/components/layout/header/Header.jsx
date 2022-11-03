import React from 'react'
import Hamburger from './Hamburger/Hamburger'
import Logo from './Logo'
import Navigation from './navigation/Navigation'
import './Header.css'

const Header = () => {
  return (
	<div className='header'>
		<Logo />
		<Navigation />
		<Hamburger />
	</div>
  )
}

export default Header