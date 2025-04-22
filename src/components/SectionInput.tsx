import React, { useState } from "react";

type Props = {
    value: number;
    setValue: (val: number) => void;
    onClick: () => void;
    buttonLabel: string;
    disabled: boolean;
};

const SectionInput = ({
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
                className="border border-gray-300 rounded px-2 py-1 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            />
            <input
                type="button"
                value={buttonLabel}
                onClick={onClick}
                disabled={disabled}
                className={`px-4 py-1 rounded text-white font-semibold transition 
                    ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'}`}
            />
        </div>
    );
};

export default SectionInput;