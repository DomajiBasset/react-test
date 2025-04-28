
import React, { ButtonHTMLAttributes, useState } from "react";
import { useTheme } from "../../reducer/ThemeContext";
import { getSubmitButtonStyle } from "../../helpers/tool";
import { useTranslation } from "react-i18next";
import { LoginDialog } from "./Dialog";
import { useDialog } from "../../reducer/DialogContext";

type SubmitProps = {
    textCode: string
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const SubmitButton = ({ textCode, className = '', ...rest }: SubmitProps) => {
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
    );
};

type LoginProps = {
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const LoginButton = ({ className = '', ...rest }: LoginProps) => {
    const { state: themeState } = useTheme();
    const { t } = useTranslation(themeState.namespace);
    const { dispatch } = useDialog();

    const handleClick = () => {
        dispatch({ type: 'OPEN_DIALOG' });
    };
    const bgStyle = getSubmitButtonStyle(themeState.color).background;
    const fontStyle = getSubmitButtonStyle(themeState.color).font;
    const hoverStyle = getSubmitButtonStyle(themeState.color).hover;
    const focusStyle = getSubmitButtonStyle(themeState.color).focus;

    return (
        <>
            <button
                type="submit"
                className={`px-2 py-1 rounded transition-colors ${bgStyle} ${fontStyle} ${hoverStyle} ${focusStyle} ${className}`}
                onClick={handleClick}
                {...rest}
            >
                {t("LOGIN")}
            </button>
            <LoginDialog />
        </>
    );
};