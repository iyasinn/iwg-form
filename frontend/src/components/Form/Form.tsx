import React, { useState, useRef, useEffect } from "react";
import FormElement from "../FormElement/FormElement";
import axios from "axios";
import {
	InformationFormConfig,
	IncidentFormConfig,
	checkboxDataConfig,
} from "../../utils/formRowsConfig";
import Spacer from "../Spacer/Spacer";
import "./Form.css";
import ToolTip from "../ToolTip/ToolTip";
interface Form {}

// const URL : string = "https://iwg-form-backend.vercel.app"
const URL: string = "http://127.0.0.1:5000";

const Form: React.FC<Form> = ({}) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [forms, setForms] = useState<{ [key: string]: boolean }>({});
	const [fields, setFields] = useState<string[]>([]);
	const [checkboxData, setCheckboxData] = useState<{
		[key: string]: boolean;
	}>({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchForms = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(
					`${URL}/get_forms`,
					{
						headers: {
							"Content-Type": "application/json",
							// Additional headers if needed
						},
					}
				);

				const data = response.data;
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

		// const data = checkboxDataConfig.map((item) => item.initialize_data);
		// const checkboxInitialData = Object.assign({}, ...data);
		const checkboxInitialData = Object.assign(
			{},
			...checkboxDataConfig.map((item) => item.initialize_data)
		);
		setCheckboxData(checkboxInitialData);
		// Now we need to iterate through and udpdate checkBoxData
	}, []); // Empty dependency array ensures this runs once on mount

	// * When we update forms, then the fields need to change! The fields show what inputs display
	// * Forms show which forms display.
	useEffect(() => {
		const updateFields = async (formsNeeded: string[]) => {
			const postData = { forms: formsNeeded };
			// console.log("POST DATA", postData);
			try {
				// Replace with your API endpoint
				const response = await axios.post(
					`${URL}/get_fields`,
					postData,
					{
						headers: {
							"Content-Type": "application/json",
							// Additional headers if needed
						},
					}
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
			data: {
				[key: string]: FormDataEntryValue | string | boolean | any;
			};
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

		Object.entries(checkboxData).forEach(([key, value]) => {
			data["data"][key] = value;
		});

		data["forms"] = Object.keys(forms).filter((key) => forms[key] == true);
		return data;
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setIsLoading(true);
		const submit_data = formatSubmitData();
		console.log("Submit data", submit_data);

		try {
			// Replace with your API endpoint
			const response = await axios.post(
				`${URL}/submit_form`,
				submit_data,
				{
					headers: {
						"Content-Type": "application/json",
						// Additional headers if needed
					},
				}
			);
			// Parse the response as JSON
			const data = response.data;
			console.log("Response data", data);
		} catch (error: any) {
			console.log("Submit form error:", error.response.data);
			// console.error("ERROR", error);
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) {
		// return (
		// 	<img className="form-container" src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952kqaz9oyscryqv4hzi7gj3yetccv96vuqesw5af73&ep=v1_gifs_search&rid=200w.gif&ct=g" />
		// );
	}

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

			<div className="row">
				{checkboxDataConfig.map((element: any) => {
					if (
						!Object.keys(element.initialize_data).every((key) =>
							fields.includes(key)
						)
					) {
						return null;
					}

					return (
						<div id="checkbox-style" key={element.labelText}>
							<input
								type="checkbox"
								id={element.labelText}
								onChange={() => {
									Object.keys(element.initialize_data).map(
										(key) => {
											setCheckboxData((prev) => {
												return {
													...prev,
													[key]: !prev[key],
												};
											});
										}
									);
								}}
							></input>
							<ToolTip toolTipText={element.toolTipText}>
								<label htmlFor={element.labelText}>
									{element.labelText}
								</label>
							</ToolTip>
						</div>
					);
				})}
			</div>

			<Spacer height={15} />

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
