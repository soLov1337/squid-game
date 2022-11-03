import React from 'react'
import LogoImg from '../../../assets/images/logosquid.png'

const link = [{link:'/'}]

const Logo = () => {
	return (
	<div>
			{link.map(({ link }) =>
				<a href={link}> <img src={LogoImg} width='150' alt=''/>  </a>
			)}
	</div>
  )
}
export default Logo