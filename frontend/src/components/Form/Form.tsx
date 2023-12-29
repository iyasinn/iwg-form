import React, { useState, useRef } from "react";
import FormElement from "../FormElement/FormElement";
import {
	InformationFormConfig,
	IncidentFormConfig,
} from "../../utils/formRowsConfig";
import Spacer from "../Spacer/Spacer";
import CheckboxGroup from "../CheckboxGroup/Checkboxes";
import "./Form.css";

interface Form {
	// handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Form> = ({}) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [submitForms, setSubmitForms] = useState(FormsToSubmit);
	const [privacyData, setPrivacyData] = useState(PrivacyDataCheckboxes)

	// * Handle submit
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const data: { [key: string]: FormDataEntryValue | boolean } = {};

		if (formRef.current) {
			const formData = new FormData(formRef.current);

			formData.forEach((value, key) => {
				data[key] = value;
			});

			for (const key in submitForms) {
				if (submitForms.hasOwnProperty(key)) {
					data[key] = submitForms[key];
				}
			}
			console.log(submitForms.length);
			console.log(submitForms);
			console.log(data); // Here you have your form data
			// Now you can handle the submission (e.g., send data to a server)
		}
	};

	const loadSection = (config: FormElement[][]) => {
		return (
			<>
				{config.map((row, rowIndex) => (
					<div className="row" key={rowIndex}>
						{row.map((element, elementIndex) => (
							<FormElement
								labelText={element.labelText}
								formType={element.formType}
								formRefInputName={element.formRefInputName}
								data={element.data}
								key={elementIndex}
							></FormElement>
						))}
					</div>
				))}
			</>
		);
	};

	return (
		<form ref={formRef} className="form-container" onSubmit={handleSubmit}>
			<div>
				<span className="asterisk">*</span>
				<span className="information"> </span>
				<span className="required">Required</span>
			</div>
			<div className="subheader">Send my report to:</div>

			{/* Form selections! */}

			{/* <div id="checkbox-style ">
				{Object.keys(submitForms).map((form) => (
					<div key={form}>
						<input
							type="checkbox"
							name={form}
							id={form}
							checked={submitForms[form]}
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>
							) => {
								setSubmitForms((submitForms) => ({
									...submitForms,
									[event.target.name]: event.target.checked,
								}));
							}}
						/>
						<label htmlFor={form} key={form}>
							{form.toUpperCase()}
						</label>
					</div>
				))}
			</div> */}

			<CheckboxGroup value={submitForms} setValue={setSubmitForms}></CheckboxGroup>

			<Spacer height={20} />

			<div className="subheader">Enter your Information:</div>

			{/* <div className="checkbox-style">
				<FormElement
					labelText="Keep my report anonymous"
					formType="checkbox"
					formRefInputName=""
				/>
				<FormElement
					labelText="I consent to give media my contact info"
					formType="checkbox"
					formRefInputName="consent_media"
				/>
			</div> */}

			<CheckboxGroup value={privacyData} setValue={setPrivacyData}></CheckboxGroup>

			<Spacer height={15} />

			{/* Information section */}

			{loadSection(InformationFormConfig)}

			<Spacer height={20} />

			<div className="subheader">Incident details:</div>

			{loadSection(IncidentFormConfig)}

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

interface IFormsToSubmit {
	[key: string]: boolean;
}

// Directly define checkForms as an object
const FormsToSubmit: IFormsToSubmit = {
	cair: true,
	dpss: true,
	ecrt: true,
};

const PrivacyDataCheckboxes: IFormsToSubmit = {
	"Keep my report anonymous": true, 
	"I consent to give media my contact info": true
}

const FormsSet : Set<string> = new Set(["hi"])