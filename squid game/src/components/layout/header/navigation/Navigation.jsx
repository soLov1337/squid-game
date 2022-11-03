import React from 'react'
import './Nav.css'

import { list } from './list'
import netflixLogo from '../../../../assets/images/netflix.png'
import { Link } from 'react-router-dom'

const Navigation = () => {
	

	return (
	<ul className='ul-nav'>
			{list.map((title, idx) => (
				<li key={title} className='li-nav'>
					{idx !== 2 ?
						<Link to={`/${title.toLowerCase()}`} className='link-nav'>
							{title}
						</Link> : (<img src={netflixLogo} alt='alt' className='logo' />)}
				</li>
			))}  
	</ul>
	)
}

export default Navigation