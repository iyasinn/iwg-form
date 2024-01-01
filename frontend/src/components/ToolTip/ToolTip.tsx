import React, { ReactElement } from "react";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

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

interface FormElement {
	toolTipText: string;
	children: ReactElement<any, any>;
}

const FormElement: React.FC<FormElement> = ({ toolTipText, children }) => {
	return (
		<HtmlTooltip
			placement="right"
			title={<React.Fragment>{toolTipText}</React.Fragment>}
		>
			{children}
		</HtmlTooltip>
	);
};

export default FormElement;
