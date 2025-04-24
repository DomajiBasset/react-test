import React from "react";
import { useTheme } from "../../reducer/ThemeContext";
import { Trans } from "react-i18next";

type Props = {
    htmlFor: string,
    children: React.ReactNode,
}

export const Label = ({ htmlFor, children }: Props) => {
    const { state: themeState, dispatch } = useTheme();
    return (
        <label className="block text-gray-800 font-semibold mb-2" htmlFor={htmlFor}>
            <Trans>
                {children}
            </Trans>
        </label>
    )
};