import React from "react";
import { useTheme } from "../../reducer/ThemeContext";
import { useTranslation } from "react-i18next";
import { useNamespace } from "../../reducer/NameSpaceContext";

type Props = {
    htmlFor: string,
    textCode: string,
};

export const Label = ({ htmlFor, textCode: textCode }: Props) => {
    // const { state: themeState } = useTheme();
    // const { t } = useTranslation(themeState.namespace);
    const ns = useNamespace();
    const { t } = useTranslation(ns);

    return (
        <label className="block text-gray-800 font-semibold mb-2" htmlFor={htmlFor}>
            {t(textCode)}
        </label>
    );
};