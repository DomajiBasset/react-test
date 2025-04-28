import React, { createContext, ReactNode, useContext, useReducer } from 'react';

// 定義狀態類型
type DialogState = {
    isOpen: boolean;
};

// 定義 action 類型
type DialogAction =
    | { type: 'OPEN_DIALOG' }
    | { type: 'CLOSE_DIALOG' };

// 初始狀態
const initialState: DialogState = {
    isOpen: false,
};

// reducer 函數
function dialogReducer(state: DialogState, action: DialogAction): DialogState {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return { ...state, isOpen: true };
        case 'CLOSE_DIALOG':
            return { ...state, isOpen: false };
        default:
            return state;
    }
}

const DialogContext = createContext<{ state: DialogState; dispatch: React.Dispatch<DialogAction> } | undefined>(undefined);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(dialogReducer, initialState);

    return (
        <DialogContext.Provider value={{ state, dispatch }}>
            {children}
        </DialogContext.Provider>
    );
};

export function useDialog() {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error('useDialog must be used within a DialogProvider');
    }
    return context;
};