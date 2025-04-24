
import React, { ButtonHTMLAttributes } from "react";
import { useTheme } from "../../reducer/ThemeContext";
import { getSubmitButtonStyle } from "../../helpers/tool";
import { useTranslation } from "react-i18next";

type Props = {
    textCode: string
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const SubmitButton = ({ textCode, className = '', ...rest }: Props) => {
    const { state: themeState } = useTheme();
    const { t } = useTranslation(themeState.namespace);
    const bgStyle = getSubmitButtonStyle(themeState.color).background;
    const fontStyle = getSubmitButtonStyle(themeState.color).font;
    const hoverStyle = getSubmitButtonStyle(themeState.color).hover;
    const focusStyle = getSubmitButtonStyle(themeState.color).focus;

    return (
        <>
            <button
                type="submit"
                className={`rounded transition-colors ${bgStyle} ${fontStyle} ${hoverStyle} ${focusStyle} ${className}`}
                {...rest}
            >
                {t(textCode)}
            </button>
        </>
    )
};