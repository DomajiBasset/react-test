import React from "react";
import ReactDOM from "react-dom";
import { useTheme } from "../../reducer/ThemeContext";
import { useTranslation } from "react-i18next";
import { Login } from "../../page/login";
import { useDialog } from "../../reducer/DialogContext";

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
    const { state, dispatch } = useDialog();
    if (!state.isOpen) return null;

    const dialogSizeClasses = {
        small: 'max-w-sm space-y-4',
        large: 'max-w-lg space-y-4',
        extraLarge2: 'max-w-2xl space-y-4',
    };

    const handleCancelClick = () => {
        if (onCancel) onCancel();
        dispatch({ type: 'CLOSE_DIALOG' });
    };

    const handleConfirmClick = () => {
        if (onConfirm) onConfirm();
        dispatch({ type: 'CLOSE_DIALOG' });
    };

    return ReactDOM.createPortal(
        <>
            <div className="fixed inset-0 flex items-center justify-center z-[50] bg-black opacity-50">
            </div>

            <div className="fixed inset-0 flex items-center justify-center z-[60]">
                <div className={`bg-white p-6 rounded-xl w-full ${dialogSizeClasses[size]}`}>
                    {title && <h2 className="text-lg text-center font-bold text-gray-800">{title}</h2>}
                    {message && <p className="text-gray-700 text-center">{message}</p>}
                    {children}
                    {showButton && <div className="flex justify-center space-x-3">
                        <button
                            className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400"
                            onClick={handleCancelClick}
                        >
                            取消
                        </button>
                        <button
                            className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                            onClick={handleConfirmClick}
                        >
                            確定
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
    const { state: themeState } = useTheme();
    const { t } = useTranslation(themeState.namespace);

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