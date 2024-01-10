import React from "react";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ToolTipp from "../ToolTip/ToolTip";
import "./FormElement.css";

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
            style={{ display: "none" }}
            name={formRefInputName}
          />
        </label>
      );
    }
    return <p>{formType} is not a valid type</p>;
  };

  return (
    <div className="form-item">
      {formType !== "checkbox" && (
        <ToolTipp
          toolTipText="We won't share your name or any identifying information."
          children={<p className="title-text">{labelText}</p>}
        ></ToolTipp>
      )}
      {getType()}
    </div>
  );
}
