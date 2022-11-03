import React from 'react';
import Header from './header/Header';
import SocialMedia from './socialmedia/SocialMedia'
import './Layout.css';

import BgImage from '../../assets/images/backg.jpg'
import Modal from '../screens/home/Modal';

const Layout = ({children}) => {
  return (
	  <div className='p-10 relative bg-cover bg-no-repeat h-screen'
		  style={{backgroundImage: `url(${BgImage})`}}>
		<div className='gradient'></div>
		<div className='relative z-1'>
			<Header />
			<SocialMedia />
			<Modal />
			{children}
		</div>
	</div>
  )
}

export default Layout