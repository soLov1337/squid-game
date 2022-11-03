import React from 'react'

import soldImg from '../../../assets/images/soldier.png'

const Soldier = () => {
  return (
	<div className='absolute -bottom-9 -right-7 '>
		<img draggable={false} alt='' src={soldImg} width={950} />
	</div>
  )
}

export default Soldier