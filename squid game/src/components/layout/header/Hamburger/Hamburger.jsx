import React from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import './Hamburger.css'

const Hamburger = () => {
	const [isShow, setIsShow] = React.useState(false)

	return (
	<div className='hamb'>
			<button onClick={() => setIsShow(!isShow)}>
				<HiOutlineMenuAlt3 size={40} color="white" />
			</button>
			{isShow && (
				<ul className='globalul'>
					{Array(5).fill('').map((_, idx) => (
						<li className='li' key={`hamb ${idx}`}>
							<a>{ `Item ${idx}`}</a>
						</li>
					))}
				</ul>
			) }
			
	</div>
	)
}

export default Hamburger