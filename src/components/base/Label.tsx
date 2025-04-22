import React from "react";

type Props = {
    htmlFor: string,
    children: React.ReactNode,
}

export const Label = ({ htmlFor, children }: Props) => (
    <label className="block text-gray-700 font-semibold mb-2" htmlFor={htmlFor}>
        {children}
    </label>
);