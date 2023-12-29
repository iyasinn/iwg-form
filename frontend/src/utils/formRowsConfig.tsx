import FormElement from "../components/FormElement/FormElement";
// src/config/formRowsConfig.tsx

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
	// "Michigan",
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

export const InformationFormConfig: FormElement[][] = [
	// First row - Email and Affiliation
	[
		{
			labelText: "Umich Email",
			formType: "text",
			formRefInputName: "email",
		},
		{
			labelText: "Affiliation",
			formType: "select",
			formRefInputName: "affiliation",
			data: AffiliationList,
		},
	],
	// Second row - First Name and Last Name
	[
		{
			labelText: "First Name",
			formType: "text",
			formRefInputName: "first_name",
		},
		{
			labelText: "Last Name",
			formType: "text",
			formRefInputName: "last_name",
		},
	],
	// Third row - Phone and Zip
	[
		{ labelText: "Phone", formType: "text", formRefInputName: "phone" },
		{ labelText: "Zip", formType: "text", formRefInputName: "zip" },
	],
	// Fourth row - Street, City, and State
	[
		{ labelText: "Address", formType: "text", formRefInputName: "address" },
		{ labelText: "City", formType: "text", formRefInputName: "city" },
		{
			labelText: "State",
			formType: "select",
			formRefInputName: "state",
			data: usStates,
			defaultValue: "Michigan",
		},
	],
	// Fifth row - Religion and Race/Ethnicity
	[
		{
			labelText: "Religion",
			formType: "select",
			formRefInputName: "religion",
			data: religions,
		},
		{
			labelText: "Race/Ethnicity",
			formType: "text",
			formRefInputName: "race_ethnic_background",
		},
	],
];

export const IncidentFormConfig: FormElement[][] = [
	// First row - Email and Affiliation
	[
		{
			labelText: "Incident Location",
			formType: "text",
			formRefInputName: "incident_location",
		},
		{
			labelText: "Incident Date/Time",
			formType: "time",
			formRefInputName: "incident_time",
		},
	],
	// Second row - First Name and Last Name
	[
		{
			labelText: "Description of Incident",
			formType: "multiline-text",
			formRefInputName: "incident_details",
		},
	],
	[
		{
			labelText: "Attach Evidence",
			formType: "image",
			formRefInputName: "incident_evidence",
		},
	],
];
