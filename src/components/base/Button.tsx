
import React, { ButtonHTMLAttributes, useEffect, useState } from "react";
import { useTheme } from "../../reducer/ThemeContext";
import { getSubmitButtonStyle } from "../../helpers/tool";
import { useTranslation } from "react-i18next";
import { ConfirmDialog, LoginDialog } from "./Dialog";
import { useDialog } from "../../reducer/DialogContext";
import { useNamespace } from "../../reducer/NameSpaceContext";

type SubmitProps = {
    textCode: string
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const SubmitButton = ({ textCode, className = '', ...rest }: SubmitProps) => {
    const { state: themeState } = useTheme();
    // const { t } = useTranslation(themeState.namespace);
    const ns = useNamespace();
    const { t } = useTranslation(ns);
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
    // const { t } = useTranslation(themeState.namespace);
    const ns = useNamespace();
    const { t } = useTranslation(ns);
    const { state, dispatch } = useDialog();
    const [showDialog, setShowDialog] = useState(false);

    const handleClick = () => {
        dispatch({ type: 'OPEN_DIALOG' });
        setShowDialog(true);
    };
    const bgStyle = getSubmitButtonStyle(themeState.color).background;
    const fontStyle = getSubmitButtonStyle(themeState.color).font;
    const hoverStyle = getSubmitButtonStyle(themeState.color).hover;
    const focusStyle = getSubmitButtonStyle(themeState.color).focus;

    useEffect(() => {
        if (!state.isOpen) setShowDialog(state.isOpen);
    }, [state.isOpen]);

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
            {showDialog && <LoginDialog />}
        </>
    );
};

export const BackButton = () => {
    const { state, dispatch } = useDialog();
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        if (!state.isOpen) setShowDialog(state.isOpen);
    }, [state.isOpen]);

    const handleClick = () => {
        dispatch({ type: 'OPEN_DIALOG' });
        setShowDialog(true);
    };

    return (
        <>
            <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                onClick={handleClick}
            >
                返回上一頁
            </button>
            {showDialog && <ConfirmDialog></ConfirmDialog>}
        </>
    )
}