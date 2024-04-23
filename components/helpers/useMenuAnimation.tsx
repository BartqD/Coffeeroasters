import { useState, useEffect } from 'react'
import { useAnimate, stagger } from 'framer-motion'

const staggerMenuItems = stagger(0.2, { startDelay: 0.15 })

export function useMenuAnimation(active: boolean) {
	const [scope, animate] = useAnimate()


	useEffect(() => {
		if(!active){
		animate('.link', active ? { opacity: 1 } : { opacity: 0 }, {
			duration: 0.5,
			delay: active ? staggerMenuItems : 0,
		})}
	}, [active])

	return scope
}
