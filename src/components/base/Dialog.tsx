import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useTheme } from "../../reducer/ThemeContext";
import { useTranslation } from "react-i18next";
import { Login } from "../../page/login";

type Props = {
    isOpen: boolean;
    title?: string;
    message?: string;
    onConfirm: () => void;
    onCancel: () => void;
    size?: 'small' | 'large' | 'extraLarge2';
    children?: React.ReactNode;
};

const Dialog = ({ isOpen, title, message, onConfirm, onCancel, size = 'small', children }: Props) => {
    if (!isOpen) return null;

    const dialogSizeClasses = {
        small: 'max-w-sm space-y-4',
        large: 'max-w-lg space-y-40',
        extraLarge2: 'max-w-2xl space-y-4',
    };

    return ReactDOM.createPortal(
        <>
            <div className="fixed inset-0 flex items-center justify-center z-[50] bg-black opacity-50">
            </div>

            <div className="fixed inset-0 flex items-center justify-center z-[60]">
                <div className={`bg-white p-6 rounded-xl w-full ${dialogSizeClasses[size]}`}>
                    {title && <h2 className="text-lg text-center font-bold text-gray-800">{title}</h2>}
                    {message && <p className="text-gray-700 text-center">{message}</p>}
                    <div className="">{children}</div>
                    <div className="flex justify-center space-x-3">
                        <button
                            className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400"
                            onClick={onCancel}
                        >
                            取消
                        </button>
                        <button
                            className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                            onClick={onConfirm}
                        >
                            確定
                        </button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('dialog-root')!
    );
};

export default Dialog;

type LoginProps = {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    size?: 'small' | 'large' | 'extraLarge2';
    children?: React.ReactNode;
};
export const LoginDialog = ({ isOpen, onConfirm, onCancel }: LoginProps) => {
    const { state: themeState } = useTheme();
    const { t } = useTranslation(themeState.namespace);

    return (
        <>
            <Dialog
                isOpen={isOpen}
                title={t("LOGIN")}
                size="extraLarge2"
                onConfirm={() => {
                    onConfirm();
                }}
                onCancel={onCancel}
            >
                <Login></Login>
            </Dialog>
        </>
    )
}