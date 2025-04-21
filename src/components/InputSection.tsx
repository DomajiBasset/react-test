import React, { useState } from "react";


type Props = {
    value: number;
    setValue: (val: number) => void;
    onClick: () => void;
    buttonLabel: string;
    disabled: boolean;
};

const InputSection = ({
    value,
    setValue,
    onClick,
    buttonLabel,
    disabled
}: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const isValid = /^\d*$/.test(newValue);
        if (isValid) {
            setValue(newValue === '' ? 0 : parseInt(newValue));
        }
    }

    return (
        <div className="flex items-center space-x-2">
            <input
                type="number"
                value={value}
                onChange={handleChange}
                readOnly={disabled}
            />
            <input
                type="button"
                value={buttonLabel}
                onClick={onClick}
                disabled={disabled}
            />
        </div>
    );
};

export default InputSection;