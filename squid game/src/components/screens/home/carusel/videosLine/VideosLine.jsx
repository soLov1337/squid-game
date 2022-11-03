import React from 'react'
import PropTypes from 'prop-types'
import './Video.css'
import VideoItem from './VideoItem'
import { useModal } from '../../../../ModalProvider'

const VideosLine = ({ slides, setCurrentIdx, currentIdx }) => {
	const {setVideoUrl} = useModal()
	
	const playHandler = (idx, videoUrl) => {
		setCurrentIdx(idx)
		setVideoUrl(videoUrl)
	}

	const count = currentIdx * 170

	return (
		<div className='flex items-end h-32 transition-all duration-300 ease-linear'
		style={{transform: currentIdx ? `translateX(-${count}px)` : '' }}>
			{slides.map((slide, idx) => {
				const isActive = currentIdx === idx

				return (
					<VideoItem key={slide._id}
					slide={slide}
					isActive={isActive}
					clickHandler={() => playHandler(idx, slide.videoUrl)}
					/>
				)
			})}
		</div>
	)
}


VideosLine.propTypes =
{
	slides: PropTypes.array.isRequired,
	setCurrentIdx: PropTypes.func.isRequired,
	currentIdx: PropTypes.number.isRequired
}

export default VideosLine