import React, { SetStateAction, Dispatch } from "react";

interface CheckboxGroupProps {
	value: { [key: string]: boolean };
	// setValue: (
	// 	value:
	// 		| { [key: string]: boolean }
	// 		| ((prevValue: { [key: string]: boolean }) => {
	// 				[key: string]: boolean;
	// 		  })
	// ) => void;
	setValue: any;
}

// Define the generic CheckboxGroup component
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ value, setValue }) => {
	// Component logic and JSX go here
	return (
		<div id="checkbox-style ">
			{Object.keys(value).map((form) => (
				<div key={form}>
					<input
						type="checkbox"
						name={form}
						id={form}
						checked={value[form]}
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>
						) => {
							setValue((value: any) => ({
								...value,
								[event.target.name]: event.target.checked,
							}));
						}}
					/>
					<label htmlFor={form} key={form}>
						{form}
					</label>
				</div>
			))}
		</div>
	);
};

export default CheckboxGroup;
