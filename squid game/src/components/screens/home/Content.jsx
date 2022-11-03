import React from 'react'
import './Content.css'

import logoImg from '../../../assets/images/squidgame.png'
import objectImg from '../../../assets/images/object.png'

const Content = () => {
  return (
	<div className='global-con'>
		<img alt='' src={logoImg} draggable={false} className='logo-con' />
		<div className='object-con'>
			<img alt='' src={objectImg} draggable={false} className='object-img' />
			<p>
				Once you start the game, there is no turning back. The winner is alone, the loser only faces death.
			</p>
		</div>
	</div>
  )
}

export default Content