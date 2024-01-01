import React from "react";
import "./mainpage.css";
// import "./formcomponents.css";
import LOGO_PATH from "./assets/tmc-logo.jpeg";
import Form from "./components/Form/Form"

const MainPage: React.FC = () => {
    // const formRef = useRef<HTMLFormElement>(null);
	// const [complete, onComplete] = useState(false);
	//const [value, onChange] = useState<Value>(new Date());



	return (
		<main id="mainpage">
			<div className="parent">
				<h1 className="form-heading">Report an Incident</h1>
				<img
					style={{
						maxWidth: "60px",
						maxHeight: "61px",
						height: "auto",
						width: "auto",
						flexShrink: 0,
					}}
					src={LOGO_PATH}
					alt="Description"
				/>
			</div>
			
			<Form />

		</main>
	);
};

export default MainPage;
