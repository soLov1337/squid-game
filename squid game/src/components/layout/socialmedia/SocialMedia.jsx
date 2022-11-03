import React from 'react'
import { SiInstagram, SiYoutubestudio, SiTwitter } from 'react-icons/si'
import './SocialMedia.css'

const SocialMedia1 = [
	{
		icon: <SiInstagram size={17} className='styleIcon' />,
		link: '/inst',

	},
	{
		icon: <SiYoutubestudio size={17} className='styleIcon' />,
		link: '/yuotube',
	},
	{
		icon: <SiTwitter size={17} className='styleIcon' />,
		link: '/twit',
	}
]

const SocialMedia = () => {
  return (
		<div className='global-social'>
		  {SocialMedia1.map(({ icon, link }) =>
			<a
				className='social'
				key={link}
				href={link}

			>
			{icon}
		 </a>
		)}
		</div>
	)
}

export default SocialMedia