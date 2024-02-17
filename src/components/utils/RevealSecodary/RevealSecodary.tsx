import React, {useEffect, useRef} from "react";
import { motion, useInView, useAnimation} from "framer-motion";

interface Props {
	children: JSX.Element;
	width?: "fit-content" | "100%";
}

export const RevealSecodary = ({ children, width = "fit-content"}: Props) => {
	const ref = useRef(null); 
	const isInView = useInView(ref, {once: true});
	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			console.log(true);
			mainControls.start("visible");

		}
	}, [isInView])

	return (
		<div className="animation-div" ref={ref} style={{position: "relative", width}}>
			<motion.div
				variants={{
					hidden: {opacity: 0, y: 100},
					visible: {opacity: 1, y: 0},
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				{children}
			</motion.div>

		</div>
	);
};