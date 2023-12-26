import React from "react";

type SpacerProps = {
	height: string | number; // Accepts either a string (like '20px' or '2rem') or a number
};

const Spacer: React.FC<SpacerProps> = ({ height }) => {
	const style = {
		height: typeof height === "number" ? `${height}px` : height,
	};

	return <div style={style} />;
};

export default Spacer;
