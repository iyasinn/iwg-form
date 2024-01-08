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

export default function ToolTipp({
  toolTipText,
  children,
}: {
  toolTipText: string;
  children: ReactElement<any, any>;
}) {
  return (
    <HtmlTooltip
      placement="right"
      title={<React.Fragment>{toolTipText}</React.Fragment>}
    >
      {children}
    </HtmlTooltip>
  );
}
