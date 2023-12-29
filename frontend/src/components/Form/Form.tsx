import React, { useState, useRef, useEffect } from "react";
import FormElement from "../FormElement/FormElement";
import axios from "axios";
import {
	InformationFormConfig,
	IncidentFormConfig,
} from "../../utils/formRowsConfig";
import Spacer from "../Spacer/Spacer";
import "./Form.css";

interface Form {}

const Form: React.FC<Form> = ({}) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [forms, setForms] = useState<{ [key: string]: boolean }>({});
	const [fields, setFields] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchForms = async () => {
			setIsLoading(true);
			try {
				// Replace with your API endpoint
				const response = await axios.get(
					"http://127.0.0.1:9000/get_forms"
				);

				// Check if the response status is OK (200)
				if (response.status !== 200) {
					throw new Error("Network response was not ok");
				}

				// Access the data property of the response
				const data = response.data;

				// Handle the data (e.g., console.log or set a state)
				// console.log(data);

				const newForm: { [key: string]: boolean } = {};

				for (const form of data["forms"]) {
					newForm[form] = true;
				}
				setForms(newForm);
			} catch (error) {
				// Handle any errors that occurred during the fetch
				console.error("ERROR", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchForms();
		// updateFields(Object.keys(forms));
	}, []); // Empty dependency array ensures this runs once on mount

	useEffect(() => {
		const updateFields = async (formsNeeded: string[]) => {
			const postData = { forms: formsNeeded };
			// console.log("POST DATA", postData);
			try {
				// Replace with your API endpoint
				const response = await axios.post(
					"http://127.0.0.1:9000/get_fields",
					postData
				);

				// Check if the response status is OK (200)
				if (response.status !== 200) {
					throw new Error("Network response was not ok");
				}
				// Parse the response as JSON
				const data = response.data["data"]["keys"];
				// Handle the data (e.g., console.log or set a state)
				// console.log("get_fields data", data);
				setFields(data);
			} catch (error) {
				console.error("ERROR", error);
			}
		};

		if (Object.keys(forms).length > 0) {
			updateFields(
				Object.keys(forms).filter((key) => forms[key] === true)
			);
		} else {
			setFields([]);
		}
	}, [forms]); // Dependency array with 'forms' state

	// * Handle submit
	const formatSubmitData = () => {
		const data: {
			data: { [key: string]: FormDataEntryValue | string | boolean };
			forms: string[];
		} = {
			data: {},
			forms: [],
		};

		if (formRef.current) {
			const formData = new FormData(formRef.current);

			formData.forEach((value, key) => {
				data["data"][key] = value;
			});
		}
		data["forms"] = Object.keys(forms).filter((key) => forms[key] == true);
		return data;
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const submit_data = formatSubmitData();

		console.log("Submit data", submit_data);

		try {
			// Replace with your API endpoint
			const response = await axios.post(
				"http://127.0.0.1:9000/submit_form",
				submit_data
			);
			// Parse the response as JSON
			const data = response.data;
			console.log("Response data", data);
		} catch (error: any) {
			console.log("Submit form error:", error.response.data);
			// console.error("ERROR", error);
		}
	};

	return (
		<form ref={formRef} className="form-container" onSubmit={handleSubmit}>
			<div>
				<span className="asterisk">*</span>
				<span className="information"> </span>
				<span className="required">Required</span>
			</div>
			<div className="subheader">Send my report to:</div>

			{/* Forms checkbox */}
			<div id="checkbox-style">
				{Object.entries(forms).map(([form_name, form_active]) => (
					<div key={form_name}>
						<input
							type="checkbox"
							id={form_name}
							onChange={() =>
								setForms((prevForms) => {
									return {
										...prevForms,
										[form_name]: !prevForms[form_name],
									};
								})
							}
							checked={form_active}
							required={!Object.values(forms).includes(true)}
						></input>
						<label htmlFor={form_name}>
							{form_name.toUpperCase()}
						</label>
					</div>
				))}
			</div>

			{/* Form selections! */}

			<Spacer height={20} />

			<div className="subheader">Enter your Information:</div>

			<Spacer height={15} />

			{/* Information section */}

			{loadSection(InformationFormConfig, fields)}

			<Spacer height={20} />

			<div className="subheader">Incident details:</div>

			{loadSection(IncidentFormConfig, fields)}

			<Spacer height={20} />

			<button id="submit-button">
				Submit
				<img
					id="send-symbol"
					src="/iconamoon_send-light.svg"
					alt="Send"
				/>
			</button>
		</form>
	);
};

export default Form;

const loadSection = (
	config: FormElement[][],
	visibleRowInputNames: string[]
) => {
	return (
		<>
			{config.map((row, rowIndex) => (
				<div className="row" key={rowIndex}>
					{row.map((element, elementIndex) => {
						if (
							!visibleRowInputNames.includes(
								element.formRefInputName
							)
						) {
							return null;
						}
						return (
							<FormElement
								labelText={element.labelText}
								formType={element.formType}
								formRefInputName={element.formRefInputName}
								data={element.data}
								key={elementIndex}
								defaultValue={element.defaultValue}
							></FormElement>
						);
					})}
				</div>
			))}
		</>
	);
};
