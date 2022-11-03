import React from 'react'
import Controls from './Controls/Controls'
import VideosLine from './videosLine/VideosLine'
import './Carusel.css'

import t1Img from '../../../../assets/images/t1Img.jpg'
import t2Img from '../../../../assets/images/t2Img.jpg'
import t3Img from '../../../../assets/images/t3Img.jpg'
import t4Img from '../../../../assets/images/t4Img.jpg'
import t5Img from '../../../../assets/images/t5Img.jpg'
import t6Img from '../../../../assets/images/t6Img.jpg'
import t7Img from '../../../../assets/images/t7Img.jpg'
import t8Img from '../../../../assets/images/t8Img.jpg'
import t9Img from	'../../../../assets/images/t9Img.jpg'

const initialSlides = [
	{
		_id: 'ewqe1',
		thumnailPath: t1Img,
		videoUrl: 'https://www.youtube.com/watch?v=U1mEhQJdTTk'
	},
	{
		_id: 'e2qhgfj',
		thumnailPath: t2Img,
		videoUrl: 'https://www.youtube.com/watch?v=LI9rlib4ZmQ&t=3708s'
	},
	{
		_id: 'b315c5g',
		thumnailPath: t3Img,
		videoUrl: 'https://www.youtube.com/watch?v=RKnZvz-lOzU'
	},
	{
		_id: 'lui56u',
		thumnailPath: t4Img,
		videoUrl: 'https://www.youtube.com/watch?v=73xInvveNQ8'
	},
	{
		_id: 'ead12',
		thumnailPath: t5Img,
		videoUrl: 'https://www.youtube.com/watch?v=Gy0mt36YvRs'
	},
	{
		_id: 'zcds2',
		thumnailPath: t6Img,
		videoUrl: 'https://www.youtube.com/watch?v=BzGA-hYwrG0'
	},
	{
		_id: 'ewqe1',
		thumnailPath: t7Img,
		videoUrl: 'https://www.youtube.com/watch?v=BzGA-hYwrG0'
	},
	{
		_id: '2ds1e',
		thumnailPath: t8Img,
		videoUrl: 'https://www.youtube.com/watch?v=BzGA-hYwrG0'
	},
	{
		_id: 'ewqe1',
		thumnailPath: t9Img,
		videoUrl: 'https://www.youtube.com/watch?v=BzGA-hYwrG0'
	}
]

const Carusel = () => {
	const [slides] = React.useState(initialSlides)
	const [currentIdx, setCurrentIdx] = React.useState(0)

  return (
	<div className='first'>
		<div className='second'>
			<div className='third'>1 series</div>
				<Controls
				slideLength={slides.length}
				setCurrentIdx={setCurrentIdx}
				currentIdx={currentIdx}
			/>
		</div>
			<VideosLine slides={slides}
			setCurrentIdx={setCurrentIdx}
			currentIdx={currentIdx}
		/>
	</div>
  )
}

export default Carusel