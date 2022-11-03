import React from 'react'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'
import PropTypes from 'prop-types'
import './Controls.css'

const Controls = ({ slidesLength, setCurrentIdx, currentIdx }) => {
	
	const isPrevDisabled = currentIdx === 0
	const isNextDisabled = currentIdx + 1 === slidesLength

	const prevHandler = () => {
		!isPrevDisabled && setCurrentIdx(prev => prev - 1)
	}
	const nextHandler = () => {
		!isNextDisabled && setCurrentIdx(prev => prev + 1)
	}

  return (
	<div className='text'>
		<button onClick={prevHandler} className='styleButton'>
			<HiChevronLeft size={26}/>
		</button>
		<button onClick={nextHandler} className='styleButton'>
			<HiChevronRight size={26}/>
		</button>
	</div>
  )
}


Controls.propTypes =
{
	slidesLength: PropTypes.number.isRequired,
	setCurrentIdx: PropTypes.func.isRequired,
	currentIdx: PropTypes.number.isRequired
}


export default Controls