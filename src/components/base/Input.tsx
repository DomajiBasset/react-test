import React, { InputHTMLAttributes } from "react";
import { useTheme } from "../../reducer/ThemeContext";
import { getInputStyle } from "../../helpers/tool";

type Props = {
    id: string,
    type: string,
    className?: string,
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ id, type, className, ...rest }: Props) => {
    const { state: themeState, dispatch } = useTheme();
    const bgStyle = getInputStyle(themeState.color).background;
    const borderStyle = getInputStyle(themeState.color).border;
    const focusStyle = getInputStyle(themeState.color).focus;

    return (
        <>
            <input
                id={id}
                type={type}
                className={`rounded ${bgStyle} ${borderStyle} ${focusStyle} ${className}`}
                {...rest}
            />
        </>
    )
};