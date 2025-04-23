import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { getBgColor } from '../helpers/tool';
import { initialTheme, ThemeState } from '../config/theme.config';


type ThemeAction =
    | { type: 'setColor'; color: string }
    | { type: 'reset' };

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
    switch (action.type) {
        case 'setColor':
            return { color: action.color };
        case 'reset':
            return initialTheme;
        default:
            return state;
    }
}

const ThemeContext = createContext<{
    state: ThemeState;
    dispatch: React.Dispatch<ThemeAction>;
}>({ state: initialTheme, dispatch: () => { } });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(themeReducer, initialTheme);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            <div className={`${getBgColor(state.color)} h-screen`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

// 自訂 hook
export const useTheme = () => useContext(ThemeContext);
