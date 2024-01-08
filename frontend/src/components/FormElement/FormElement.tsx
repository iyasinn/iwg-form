import React from "react";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import Tooltip from "@mui/material/Tooltip"
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import "./FormElement.css";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: "14px",
  },
}));

export default function FormElement({
  labelText,
  formType,
  data,
  defaultValue,
  formRefInputName,
}: {
  labelText: string;
  formType: string;
  data?: string[];
  defaultValue?: string;
  formRefInputName: string;
}) {
  const [selection, setSelection] = React.useState(defaultValue);

  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value);
  };

  const getType = () => {
    if (formType === "text") {
      return (
        <TextField
          name={formRefInputName}
          id="outlined-basic"
          variant="outlined"
          size="small"
          className="input-style"
          required={true}
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
            name={formRefInputName}
            required={true}
          >
            {defaultValue ? (
              <MenuItem value="Michigan">Michigan</MenuItem>
            ) : (
              <MenuItem value="">None</MenuItem>
            )}

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
      return (
        <TextField
          className="input-style"
          multiline
          rows={4}
          name={formRefInputName}
          required={true}
        />
      );
    } else if (formType === "image") {
      return (
        <label className="image-button-style">
          <img
            src="/material-symbols_image-outline.svg"
            alt="Icon"
            className="icon-style"
          />
          <span className="text-style">Choose image</span>
          <input
            type="file"
            accept="image/*"
            // onChange={handleFileChange}
            style={{ display: "none" }}
            name={formRefInputName}
          />
        </label>
      );
    }
    // else if (formType === "checkbox") {
    // 	return (
    // 		<div className="check-with-text">
    // 			<input
    // 				type="checkbox"
    // 				id={labelText}
    // 				defaultChecked={true}
    // 				name={labelText}
    // 				// onChange={handleCheckboxChange}
    // 				// value={checkboxValue}
    // 			/>
    // 			<label htmlFor={labelText}>{labelText}</label>
    // 		</div>
    // 	);
    // }
    return <p>{formType} is not a valid type you dog</p>;
  };

  return (
    <div className="form-item">
      {formType !== "checkbox" && (
        <HtmlTooltip
          placement="right"
          title={
            <React.Fragment>
              {/* <Typography color="inherit">
								Tooltip with HTML
							</Typography> */}
              {/* <em>{"And here's"}</em> <b>{"some"}</b>{" "} */}
              {/* <u>{"amazing content"}</u>.{" "} */}
              {"We won't share your name or any identifying information."}
            </React.Fragment>
          }
        >
          <p className="title-text">{labelText}</p>
        </HtmlTooltip>
      )}
      {getType()}
    </div>
  );
}
