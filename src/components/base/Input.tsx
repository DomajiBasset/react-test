import React, { InputHTMLAttributes } from "react";
import { useTheme } from "../../reducer/ThemeContext";
import { getInputStyle } from "../../helpers/tool";

type Props = {
    id: string,
    type: string,
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ id, type, placeholder, ...rest }: Props) => {
    const { state: themeState, dispatch } = useTheme();
    const bgStyle = getInputStyle(themeState.color, 'background');
    const borderStyle = getInputStyle(themeState.color, 'border');
    const focusStyle = getInputStyle(themeState.color, 'focus');

    return (
        <>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={`w-full px-4 py-2 rounded ${bgStyle} ${borderStyle} ${focusStyle}`}
                {...rest}
            />
        </>
    )
};