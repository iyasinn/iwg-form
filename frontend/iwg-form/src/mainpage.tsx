<<<<<<< HEAD
import React from 'react';
import './mainpage.css';
import './formcomponents.css';
import imageSrc from './assets/tmc-logo.jpeg';
import CheckWithText from './components/checkwithtext';
import Spacer from './components/spacer';
import TextfieldWithLabel from './components/textfieldlabeled';
import SelectLabels from './components/selectmenu';

const MainPage: React.FC = () => {
    return (
        <main id="mainpage">
            <div className="form-container">
                {/* header-logo row div */}
                <div className="parent">
                    {/* header div */}
                    <div className="child">
                        <h1 className="form-heading">Report an Incident</h1>
                    </div>
                    {/* image div */}
                    <div className="child">
                        <img
                            style={{
                                maxWidth: '60px',
                                maxHeight: '61px',
                                height: 'auto',
                                width: 'auto',
                                flexShrink: 0
                            }}
                            src={imageSrc}
                            alt="Description"
                        />
                    </div>
                </div>
                
                <div>
                    <span className="asterisk">*</span>
                    <span className="information"> </span>
                    <span className="required">Required</span>
                </div>
                <Spacer height={20} />
                <div className="subheader">Send my report to:</div>
                <Spacer height={10} />
                <div className='parent'>
                    <div className="child">
                        <CheckWithText text="CAIR" />
                    </div>
                    <div className="child">
                        <CheckWithText text="DPSS" />
                    </div>
                    <div className="child">
                        <CheckWithText text="ECRT" />
                    </div>
                </div>
                <Spacer height={30} />
                <div className="subheader">Enter your Information:</div>
                <Spacer height={10} />
                <CheckWithText text= "Keep my report anonymous"/>
                <CheckWithText text= "I consent to give media my contact info"/>
                <Spacer height={30} />
                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='Umich Email' />
                    </div>
                    <div className="child">
                        <SelectLabels labelText='Affiliation'/>
                    </div>
                </div>
                <Spacer height={10}/>
                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='First Name' />
                    </div>
                    <div className="child">
                        <TextfieldWithLabel labelText='Last Name' />
                    </div>
                </div>
                <Spacer height={10}/>
                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='Phone' />
                    </div>
                    <div className="child">
                        <TextfieldWithLabel labelText='Zip' />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainPage;
=======
import React, {useRef} from "react";
import "./mainpage.css";
import "./formcomponents.css";

import LOGO_PATH from "./assets/tmc-logo.jpeg";
import Spacer from "./components/Spacer/Spacer";
import FormElement from "./components/FormElement/FormElement";

const MainPage: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
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

			<form ref={formRef} className="form-container" onSubmit={handleSubmit}>
				<div>
					<span className="asterisk">*</span>
					<span className="information"> </span>
					<span className="required">Required</span>
				</div>
				<div className="subheader">Send my report to:</div>

				<div id="checkbox-style">
					<FormElement labelText="CAIR" formType="checkbox" />
					<FormElement labelText="DPSS" formType="checkbox" />
					<FormElement labelText="ECRT" formType="checkbox" />
				</div>

				<Spacer height={20} />

				<div className="subheader">Enter your Information:</div>

				<div className="checkbox-style">
					<FormElement
						labelText="Keep my report anonymous"
						formType="checkbox"
					/>
					<FormElement
						labelText="I consent to give media my contact info"
						formType="checkbox"
					/>
				</div>

				<Spacer height={15} />

				<div className="row">
					<FormElement labelText="Umich Email" formType="text" />
					<FormElement
						labelText="Affilitation"
						formType="select"
						data={AffiliationList}
					/>
				</div>

				<div className="row">
					<FormElement labelText="First Name" formType="text" />
					<FormElement labelText="Last Name" formType="text" />
				</div>

				<div className="row">
					<FormElement labelText="Phone" formType="text" />
					<FormElement labelText="Zip" formType="text" />
				</div>

				<div className="row">
					<FormElement labelText="Street" formType="text" />
					<FormElement labelText="City" formType="text" />
					<FormElement
						labelText="State"
						formType="select"
						data={usStates}
					/>
				</div>

				<div className="row">
					<FormElement
						labelText="Religion"
						formType="select"
						data={religions}
					/>
					<FormElement labelText="Race/Ethnicity" formType="text" />
				</div>

				<Spacer height={20} />

				<div className="subheader">Tell us about the incident:</div>

				<div className="row">
					<FormElement
						labelText="Incident Location"
						formType="text"
					/>
					<FormElement
						labelText="Incident Date/Time"
						formType="time"
					/>
				</div>

				<div className="row">
					<FormElement
						labelText="Description of Incident"
						formType="multiline-text"
					/>
				</div>
				<div className="row">
					<FormElement labelText="Attach Evidence" formType="image" />
				</div>

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
		</main>
	);

};

export default MainPage;

const AffiliationList = ["UM Student", "Faculty", "Staff", "Alumni", "Visitor"];
const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
];
const religions = ["Islam", "Christianity", "Judaism", "Other"];
>>>>>>> 7ee2203661ec00b3b00eb10dcfa7b40b34a53c17
