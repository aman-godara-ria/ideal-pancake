import React, { useState, useEffect, useRef } from "react";

function MouseTrackerUseRef() {
	const [isTracking, setIsTracking] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const isTrackingRef = useRef(isTracking);

	useEffect(() => {
		isTrackingRef.current = isTracking;
	}, [isTracking]);

	const handleMouseMove = (event) => {
		if (isTrackingRef.current) {
			setPosition({ x: event.clientX, y: event.clientY });
		}
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []); // No need for state variables in the dependency array

	return (
		<div>
			<h1>Mouse Position: {`X: ${position.x}, Y: ${position.y}`}</h1>
			<button
				onClick={() => setIsTracking(!isTracking)}
				className={isTracking ? "tracking" : "no-tracking"}
			>
				{isTracking ? "Stop Tracking" : "Start Tracking"}
			</button>
		</div>
	);
}

export default MouseTrackerUseRef;
