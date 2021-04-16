import { useEffect, useState } from 'react';
const Progress = () => {
	const [ state, setState ] = useState(0);
	const handleScroll = (event) => {
		const path = event.path || (event.composedPath && event.composedPath());
		// 30 is the missed size by the browser
		setState(path[1].scrollY / (document.body.scrollHeight - document.documentElement.clientHeight));
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div
			className="fixed top-0 left-0 bg-red h-1 z-50 transition-all duration-50 ease-out"
			style={{ transform: `scaleX(${state})`, width: '100%', transition: 'transform 20ms ease-in', transformOrigin: 'left' }}
		/>
	);
};
export default Progress;
