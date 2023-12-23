import React from "react";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./FormElement.css";

interface FormElement {
	labelText: string;
	formType: string;
	data?: string[];
}

const FormElement: React.FC<FormElement> = ({
	labelText,
	formType,
	data = [],
}) => {
	const [selection, setSelection] = React.useState("");
	const handleChange = (event: SelectChangeEvent) => {
		setSelection(event.target.value);
	};

	const getType = () => {
		if (formType === "text") {
			return (
				<TextField
					id="outlined-basic"
					variant="outlined"
					size="small"
					className="input-style"
				/>
			);
		} else if (formType === "select") {
			return (
				<FormControl
					sx={{ m: 0, minWidth: 0 }}
					size="small"
					className="input-style"
				>
					<Select
						value={selection}
						onChange={handleChange}
						displayEmpty
						inputProps={{ "aria-label": "Without label" }}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						{data.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			);
		} else if (formType === "time") {
			return <p>hello</p>;
		} else if (formType === "multiline-text") {
			return <TextField className="input-style" multiline rows={4} />;
		} else if (formType === "image") {
			return (
				<button className="image-button-style">
					<img
						src="/material-symbols_image-outline.svg"
						alt="Icon"
						className="icon-style"
					/>
					<span className="text-style">Choose image</span>
				</button>
			);
		} else if (formType === "checkbox"){
			return (
				<div className="check-with-text">
					<input type="checkbox" id="checkbox-id" defaultChecked={true}/>
					<label htmlFor="checkbox-id">{labelText}</label>
				</div>
			);
		}
		return <p>{formType} is not a valid type you dog</p>;
	};

	return (
		<div className="form-item">
			{formType !== "checkbox" && <span className="title-text">{labelText}</span>}
			{getType()}
		</div>
	);
};

export default FormElement;
