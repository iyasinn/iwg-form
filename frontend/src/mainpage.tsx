import React, {useRef, useState} from "react";
import "./mainpage.css";
// import "./formcomponents.css";
import LOGO_PATH from "./assets/tmc-logo.jpeg";
import Form from "./components/Form/Form"

const MainPage: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
	const [complete, onComplete] = useState(false);
	//const [value, onChange] = useState<Value>(new Date());

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (formRef.current) {
			const formData = new FormData(formRef.current);
			// const data = {};
            const data: { [key: string]: FormDataEntryValue } = {};
			formData.forEach((value, key) => {
				data[key] = value;
			});
			console.log(data); // Here you have your form data
			// Now you can handle the submission (e.g., send data to a server)
		}
	};

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
			
			<Form handleSubmit={handleSubmit} />

		</main>
	);
};

export default MainPage;
