import React from "react";
import "./mainpage.css";
import "./formcomponents.css";
import LOGO_PATH from "./assets/tmc-logo.jpeg";
import Spacer from "./components/Spacer/Spacer";
import FormElement from "./components/FormElement/FormElement";

const MainPage: React.FC = () => {
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

			<div className="form-container">
				<div>
					<span className="asterisk">*</span>
					<span className="information"> </span>
					<span className="required">Required</span>
				</div>
				<div className="subheader">Send my report to:</div>

				<div id="checkbox-style">
					<FormElement
						labelText="CAIR"
						formType="checkbox"
					/>
					<FormElement
						labelText="DPSS"
						formType="checkbox"
					/>
					<FormElement
						labelText="ECRT"
						formType="checkbox"
					/>
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
			</div>
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
