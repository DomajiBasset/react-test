import React, { InputHTMLAttributes, useState } from "react";
import { useTheme } from "../../reducer/ThemeContext";
import { getInputStyle } from "../../helpers/tool";
import { useTranslation } from "react-i18next";
import { isNullOrWhiteSpace } from "../../helpers/utils";

type Props = {
    id: string,
    type: string,
    className?: string,
    ref?: React.Ref<HTMLInputElement>
    placeholderCode?: string
    errorCode?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ id, type, className = '', ref, placeholderCode = '', errorCode = '', ...rest }: Props) => {
    const { state: themeState } = useTheme();
    const { t } = useTranslation(themeState.namespace);
    const [focus, setFocus] = useState(false);
    const bgStyle = getInputStyle(themeState.color).background;
    const borderStyle = getInputStyle(themeState.color).border;
    const focusStyle = getInputStyle(themeState.color).focus;

    return (
        <>
            <input
                ref={ref}
                id={id}
                type={type}
                className={`rounded ${bgStyle} ${borderStyle} ${focusStyle} ${className}`}
                onFocus={() => setFocus(true)}
                placeholder={t(placeholderCode)}
                {...rest}
            />
            {!isNullOrWhiteSpace(errorCode) && focus &&
                <p className="text-red-500 text-sm">
                    {t(errorCode)}
                </p>
            }
        </>
    )
};