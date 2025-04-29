import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ConfirmDialog from "./ConfirmDialog";

const BackButton = () => {
    const navigate = useNavigate();
    const [showDialog, setShowDialog] = useState(false);

    const handleClick = () => {
        setShowDialog(true);
    };
    const handleConfirm = () => {
        navigate(-1);
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
            >
                返回上一頁
            </button>
            {/* <ConfirmDialog
                isOpen={showDialog}
                title="提示"
                message="確定要返回上一頁嗎？"
                onCancel={() => setShowDialog(false)}
                onConfirm={() => {
                    setShowDialog(false);
                    handleConfirm();
                }}
            /> */}
        </>
    );
};
