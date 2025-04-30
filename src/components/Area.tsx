import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useTheme } from "../reducer/ThemeContext";
import { useNamespace } from "../reducer/NameSpaceContext";

type Props = {
    label: string;
    htmlFor: string;
    children: React.ReactNode;
    className?: string;
};

export function FormField({ label, htmlFor, children, className }: Props) {
    return (
        <div className={`form-field ${className ?? ''}`}>
            <label htmlFor={htmlFor} className="block mb-1 text-sm font-medium text-gray-700">
                <Trans>
                    {label}
                </Trans>
            </label>
            {children}
        </div>
    );
};

const AreaWrapper = ({
    label,
    children,
    className = "",
    labelClassName = "",
    childrenClassName = "" }: { label: string; children: React.ReactNode, className?: string, labelClassName?: string, childrenClassName?: string }) => {
    const { state: themeState } = useTheme();
    // const { t } = useTranslation(themeState.namespace);
    const ns = useNamespace();
    const { t } = useTranslation(ns);

    return (
        <>
            <div className={`w-full flex flex-col ${className}`}>
                <div className={`bg-gray-200 p-2 font-black text-left ${labelClassName}`}>
                    {t(label)}
                </div>

                <div className={`w-full bg-gray-100 p-2 ${childrenClassName}`}>
                    <div className="justify-self-center">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};
export default AreaWrapper;
