import React from "react";

type Props = {
    isOpen: boolean;
    title?: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
};

const ConfirmDialog = ({ isOpen, title, message, onConfirm, onCancel }: Props) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black opacity-30 flex justify-center items-center z-50"></div>

            <div className="relative flex justify-center items-center h-full z-60">
                <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full space-y-4">
                    {title && <h2 className="text-lg font-bold text-gray-800">{title}</h2>}
                    <p className="text-gray-700">{message}</p>
                    <div className="flex justify-end space-x-3">
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
        </>
    );
};

export default ConfirmDialog;
