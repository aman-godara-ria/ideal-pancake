import React, { useState, useEffect } from "react";

function MouseTracker() {
	const [isTracking, setIsTracking] = useState(true);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event) => {
		if (isTracking) {
			setPosition({ x: event.clientX, y: event.clientY });
		}
	};

	useEffect(() => {
		// Add event listener to track mouse movement
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			// Cleanup the event listener when the component unmounts
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div>
			<h1>Mouse Position: {`X: ${position.x}, Y: ${position.y}`}</h1>
			<button
				onClick={() => {
					setIsTracking(!isTracking);
				}}
				className={isTracking ? "tracking" : "no-tracking"}
			>
				{isTracking ? "Stop Tracking" : "Start Tracking"}
			</button>
		</div>
	);
}

export default MouseTracker;
