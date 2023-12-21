import React, { CSSProperties } from 'react';
import { TextField } from '@mui/material';

interface TextfieldWithLabelProps {
    labelText: string;
}

const TextfieldWithLabel: React.FC<TextfieldWithLabelProps> = ({ labelText }) => {
    const labelStyle: CSSProperties = {
        color: '#a0aec0',
        fontSize: '15px',
        fontWeight: 'normal',
        fontFamily: 'Inter, sans-serif',
        textDecoration: 'underline',
    };

    const asteriskStyle: CSSProperties = {
        color: '#e3342f',
        fontSize: '15px',
        fontWeight: 'normal',
        fontFamily: 'Inter, sans-serif',
    };

    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
    };

    return (
        <div style={containerStyle}>
            <div>
                <span style={labelStyle}>{labelText}</span>
                <span style={asteriskStyle}>*</span>
            </div>
            <div>
                <TextField id="outlined-basic" variant="outlined" />
            </div>
        </div>
    );
};

export default TextfieldWithLabel;
