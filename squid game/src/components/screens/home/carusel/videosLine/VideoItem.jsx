import React from 'react'
import PropTypes from 'prop-types'
import PlayButton from './PlayButton'
import './Video.css'

const VideoItem = ({ slide, isActive, clickHandler}) => {
  return (
	<button onClick={clickHandler}
		className={`block relative mr-8 transiti duration-300 ease-in-out ${ isActive ? 'w-50 h-full' : 'w-30 h-20'}`}
		>
		{isActive && <PlayButton/> }
		  <img src={slide.thumnailPath} className='bg-cover bg-no-repeat bg-center h-full' />
	</button>
  )
}


VideoItem.propTypes =
{
	slides: PropTypes.object.isRequired,
	isActive: PropTypes.bool.isRequired,
	clickHandler: PropTypes.func.isRequired
}

export default VideoItem