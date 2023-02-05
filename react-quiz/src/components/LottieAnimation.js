import React from 'react';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
// import classes from './LottieAnimation.module.css';

const LottieAnimation = ({ fileType }) => {
	const container = useRef(null);
	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require(`../assets/${fileType}.json`),
		});
	}, [fileType]);

	return <div ref={container}></div>;
};
export default LottieAnimation;
