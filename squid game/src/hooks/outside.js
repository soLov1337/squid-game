import { useModal } from "../components/ModalProvider";
import { useEffect, useRef, useState } from "react";

export const useOutside = (isVisible) => {
	const { setVideoUrl } = useModal()

	const [isShow, setIsShow] = useState(isVisible)
	const ref = useRef(null)

	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
			setVideoUrl('')
		}
	}


	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return { ref, isShow, setIsShow }
}