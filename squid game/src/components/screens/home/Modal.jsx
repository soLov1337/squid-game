import React from 'react'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useOutside } from '../../../hooks/outside'
import { useModal } from '../../ModalProvider'

const Modal = () => {
	const {videoUrl} = useModal()
	const {ref, isShow, setIsShow} = useOutside(true)

	useEffect(() => {
		if(videoUrl && !isShow) setIsShow(true)
	})

	if(!isShow) return null

  return (
	  <div ref={ref} className='fixed top-1/4 left-1/4 w-1/2 h-92 flex items-center justify-center z-10 keyframe'>
		  <ReactPlayer url={videoUrl} />
	 </div>
  )
}

export default Modal