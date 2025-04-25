
import React, { ButtonHTMLAttributes, useState } from "react";
import { useTheme } from "../../reducer/ThemeContext";
import { getSubmitButtonStyle } from "../../helpers/tool";
import { useTranslation } from "react-i18next";
import Dialog, { LoginDialog } from "./Dialog";

type SubmitProps = {
    textCode: string
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

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
    )
};

type LoginProps = {
    textCode: string
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const LoginButton = ({ textCode, className = '', ...rest }: LoginProps) => {
    const { state: themeState } = useTheme();
    const { t } = useTranslation(themeState.namespace);
    const [showDialog, setShowDialog] = useState(false);

    const handleClick = () => {
        setShowDialog(true);
    };
    const bgStyle = getSubmitButtonStyle(themeState.color).background;
    const fontStyle = getSubmitButtonStyle(themeState.color).font;
    const hoverStyle = getSubmitButtonStyle(themeState.color).hover;
    const focusStyle = getSubmitButtonStyle(themeState.color).focus;

    return (
        <>
            <button
                type="submit"
                className={`rounded transition-colors ${bgStyle} ${fontStyle} ${hoverStyle} ${focusStyle} ${className}`}
                onClick={handleClick}
                {...rest}
            >
                {t(textCode)}
            </button>
            <LoginDialog
                isOpen={showDialog}
                size="extraLarge2"
                onCancel={() => setShowDialog(false)}
                onConfirm={() => {
                    setShowDialog(false);
                }}
            />
        </>
    )
};