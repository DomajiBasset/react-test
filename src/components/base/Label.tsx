import React from "react";
import { useTheme } from "../../reducer/ThemeContext";
import { useTranslation } from "react-i18next";

type Props = {
    htmlFor: string,
    textCode: string,
}

export const Label = ({ htmlFor, textCode: textCode }: Props) => {
    const { state: themeState } = useTheme();
    const { t } = useTranslation(themeState.namespace);

    return (
        <label className="block text-gray-800 font-semibold mb-2" htmlFor={htmlFor}>
            {t(textCode)}
        </label>
    )
};