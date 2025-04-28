import React from "react";
import { DialogProvider } from "./DialogContext";
import { ThemeProvider } from "./ThemeContext";

type Props = {
    children: React.ReactNode;
};

export function Providers({ children }: Props) {
    return (
        <ThemeProvider>
            <DialogProvider>
                {children}
            </DialogProvider>
        </ThemeProvider>
    );
}
