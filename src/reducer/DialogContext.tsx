import React, { createContext, ReactNode, useContext, useReducer } from 'react';

// 定義狀態類型
type DialogState = {
    isOpen: boolean;
    title: string;
    message: string;
};

// 定義 action 類型
type DialogAction =
    | { type: 'OPEN_DIALOG'; title: string; message: string }
    | { type: 'CLOSE_DIALOG' };

// 初始狀態
const initialState: DialogState = {
    isOpen: false,
    title: '',
    message: '',
};

// reducer 函數
function dialogReducer(state: DialogState, action: DialogAction): DialogState {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return { ...state, isOpen: true, title: action.title, message: action.message };
        case 'CLOSE_DIALOG':
            return { ...state, isOpen: false, title: '', message: '' };
        default:
            return state;
    }
}

// 創建 Context
const DialogContext = createContext<{ state: DialogState; dispatch: React.Dispatch<DialogAction> } | undefined>(undefined);

// 使用 Context 的自訂 hook
export function useDialog() {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error('useDialog must be used within a DialogProvider');
    }
    return context;
}

// Dialog 提供者
export const DialogProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(dialogReducer, initialState);

    return (
        <DialogContext.Provider value={{ state, dispatch }}>
            {children}
        </DialogContext.Provider>
    );
};
