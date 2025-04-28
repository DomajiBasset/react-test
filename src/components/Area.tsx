import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useTheme } from "../reducer/ThemeContext";

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
    labelClassName = "",
    childrenClassName = "" }: { label: string; children: React.ReactNode, labelClassName?: string, childrenClassName?: string }) => {
    const { state: themeState } = useTheme();
    const { t } = useTranslation(themeState.namespace);

    return (
        <>
            <div className="flex flex-col w-full">
                {/* 標籤區域 */}
                <div className={`bg-gray-200 p-2 ${labelClassName}`}>
                    {t(label)}
                </div>

                {/* 內容區域 */}
                <div className={`bg-gray-100 p-2  ${childrenClassName}`}>
                    {children}
                </div>
            </div>
        </>
    );
};
export default AreaWrapper;
