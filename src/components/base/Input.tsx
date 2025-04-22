import React, { InputHTMLAttributes } from "react";

type Props = {
    id: string,
    type: string,
    placeholder?: string,
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ id, type, placeholder, ...rest }: Props) => (
    <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...rest}
    />
);