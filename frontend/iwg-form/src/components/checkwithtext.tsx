import React from "react";

type CheckWithTextProps = {
    text: string; // You can replace 'any' with a more specific type if needed
};
const CheckWithText: React.FC<CheckWithTextProps> = ({ text }) => {
    return (
        <div className="check-with-text">
            <input type="checkbox" id="checkbox-id" />
            <label htmlFor="checkbox-id">{text.toString()}</label>
        </div>
    );
};

export default CheckWithText;