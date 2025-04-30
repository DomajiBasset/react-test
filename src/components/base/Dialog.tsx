import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useTheme } from "../../reducer/ThemeContext";
import { useTranslation } from "react-i18next";
import { Login } from "../../page/login";
import { useDialog } from "../../reducer/DialogContext";
import { useNavigate } from "react-router";

type Props = {
    title?: string;
    message?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    size?: 'small' | 'large' | 'extraLarge2';
    showButton?: boolean
    children?: React.ReactNode;
};

const Dialog = ({ title, message, onConfirm, onCancel, size = 'small', showButton = true, children }: Props) => {
    const { state } = useDialog();
    if (!state.isOpen) return null;
    const { t } = useTranslation('dialog', { useSuspense: false });

    const dialogSizeClasses = {
        small: 'max-w-sm space-y-4',
        large: 'max-w-lg space-y-4',
        extraLarge2: 'max-w-2xl space-y-4',
    };

    const handleCancelClick = () => {
        if (onCancel) onCancel();
    };

    const handleConfirmClick = () => {
        if (onConfirm) onConfirm();
    };

    return ReactDOM.createPortal(
        <>
            <div className="fixed inset-0 flex items-center justify-center z-[50] bg-black opacity-50">
            </div>

            <div className="fixed inset-0 flex items-center justify-center z-[60]">
                <div
                    className={`bg-white p-6 rounded-xl w-full ${dialogSizeClasses[size]}`}
                >
                    {title && <h2 className="text-lg text-center font-bold text-gray-800">{title}</h2>}
                    {message && <p className="text-gray-700 text-center">{message}</p>}
                    {children}
                    {showButton && <div className="flex justify-center space-x-3">
                        <button
                            className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400"
                            onClick={handleCancelClick}
                        >
                            {t('CANCEL')}
                        </button>
                        <button
                            className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                            onClick={handleConfirmClick}
                        >
                            {t('CONFIRM')}
                        </button>
                    </div>}
                </div>
            </div>
        </>,
        document.getElementById('dialog-root')!
    );
};
export default Dialog;

export const LoginDialog = () => {
    const { t } = useTranslation('login', { useSuspense: false });

    return (
        <>
            {<Dialog
                title={t("LOGIN")}
                size="large"
                showButton={false}
            >
                <Login></Login>
            </Dialog>}
        </>
    );
};

export const ConfirmDialog = () => {
    const navigate = useNavigate();
    const { dispatch } = useDialog();
    const { t } = useTranslation('dialog', { useSuspense: false });
    const handleConfirm = () => {
        dispatch({ type: 'CLOSE_DIALOG' });
        navigate(-1);
    };
    const handleCancel = () => {
        dispatch({ type: 'CLOSE_DIALOG' });
    };

    return (
        <>
            <Dialog
                title={t("HINT")}
                message={t("MSG_CONFIRM_BACK")}
                size="small"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </>
    );
};