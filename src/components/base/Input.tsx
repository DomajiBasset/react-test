import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import { useTheme } from "../../reducer/ThemeContext";
import { getInputStyle } from "../../helpers/tool";
import { useTranslation } from "react-i18next";
import { isNullOrWhiteSpace } from "../../helpers/utils";

type Props = {
    className?: string,
    ref?: React.Ref<HTMLInputElement>
    placeholderCode?: string
    errorCode?: string
    showError?: boolean
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(({ className = '', placeholderCode = '', errorCode = '', showError = false, ...rest }, ref) => {
    const { state: themeState } = useTheme();
    const { t } = useTranslation(themeState.namespace);
    const bgStyle = getInputStyle(themeState.color).background;
    const borderStyle = getInputStyle(themeState.color).border;
    const focusStyle = getInputStyle(themeState.color).focus;

    return (
        <>
            <div className="relative">
                <input
                    ref={ref}
                    className={`w-full p-3 rounded ${bgStyle} ${borderStyle} ${focusStyle} ${className}`}
                    placeholder={t(placeholderCode)}
                    {...rest}
                />
                {!isNullOrWhiteSpace(errorCode) && showError &&
                    <pre className="absolute text-red-500 text-sm">
                        {t(errorCode)}
                    </pre>
                }
            </div>
        </>
    );
});